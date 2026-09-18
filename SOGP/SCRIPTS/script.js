document.addEventListener('DOMContentLoaded', () => {
    // Data storage
    let allControls = [];
    let filteredControls = [];

    // Using objects to maintain grouped structure for dropdown
    let filterOptions = {
        'Section': new Set(),
        'Category': new Set(),
        'Topic': new Set()
    };

    // Pagination state
    let currentPage = 1;
    const itemsPerPage = 5;

    // DOM Elements
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const classSelect = document.getElementById('classSelect');
    const searchBtn = document.getElementById('searchBtn');
    const resetBtn = document.getElementById('resetBtn');

    // Search mode elements
    const searchModeRadios = document.querySelectorAll('input[name="searchMode"]');
    const fuzzySliderContainer = document.getElementById('fuzzySliderContainer');
    const fuzzySlider = document.getElementById('fuzzySlider');
    const fuzzyValueDisplay = document.getElementById('fuzzyValueDisplay');

    const fileUploadContainer = document.getElementById('fileUploadContainer');
    const xmlFileInput = document.getElementById('xmlFileInput');

    const resultsBody = document.getElementById('resultsBody');
    const resultsSection = document.getElementById('resultsSection');
    const resultsCount = document.getElementById('resultsCount');
    const loadingIndicator = document.getElementById('loadingIndicator');

    // Pagination DOM Elements
    const prevPageBtn = document.getElementById('prevPageBtn');
    const nextPageBtn = document.getElementById('nextPageBtn');
    const prevPageBtnMobile = document.getElementById('prevPageBtnMobile');
    const nextPageBtnMobile = document.getElementById('nextPageBtnMobile');
    const pageIndicator = document.getElementById('pageIndicator');
    const pageStartItem = document.getElementById('pageStartItem');
    const pageEndItem = document.getElementById('pageEndItem');
    const totalItems = document.getElementById('totalItems');

    // Initialize application
    async function init() {
        showLoading(true);
        try {
            // Add a cache buster query parameter if we're on http/https so we always get the newest XML
            const cacheBuster = window.location.protocol.startsWith('http') ? '?cb=' + new Date().getTime() : '';

            // Try different paths to avoid 404s depending on how it's served
            const pathsToTry = ['SOGP_2026.xml', '/SOGP/SOGP_2026.xml', '../SOGP/SOGP_2026.xml'];
            let response = null;

            for (const path of pathsToTry) {
                try {
                    const res = await fetch(path + cacheBuster);
                    if (res.ok) {
                        response = res;
                        break;
                    }
                } catch (e) {
                    // Ignore and try next path (this also catches CORS errors on file://)
                    console.log('Failed to fetch from ' + path);
                }
            }

            if (!response) throw new Error('CORS / Fetch geblokkeerd of bestand niet gevonden');
            const xmlText = await response.text();

            parseXML(xmlText);
            populateClassDropdown();

            // Do not render table on load, wait for search action.

        } catch (error) {
            console.error('Fout bij initialisatie:', error);
            // Show fallback file uploader instead of just an error
            fileUploadContainer.classList.remove('hidden');
            resultsSection.classList.remove('hidden');
            resultsBody.innerHTML = '<tr><td colspan="3" class="px-6 py-4 text-center text-gray-500 font-medium">Gelieve het SOGP XML bestand hierboven handmatig te selecteren om verder te gaan.</td></tr>';
        } finally {
            showLoading(false);
        }
    }

    function getGroupTitle(groupEl) {
        if (!groupEl) return '';
        const titleEl = groupEl.querySelector(':scope > title');
        return titleEl ? titleEl.textContent.trim() : groupEl.getAttribute('class') || '';
    }

    // Handle manual file upload
    xmlFileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;

        showLoading(true);
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                // Clear any previous state
                allControls = [];
                filterOptions = { 'Section': new Set(), 'Category': new Set(), 'Topic': new Set() };
                classSelect.innerHTML = '<option value="">-- Alle --</option>';

                parseXML(e.target.result);
                populateClassDropdown();

                // Reset UI after successful manual load
                fileUploadContainer.classList.add('hidden');
                resultsSection.classList.add('hidden');
                resultsBody.innerHTML = '';
                searchInput.value = '';

            } catch (err) {
                console.error('Fout bij verwerken van bestand:', err);
                resultsSection.classList.remove('hidden');
                resultsBody.innerHTML = '<tr><td colspan="4" class="px-6 py-4 text-center text-red-500">Fout bij het verwerken van het geselecteerde bestand: ' + err.message + '</td></tr>';
            } finally {
                showLoading(false);
            }
        };
        reader.onerror = function() {
            showLoading(false);
            resultsSection.classList.remove('hidden');
            resultsBody.innerHTML = '<tr><td colspan="4" class="px-6 py-4 text-center text-red-500">Fout bij het inlezen van het bestand.</td></tr>';
        };
        reader.readAsText(file);
    });

    function parseXML(xmlText) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        // Use getElementsByTagNameNS to handle namespaces if necessary,
        // but localName works well across implementations.
        const controls = xmlDoc.querySelectorAll('control');

        controls.forEach(control => {
            const id = control.getAttribute('id') || '';
            const titleEl = control.querySelector('title');
            const title = titleEl ? titleEl.textContent.trim() : '';

            // Extract Hierarchy
            const parentTopic = control.closest('group[class="topic"]');
            const parentCategory = control.closest('group[class="Category"]') || (parentTopic ? parentTopic.closest('group[class="Category"]') : null);
            const parentSection = control.closest('group[class="Section"]') || (parentCategory ? parentCategory.closest('group[class="Section"]') : null);

            const topicTitle = getGroupTitle(parentTopic);
            const categoryTitle = getGroupTitle(parentCategory);
            const sectionTitle = getGroupTitle(parentSection);

            if (topicTitle) filterOptions['Topic'].add(topicTitle);
            if (categoryTitle) filterOptions['Category'].add(categoryTitle);
            if (sectionTitle) filterOptions['Section'].add(sectionTitle);

            // Hierarchy string for display
            let hierarchyArr = [];
            if (sectionTitle) hierarchyArr.push(sectionTitle);
            if (categoryTitle) hierarchyArr.push(categoryTitle);
            if (topicTitle) hierarchyArr.push(topicTitle);
            const hierarchyString = hierarchyArr.join(' > ');

            // Extract all parts (statement, objective, etc.) for detailed view and searching
            const parts = control.querySelectorAll('part');
            let fullText = '';
            let detailedHtml = '';
            let briefDescription = '';

            parts.forEach(part => {
                const partName = part.getAttribute('name') || '';
                fullText += partName + ' ';

                // Get inner HTML of part to preserve <p>, <ul>, <ol>, etc.
                // Convert NodeList to Array to map over it, or just use innerHTML if available
                let partHtml = '';
                Array.from(part.childNodes).forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        partHtml += node.outerHTML;
                        fullText += node.textContent + ' ';
                    } else if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
                        partHtml += '<p>' + node.textContent + '</p>';
                        fullText += node.textContent + ' ';
                    }
                });

                if (partName) {
                    detailedHtml += '<h4>' + capitalizeFirstLetter(partName) + '</h4>';
                }
                detailedHtml += partHtml;

                // Grab the first statement paragraph as brief description
                if (partName === 'statement' && !briefDescription) {
                    const firstP = part.querySelector('p');
                    if (firstP) briefDescription = firstP.textContent.trim();
                }
            });

            // If no statement found, try to get just the first paragraph of anything
            if (!briefDescription) {
                const firstP = control.querySelector('p');
                if (firstP) briefDescription = firstP.textContent.trim();
            }

            let fullTextSearchOriginal = (id + ' ' + title + ' ' + fullText + ' ' + hierarchyString);

            // Strip any raw HTML tags to ensure we only search visible text and metadata
            fullTextSearchOriginal = fullTextSearchOriginal.replace(/<[^>]*>?/gm, '');

            const fullTextSearchLower = fullTextSearchOriginal.toLowerCase();

            // Tokenize for whole word and fuzzy search.
            // Extract words but preserve internal punctuation (e.g., AI1.1.1 or AI-powered)
            const rawTokens = fullTextSearchOriginal.match(/[\w\.\-\+]+/g) || [];
            // Remove leading/trailing non-alphanumeric characters from each token
            const wordsArrOriginal = rawTokens.map(w => w.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '')).filter(w => w.length > 0);
            const wordsArrLower = wordsArrOriginal.map(w => w.toLowerCase());

            const wordsSetOriginal = Array.from(new Set(wordsArrOriginal));
            const wordsSetLower = Array.from(new Set(wordsArrLower));

            allControls.push({
                id: id,
                title: title,
                hierarchyString: hierarchyString,
                topicTitle: topicTitle,
                categoryTitle: categoryTitle,
                sectionTitle: sectionTitle,
                briefDescription: briefDescription.substring(0, 150) + (briefDescription.length > 150 ? '...' : ''),
                fullTextSearchOriginal: fullTextSearchOriginal,
                fullTextSearchLower: fullTextSearchLower,
                wordsSetOriginal: wordsSetOriginal,
                wordsSetLower: wordsSetLower,
                detailedHtml: detailedHtml
            });
        });
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function populateClassDropdown() {
        // Create optgroups for structured filtering
        const groups = [
            { label: 'Secties', data: filterOptions['Section'] },
            { label: 'Categorieën', data: filterOptions['Category'] },
            { label: 'Topics', data: filterOptions['Topic'] }
        ];

        groups.forEach(group => {
            if (group.data.size > 0) {
                const optgroup = document.createElement('optgroup');
                optgroup.label = group.label;

                const sortedItems = Array.from(group.data).sort();
                sortedItems.forEach(item => {
                    const option = document.createElement('option');
                    option.value = item;
                    option.textContent = item;
                    optgroup.appendChild(option);
                });

                classSelect.appendChild(optgroup);
            }
        });
    }

    // Levenshtein distance for fuzzy matching
    function levenshteinDistance(a, b) {
        const matrix = [];
        for (let i = 0; i <= b.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= a.length; j++) {
            matrix[0][j] = j;
        }
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1, // substitution
                        Math.min(matrix[i][j - 1] + 1, // insertion
                        matrix[i - 1][j] + 1) // deletion
                    );
                }
            }
        }
        return matrix[b.length][a.length];
    }

    // Helper: Is word `b` a fuzzy match for target `a` based on the given percentage?
    function isFuzzyMatch(targetTerm, word, accuracyPct, isPartial, isCaseSensitive) {
        // Adjust casing based on setting
        const a = isCaseSensitive ? targetTerm : targetTerm.toLowerCase();
        const b = isCaseSensitive ? word : word.toLowerCase();

        if (a === b) return true;
        if (isPartial && b.includes(a)) return true; // Direct substring if partial allowed

        // Calculate allowed edits based on target length and selected percentage
        const missRatio = (100 - accuracyPct) / 100;
        const allowedEdits = Math.max(1, Math.ceil(a.length * missRatio));

        // Only attempt fuzzy if strings are somewhat similar in length
        if (a.length > 2 && Math.abs(a.length - b.length) <= allowedEdits) {
            const dist = levenshteinDistance(a, b);
            return dist <= allowedEdits;
        }
        return false;
    }

    // Search Logic
    function performSearch() {
        resultsSection.classList.remove('hidden');

        const rawQuery = searchInput.value.trim();
        const queryLower = rawQuery.toLowerCase();

        const selectedClass = classSelect.value;
        const searchMode = document.querySelector('input[name="searchMode"]:checked').value; // 'strict' or 'fuzzy'
        const fuzzyAccuracy = parseInt(fuzzySlider.value, 10);

        const matchType = document.querySelector('input[name="matchType"]:checked').value; // 'partial' or 'whole'
        const isCaseSensitive = document.getElementById('caseSensitiveCheck').checked;

        filteredControls = allControls.filter(control => {
            let matchesClass = true;
            if (selectedClass) {
                // Check if selectedClass matches any level of the hierarchy
                matchesClass = (
                    control.sectionTitle === selectedClass ||
                    control.categoryTitle === selectedClass ||
                    control.topicTitle === selectedClass
                );
            }

            let matchesQuery = true;
            if (rawQuery) {
                let terms = [];
                let operator = 'and'; // default implicit

                // Split logic based on lowercase to detect ' and ' / ' or ' case-insensitively,
                // but preserve the original terms for case-sensitive searching.
                if (queryLower.includes(' or ')) {
                    operator = 'or';
                    // We split by case-insensitive ' or '
                    terms = rawQuery.split(/ or /i).map(t => t.trim()).filter(t => t);
                } else if (queryLower.includes(' and ')) {
                    operator = 'and';
                    terms = rawQuery.split(/ and /i).map(t => t.trim()).filter(t => t);
                } else {
                    terms = rawQuery.split(/\s+/).map(t => t.trim()).filter(t => t);
                }

                if (searchMode === 'strict') {
                    // Strict Search
                    const fullText = isCaseSensitive ? control.fullTextSearchOriginal : control.fullTextSearchLower;
                    const wordsSet = isCaseSensitive ? control.wordsSetOriginal : control.wordsSetLower;

                    const testTerm = (term) => {
                        const t = isCaseSensitive ? term : term.toLowerCase();
                        if (matchType === 'partial') {
                            return fullText.includes(t);
                        } else {
                            // Whole word exact match
                            return wordsSet.includes(t);
                        }
                    };

                    if (operator === 'or') {
                        matchesQuery = terms.some(testTerm);
                    } else {
                        matchesQuery = terms.every(testTerm);
                    }
                } else {
                    // Fuzzy Search
                    const wordsSet = isCaseSensitive ? control.wordsSetOriginal : control.wordsSetLower;
                    const isPartial = matchType === 'partial';

                    const testTermFuzzy = (term) => {
                        return wordsSet.some(word => isFuzzyMatch(term, word, fuzzyAccuracy, isPartial, isCaseSensitive));
                    };

                    if (operator === 'or') {
                        matchesQuery = terms.some(testTermFuzzy);
                    } else {
                        matchesQuery = terms.every(testTermFuzzy);
                    }
                }
            }

            return matchesClass && matchesQuery;
        });

        currentPage = 1; // Reset to first page on new search
        updatePagination();
        renderTable();
    }

    function resetSearch() {
        searchInput.value = '';
        classSelect.value = '';
        filteredControls = [];
        currentPage = 1;

        resultsSection.classList.add('hidden');
    }

    // Pagination Logic
    function updatePagination() {
        const total = filteredControls.length;
        const maxPage = Math.ceil(total / itemsPerPage) || 1; // At least 1 page even if 0 items

        if (currentPage > maxPage) currentPage = maxPage;
        if (currentPage < 1) currentPage = 1;

        const startIdx = (currentPage - 1) * itemsPerPage;
        const endIdx = Math.min(startIdx + itemsPerPage, total);

        resultsCount.textContent = total;
        totalItems.textContent = total;
        pageStartItem.textContent = total === 0 ? 0 : startIdx + 1;
        pageEndItem.textContent = endIdx;
        pageIndicator.textContent = 'Pagina ' + currentPage + ' van ' + maxPage;

        // Button states
        const prevDisabled = currentPage === 1;
        const nextDisabled = currentPage === maxPage;

        prevPageBtn.disabled = prevDisabled;
        prevPageBtnMobile.disabled = prevDisabled;
        nextPageBtn.disabled = nextDisabled;
        nextPageBtnMobile.disabled = nextDisabled;

        [prevPageBtn, prevPageBtnMobile].forEach(btn => {
            btn.classList.toggle('opacity-50', prevDisabled);
            btn.classList.toggle('cursor-not-allowed', prevDisabled);
        });

        [nextPageBtn, nextPageBtnMobile].forEach(btn => {
            btn.classList.toggle('opacity-50', nextDisabled);
            btn.classList.toggle('cursor-not-allowed', nextDisabled);
        });
    }

    function goToPage(delta) {
        const total = filteredControls.length;
        const maxPage = Math.ceil(total / itemsPerPage);

        let newPage = currentPage + delta;
        if (newPage >= 1 && newPage <= maxPage) {
            currentPage = newPage;
            updatePagination();
            renderTable();
        }
    }

    function highlightTextNodes(htmlString, terms, matchType, isCaseSensitive) {
        if (!terms || terms.length === 0) return htmlString;

        const escapedTerms = terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        const searchMode = document.querySelector('input[name="searchMode"]:checked').value;

        // Pass 1: Exact highlighting
        // For fuzzy mode, we fallback to partial exact highlighting first.
        const actualMatchType = searchMode === 'fuzzy' ? 'partial' : matchType;
        let pattern = actualMatchType === 'whole' ? '\\b(' + escapedTerms.join('|') + ')\\b' : '(' + escapedTerms.join('|') + ')';
        const flags = isCaseSensitive ? 'g' : 'gi';

        let regex;
        try {
            regex = new RegExp(pattern, flags);
        } catch(e) {
            return htmlString; // fallback if regex compilation fails
        }

        let pass1 = htmlString.replace(/(<[^>]+>)|([^<]+)/g, function(match, tag, text) {
            if (tag) return tag;
            if (text) {
                return text.replace(regex, '<mark class="bg-vabGeel bg-opacity-60 text-gray-900 rounded px-1 font-semibold">$1</mark>');
            }
            return match;
        });

        // Pass 2: Fuzzy highlighting
        if (searchMode === 'fuzzy') {
            const fuzzyAccuracy = parseInt(document.getElementById('fuzzySlider').value, 10);
            const isPartial = matchType === 'partial';

            // Extract individual words from terms for fuzzy matching
            let fuzzyTerms = [];
            terms.forEach(t => {
                fuzzyTerms = fuzzyTerms.concat(t.split(/\s+/).filter(w => w.length > 0));
            });

            // Use a regex that skips <mark> tags and their contents entirely,
            // preventing the second pass from wrapping fuzzy matches around already exact-matched text.
            let pass2 = pass1.replace(/(<mark[^>]*>.*?<\/mark>)|(<[^>]+>)|([^<]+)/g, function(match, markTag, tag, text) {
                if (markTag) return markTag;
                if (tag) return tag;
                if (text) {
                    return text.replace(/([\w\.\-\+]+)/g, function(wordMatch) {
                        let isFuzzy = false;
                        for (let term of fuzzyTerms) {
                            if (isFuzzyMatch(term, wordMatch, fuzzyAccuracy, isPartial, isCaseSensitive)) {
                                isFuzzy = true;
                                break;
                            }
                        }
                        if (isFuzzy) {
                            return '<mark class="bg-vabLichtblauw bg-opacity-60 text-gray-900 rounded px-1 font-semibold">' + wordMatch + '</mark>';
                        }
                        return wordMatch;
                    });
                }
                return match;
            });
            return pass2;
        }

        return pass1;
    }

    // Rendering Logic
    function renderTable() {
        resultsBody.innerHTML = '';

        if (filteredControls.length === 0) {
            resultsBody.innerHTML = '<tr><td colspan="4" class="px-6 py-4 text-center text-gray-500">Geen resultaten gevonden.</td></tr>';
            return;
        }

        const rawQuery = searchInput.value.trim();
        const queryLower = rawQuery.toLowerCase();
        let terms = [];
        if (rawQuery) {
            if (queryLower.includes(' or ')) {
                terms = rawQuery.split(/ or /i).map(t => t.trim()).filter(t => t);
            } else if (queryLower.includes(' and ')) {
                terms = rawQuery.split(/ and /i).map(t => t.trim()).filter(t => t);
            } else {
                terms = rawQuery.split(/\s+/).map(t => t.trim()).filter(t => t);
            }
        }

        const matchType = document.querySelector('input[name="matchType"]:checked').value;
        const isCaseSensitive = document.getElementById('caseSensitiveCheck').checked;

        const startIdx = (currentPage - 1) * itemsPerPage;
        const endIdx = Math.min(startIdx + itemsPerPage, filteredControls.length);
        const pageItems = filteredControls.slice(startIdx, endIdx);

        pageItems.forEach((control, index) => {
            const trId = 'row-' + index;
            const detailsId = 'details-' + index;

            // Apply highlighting
            const highlightedTitle = highlightTextNodes(control.title, terms, matchType, isCaseSensitive);
            const highlightedDesc = highlightTextNodes(control.briefDescription, terms, matchType, isCaseSensitive);
            const highlightedDetails = highlightTextNodes(control.detailedHtml, terms, matchType, isCaseSensitive);

            // Main Row
            const tr = document.createElement('tr');
            tr.className = 'clickable-row hover:bg-gray-50 block sm:table-row border-b sm:border-b-0 border-gray-200';
            tr.innerHTML =
                '<td class="px-4 pt-4 pb-2 sm:px-6 sm:py-4 block sm:table-cell sm:whitespace-nowrap text-sm text-gray-900 border-b border-gray-100 sm:border-0">' +
                    '<div class="font-semibold text-vabBlauw">' + highlightedTitle + '</div>' +
                    '<div class="text-xs text-gray-500 mt-1">ID: ' + control.id + '</div>' +
                '</td>' +
                '<td class="px-4 py-2 sm:px-6 sm:py-4 block sm:table-cell text-sm text-gray-500">' +
                    '<div class="text-xs text-vabGroen1 mb-2 font-medium tracking-wide">' + control.hierarchyString + '</div>' +
                    '<div class="text-gray-700">' + highlightedDesc + '</div>' +
                '</td>' +
                '<td class="px-4 pt-2 pb-4 sm:px-6 sm:py-4 block sm:table-cell text-left sm:text-right sm:whitespace-nowrap text-sm font-medium align-top">' +
                    '<button class="toggle-btn" data-target="' + detailsId + '">Toon info</button>' +
                '</td>';

            // Detailed Info Row (Hidden by default)
            const detailsTr = document.createElement('tr');
            detailsTr.id = detailsId;
            detailsTr.className = 'hidden';
            detailsTr.innerHTML =
                '<td colspan="3" class="p-0 block sm:table-cell">' +
                    '<div class="details-container">' +
                        '<div class="details-content">' +
                            highlightedDetails +
                        '</div>' +
                    '</div>' +
                '</td>';

            // Add click event listener to the main row
            tr.addEventListener('click', function(e) {
                // Prevent toggling if selecting text
                if (window.getSelection().toString().length > 0) return;

                const isHidden = detailsTr.classList.contains('hidden');
                const btn = tr.querySelector('.toggle-btn');

                if (isHidden) {
                    detailsTr.className = 'block sm:table-row';
                    btn.textContent = 'Verberg info';
                    tr.classList.add('bg-gray-50');
                } else {
                    detailsTr.className = 'hidden';
                    btn.textContent = 'Toon info';
                    tr.classList.remove('bg-gray-50');
                }
            });

            resultsBody.appendChild(tr);
            resultsBody.appendChild(detailsTr);
        });
    }

    function showLoading(isLoading) {
        if (isLoading) {
            loadingIndicator.classList.add('loading');
            loadingIndicator.classList.remove('hidden');
        } else {
            loadingIndicator.classList.remove('loading');
            loadingIndicator.classList.add('hidden');
        }
    }

    // Event Listeners

    // Toggle fuzzy slider visibility
    searchModeRadios.forEach(radio => {
        radio.addEventListener('change', function(e) {
            if (e.target.value === 'fuzzy') {
                fuzzySliderContainer.classList.remove('hidden');
                fuzzySliderContainer.classList.add('flex');
            } else {
                fuzzySliderContainer.classList.add('hidden');
                fuzzySliderContainer.classList.remove('flex');
            }
            // Trigger search when mode changes
            performSearch();
        });
    });

    // Update display value and search when slider changes
    fuzzySlider.addEventListener('input', function(e) {
        fuzzyValueDisplay.textContent = e.target.value;
    });

    fuzzySlider.addEventListener('change', function(e) {
        performSearch();
    });

    searchBtn.addEventListener('click', performSearch);

    // Also trigger search when matchType or caseSensitive options change
    document.querySelectorAll('input[name="matchType"]').forEach(radio => {
        radio.addEventListener('change', function(e) {
            performSearch();
        });
    });

    document.getElementById('caseSensitiveCheck').addEventListener('change', function(e) {
        performSearch();
    });

    // Allow searching dynamically as user types
    searchInput.addEventListener('input', performSearch);

    // Allow searching on 'Enter' key (prevents form submission if applicable)
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });

    classSelect.addEventListener('change', performSearch);
    resetBtn.addEventListener('click', resetSearch);

    prevPageBtn.addEventListener('click', () => goToPage(-1));
    nextPageBtn.addEventListener('click', () => goToPage(1));
    prevPageBtnMobile.addEventListener('click', () => goToPage(-1));
    nextPageBtnMobile.addEventListener('click', () => goToPage(1));

    // Start!
    init();
});