document.addEventListener('DOMContentLoaded', () => {

    // =================================================================================
    // 1. CENTRAL PRODUCT CATALOG
    // =================================================================================
    // This is the single source of truth for all products.
    // To add, edit, or remove products, you only need to modify this section.
    const productCatalog = [
        // -- CCTV & Security Products --
        {
            id: 'WS-CCTV-001',
            category: 'CCTV & Security',
            brand: 'CP Plus',
            series: 'Guard+ Series',
            subtype: 'Dome Camera',
            model: 'CP-UNC-DA21L3',
            image: 'https://via.placeholder.com/300x220.png/0a1f44/ffffff?text=Dome+Camera',
            features: ['2MP Resolution', 'IR Night Vision', 'H.265+ Codec', 'IP67 Weatherproof']
        },
        {
            id: 'WS-CCTV-002',
            category: 'CCTV & Security',
            brand: 'Hikvision',
            series: 'AcuSense Series',
            subtype: 'Bullet Camera',
            model: 'DS-2CD2047G2-LU',
            image: 'https://via.placeholder.com/300x220.png/0a1f44/ffffff?text=Bullet+Camera',
            features: ['4MP ColorVu', 'Human/Vehicle Detection', 'Built-in Mic', 'IP67']
        },
        {
            id: 'WS-CCTV-003',
            category: 'CCTV & Security',
            brand: 'CP Plus',
            series: 'Indigo Series',
            subtype: 'DVR',
            model: 'CP-UVR-0401E1-S',
            image: 'https://via.placeholder.com/300x220.png/0a1f44/ffffff?text=DVR',
            features: ['4 Channel DVR', '5MP Lite Support', 'P2P Cloud', 'HDMI/VGA Output']
        },
        {
            id: 'WS-SEC-001',
            category: 'CCTV & Security',
            brand: 'WebSankalp',
            series: 'Access Pro',
            subtype: 'Access Control',
            model: 'WS-AC-F10',
            image: 'https://via.placeholder.com/300x220.png/0a1f44/ffffff?text=Access+Control',
            features: ['Fingerprint & RFID', 'TCP/IP Communication', '500 User Capacity', 'Electric Lock Support']
        },

        // -- Barcode & RFID Products --
        {
            id: 'WS-BC-001',
            category: 'Barcode & RFID',
            brand: 'Zebra',
            series: 'TC21 Series',
            subtype: 'Handheld Scanner',
            model: 'TC210K-01A222-NA',
            image: 'https://via.placeholder.com/300x220.png/f57c00/ffffff?text=Scanner',
            features: ['Android 10', '5-inch HD Display', '1D/2D Imager', 'Wi-Fi/Bluetooth']
        },
        {
            id: 'WS-BC-002',
            category: 'Barcode & RFID',
            brand: 'Honeywell',
            series: 'PC42t Series',
            subtype: 'Label Printer',
            model: 'PC42t Plus',
            image: 'https://via.placeholder.com/300x220.png/f57c00/ffffff?text=Printer',
            features: ['Thermal Transfer', '203 dpi Resolution', 'Fast Print Speed', 'Easy-to-use']
        },

        // -- POS Systems Products --
        {
            id: 'WS-POS-001',
            category: 'POS Systems',
            brand: 'WebSankalp',
            series: 'RetailMax',
            subtype: 'Billing Software',
            model: 'WS-RetailMax-Cloud',
            image: 'https://via.placeholder.com/300x220.png/4caf50/ffffff?text=POS+Software',
            features: ['Cloud-Based', 'Inventory Management', 'GST Ready', 'CRM Included']
        },
        // -- Custom Software Products --
        {
            id: 'WS-SW-001',
            category: 'Custom Software',
            brand: 'WebSankalp',
            series: 'Enterprise Suite',
            subtype: 'ERP System',
            model: 'WS-ERP-Pro',
            image: 'https://via.placeholder.com/300x220.png/607d8b/ffffff?text=ERP+Solution',
            features: ['Modular Design', 'Scalable Architecture', 'Cloud Deployment', 'API Integration']
        }
    ];


    // =================================================================================
    // 2. PRODUCT EXPLORER PAGE LOGIC
    // =================================================================================

    // This function runs only if we are on the product explorer page
    const initializeProductExplorer = () => {
        const productGrid = document.querySelector('.product-display-grid');
        if (!productGrid) return; // Exit if we're not on the products page

        const categoryFilterContainer = document.getElementById('filter-category');
        const brandFilterContainer = document.getElementById('filter-brand');
        const searchInput = document.getElementById('product-search');
        const resultsCount = document.getElementById('results-count');

        // --- Step 1: Populate Filters Dynamically ---
        const populateFilters = () => {
            const categories = [...new Set(productCatalog.map(p => p.category))];
            const brands = [...new Set(productCatalog.map(p => p.brand))];

            categoryFilterContainer.innerHTML = categories.map(c => `
                <div>
                    <input type="checkbox" id="cat-${c.replace(/\s+/g, '-')}" value="${c}" name="category">
                    <label for="cat-${c.replace(/\s+/g, '-')}">${c}</label>
                </div>
            `).join('');

            brandFilterContainer.innerHTML = brands.map(b => `
                <div>
                    <input type="checkbox" id="brand-${b.replace(/\s+/g, '-')}" value="${b}" name="brand">
                    <label for="brand-${b.replace(/\s+/g, '-')}">${b}</label>
                </div>
            `).join('');
        };
        
        // --- Step 2: Render Products to the Grid ---
        const renderProducts = (productsToRender) => {
            if (productsToRender.length === 0) {
                productGrid.innerHTML = `<p class="no-results">No products match your criteria.</p>`;
            } else {
                 productGrid.innerHTML = productsToRender.map(p => `
                    <div class="product-card-detailed">
                        <img src="${p.image}" alt="${p.model}">
                        <div class="product-card-content">
                            <span class="product-card-subtype">${p.brand} - ${p.subtype}</span>
                            <h4 class="product-card-model">${p.model}</h4>
                            <a href="contact.html?product=${p.model}" class="btn btn-secondary" style="width:100%; text-align:center; margin-top:1rem;">Know More</a>
                        </div>
                    </div>
                `).join('');
            }
            resultsCount.textContent = `Showing ${productsToRender.length} of ${productCatalog.length} products`;
        };

        // --- Step 3: Filter Products based on user input ---
        const applyFilters = () => {
            const searchTerm = searchInput.value.toLowerCase();
            const checkedCategories = [...document.querySelectorAll('input[name="category"]:checked')].map(el => el.value);
            const checkedBrands = [...document.querySelectorAll('input[name="brand"]:checked')].map(el => el.value);

            const filteredProducts = productCatalog.filter(product => {
                const matchesCategory = checkedCategories.length === 0 || checkedCategories.includes(product.category);
                const matchesBrand = checkedBrands.length === 0 || checkedBrands.includes(product.brand);
                const matchesSearch = product.model.toLowerCase().includes(searchTerm) || 
                                      product.series.toLowerCase().includes(searchTerm) ||
                                      product.subtype.toLowerCase().includes(searchTerm);
                
                return matchesCategory && matchesBrand && matchesSearch;
            });
            renderProducts(filteredProducts);
        };
        
        // --- Step 4: Check for URL parameters to pre-filter ---
        const preFilterFromUrl = () => {
             const urlParams = new URLSearchParams(window.location.search);
             const categoryParam = urlParams.get('category');
             if(categoryParam){
                const checkbox = document.querySelector(`input[name="category"][value="${categoryParam}"]`);
                if(checkbox) checkbox.checked = true;
             }
        };

        // --- Initialization ---
        populateFilters();
        preFilterFromUrl();
        applyFilters(); // Initial render with all products or pre-filtered ones

        // --- Event Listeners ---
        [categoryFilterContainer, brandFilterContainer].forEach(container => {
            container.addEventListener('change', applyFilters);
        });
        searchInput.addEventListener('keyup', applyFilters);
    };


    // =================================================================================
    // 3. GLOBAL SITE-WIDE SCRIPTS
    // =================================================================================

    // --- Mobile Navigation Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // --- Scroll to Top Button ---
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (scrollToTopBtn) {
        window.onscroll = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // --- Run page-specific logic ---
    if (document.body.id === 'product-explorer-page') {
        initializeProductExplorer();
    }
});