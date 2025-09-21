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
            brand: 'Bosch',
            series: 'FLEXIDOME Series',
            subtype: 'Dome Camera',
            model: 'FLEXIDOME IP',
            image: 'Images/Security/Camera/Bosch/flexdome.jpg',
            features: ['HD Resolution', 'Wide Dynamic Range', 'Vandal Resistant', 'Smart Analytics']
        },
        {
            id: 'WS-CCTV-002',
            category: 'CCTV & Security',
            brand: 'Bosch',
            series: 'Security Camera',
            subtype: 'Network Camera',
            model: 'NBC Series',
            image: 'Images/Security/Camera/Bosch/netwokca.jpg',
            features: ['Network Connectivity', 'High Resolution', 'Remote Access', 'Motion Detection']
        },
        {
            id: 'WS-CCTV-003',
            category: 'CCTV & Security',
            brand: 'Honeywell',
            series: 'Performance Series',
            subtype: 'Box Camera',
            model: 'HBX-3300',
            image: 'Images/Security/Camera/Honeywell/boxcam.png',
            features: ['3MP Resolution', 'Day/Night Vision', 'Flexible Mounting', 'Professional Grade']
        },
        {
            id: 'WS-CCTV-004',
            category: 'CCTV & Security',
            brand: 'Honeywell',
            series: 'MicroDome Series',
            subtype: 'Micro Dome Camera',
            model: 'MicroDome HD',
            image: 'Images/Security/Camera/Honeywell/Microdome .png',
            features: ['Compact Design', 'HD Quality', 'Easy Installation', 'Wide Coverage']
        },
        {
            id: 'WS-CCTV-005',
            category: 'CCTV & Security',
            brand: 'Vicon',
            series: 'Valkyrie Series',
            subtype: 'Security Camera',
            model: 'Valkyrie 10K',
            image: 'Images/Security/Camera/Vicon/Valkyrie_Flat_Front_10K_V2.png',
            features: ['10MP Resolution', 'Advanced Analytics', 'Weather Resistant', 'Professional Security']
        },
        {
            id: 'WS-CCTV-006',
            category: 'CCTV & Security',
            brand: 'Vicon',
            series: 'Vanguard Series',
            subtype: 'PTZ Camera',
            model: 'Vanguard PTZ',
            image: 'Images/Security/Camera/Vicon/Vanguard.png',
            features: ['Pan-Tilt-Zoom', 'Auto Tracking', 'High Speed', 'Professional Control']
        },

        // -- Access Control Products --
        {
            id: 'WS-AC-001',
            category: 'Access Control',
            brand: 'Dahua',
            series: 'Access Series',
            subtype: 'Access Controller',
            model: 'ASI1201A',
            image: 'Images/Security/access control/Dahua/ASI1201A_ASI1201A-D_thumb.png',
            features: ['RFID Access', 'Multi-User Support', 'Network Connectivity', 'Time Attendance']
        },
        {
            id: 'WS-AC-002',
            category: 'Access Control',
            brand: 'Dahua',
            series: 'Fingerprint Series',
            subtype: 'Biometric Reader',
            model: 'ASI1212F-21',
            image: 'Images/Security/access control/Dahua/ASI1212F-21_thumb.png',
            features: ['Fingerprint Recognition', 'High Accuracy', 'Fast Processing', 'Secure Access']
        },
        {
            id: 'WS-AC-003',
            category: 'Access Control',
            brand: 'ESSL',
            series: 'Attendance Series',
            subtype: 'Time Attendance',
            model: 'ESSL-X628C',
            image: 'Images/Security/access control/essl/essl.png',
            features: ['Face Recognition', 'Fingerprint Scanner', 'Card Reader', 'Cloud Connectivity']
        },

        // -- Video Door Systems --
        {
            id: 'WS-VD-001',
            category: 'Video Door Systems',
            brand: 'Dahua',
            series: 'VTO Series',
            subtype: 'Video Doorbell',
            model: 'VTO3211D-P',
            image: 'Images/Security/Video door/dahua/doorbell.png',
            features: ['HD Video Call', 'Motion Detection', 'Night Vision', 'Mobile App']
        },
        {
            id: 'WS-VD-002',
            category: 'Video Door Systems',
            brand: 'Hikvision',
            series: 'Door Station',
            subtype: 'IP Door Station',
            model: 'DS-KV6113-WPE1',
            image: 'Images/Security/Video door/Hikvision/hik1.png',
            features: ['Weather Resistant', 'Two-Way Audio', 'Remote Unlock', 'High Definition']
        },

        // -- Audio Solutions --
        {
            id: 'WS-AUD-001',
            category: 'Audio Solutions',
            brand: 'boAt',
            series: 'Rockerz Series',
            subtype: 'Wireless Headphones',
            model: 'Rockerz 480',
            image: 'Images/Audio_Video/audio_solutions/headphones/boAt Rockerz 480 W_RGB .png',
            features: ['RGB Lighting', 'Wireless Bluetooth', 'Long Battery Life', 'Bass Boost']
        },
        {
            id: 'WS-AUD-002',
            category: 'Audio Solutions',
            brand: 'JBL',
            series: 'Tune Series',
            subtype: 'Wireless Headphones',
            model: 'Tune 510BT',
            image: 'Images/Audio_Video/audio_solutions/headphones/JBL Tune 510BT, On Ear Wireless Headphones .png',
            features: ['Pure Bass Sound', '40H Battery Life', 'Wireless Freedom', 'Hands-free Calls']
        },
        {
            id: 'WS-AUD-003',
            category: 'Audio Solutions',
            brand: 'Sony',
            series: 'Professional Series',
            subtype: 'Headphones',
            model: 'Sony Professional',
            image: 'Images/Audio_Video/audio_solutions/headphones/SONY.png',
            features: ['Studio Quality', 'Noise Cancellation', 'Premium Build', 'Professional Audio']
        },
        {
            id: 'WS-AUD-004',
            category: 'Audio Solutions',
            brand: 'JBL',
            series: 'Cinema Series',
            subtype: 'Soundbar',
            model: 'Cinema SB580',
            image: 'Images/Audio_Video/audio_solutions/soundbars/JBL Cinema SB580 440W Bluetooth Soundbar.png',
            features: ['440W Power', 'Bluetooth Connectivity', 'Cinema Experience', 'Wireless Subwoofer']
        },
        {
            id: 'WS-AUD-005',
            category: 'Audio Solutions',
            brand: 'Sony',
            series: 'ULT Series',
            subtype: 'Party Speaker',
            model: 'ULT TOWER 10',
            image: 'Images/Audio_Video/audio_solutions/speakers/Sony ULT TOWER 10 Party Speaker.png',
            features: ['High Power Output', 'Party Lighting', 'Wireless Connectivity', 'Deep Bass']
        },

        // -- Camera Equipment --
        {
            id: 'WS-CAM-001',
            category: 'Camera Equipment',
            brand: 'Canon',
            series: 'EOS Series',
            subtype: 'DSLR Camera',
            model: 'EOS 750D',
            image: 'Images/Audio_Video/hardware/cameras/Canon/Canon EOS 750D.png',
            features: ['24.2MP Sensor', 'Wi-Fi Enabled', 'Full HD Video', 'Articulating LCD']
        },
        {
            id: 'WS-CAM-002',
            category: 'Camera Equipment',
            brand: 'Canon',
            series: 'PowerShot Series',
            subtype: 'Digital Camera',
            model: 'PowerShot SX740 HS',
            image: 'Images/Audio_Video/hardware/cameras/Canon/PowerShot SX740 HS.png',
            features: ['40x Optical Zoom', '4K Video', 'Wi-Fi/Bluetooth', 'Compact Design']
        },
        {
            id: 'WS-CAM-003',
            category: 'Camera Equipment',
            brand: 'Nikon',
            series: 'Z Series',
            subtype: 'Mirrorless Camera',
            model: 'Z 6III Body',
            image: 'Images/Audio_Video/hardware/cameras/Nikon/Nikon Digital Camera Z 6III Body with NIKKOR .png',
            features: ['Full Frame Sensor', 'NIKKOR Lens', '4K Video', 'Professional Grade']
        },
        {
            id: 'WS-CAM-004',
            category: 'Camera Equipment',
            brand: 'Sony',
            series: 'ILCE Series',
            subtype: 'Mirrorless Camera',
            model: 'ILCE-1',
            image: 'Images/Audio_Video/hardware/cameras/Sony/ILCE-1.png',
            features: ['50MP Full Frame', '8K Video Recording', 'Real-time Eye AF', 'Professional Features']
        },

        // -- Projector Solutions --
        {
            id: 'WS-PROJ-001',
            category: 'Projector Solutions',
            brand: 'Portronics',
            series: 'Beem Series',
            subtype: 'Smart Projector',
            model: 'Beem 500',
            image: 'Images/Audio_Video/projectors/dlp/Portronics Beem 500 Smart Projector.png',
            features: ['Smart Android OS', 'HD Resolution', 'Portable Design', 'Wireless Connectivity']
        },
        {
            id: 'WS-PROJ-002',
            category: 'Projector Solutions',
            brand: 'ViewSonic',
            series: 'PA Series',
            subtype: 'DLP Projector',
            model: 'PA503S',
            image: 'Images/Audio_Video/projectors/dlp/ViewSonic PA503S DLP Projector.png',
            features: ['DLP Technology', 'High Brightness', 'Long Lamp Life', 'Business Ready']
        },
        {
            id: 'WS-PROJ-003',
            category: 'Projector Solutions',
            brand: 'XGIMI',
            series: 'Smart Series',
            subtype: 'Smart Projector',
            model: 'XGIMI Smart',
            image: 'Images/Audio_Video/projectors/dlp/XGIMI.png',
            features: ['4K Resolution', 'Smart OS', 'Auto Focus', 'Premium Audio']
        },
        {
            id: 'WS-PROJ-004',
            category: 'Projector Solutions',
            brand: 'Epson',
            series: '2165W Series',
            subtype: '3LCD Projector',
            model: 'Epson 2165W WXGA',
            image: 'Images/Audio_Video/projectors/lcd/Epson 2165W WXGA 3LCD Projector.png',
            features: ['3LCD Technology', 'WXGA Resolution', 'High Color Brightness', 'Reliable Performance']
        },

        // -- POS Systems Products --
        {
            id: 'WS-POS-001',
            category: 'POS Systems',
            brand: 'WebSankalp',
            series: 'RetailMax',
            subtype: 'Billing Software',
            model: 'WS-RetailMax-Cloud',
            image: 'Images/Point of Sales/posiflex-pos-system.jpg',
            features: ['Cloud-Based', 'Inventory Management', 'GST Ready', 'CRM Included']
        },

        // -- Industrial IoT Products --
        {
            id: 'WS-IOT-001',
            category: 'Industrial IoT',
            brand: 'WebSankalp',
            series: 'IoT Solutions',
            subtype: 'IoT Platform',
            model: 'WS-IoT-Pro',
            image: 'Images/Industrial IoT Home Page/iot.jpg',
            features: ['Sensor Integration', 'Real-time Analytics', 'Cloud Platform', 'Dashboard Monitoring']
        },

        // -- Industrial Touch PC --
        {
            id: 'WS-IPC-001',
            category: 'Industrial Touch PC',
            brand: 'WebSankalp',
            series: 'Industrial Series',
            subtype: 'Touch Panel PC',
            model: 'WS-TouchPC-Pro',
            image: 'Images/Industrial Touch PC/download.jpeg',
            features: ['Industrial Grade', 'Multi-touch Display', 'Rugged Design', 'Extended Temperature']
        },

        // -- Battery Packs --
        {
            id: 'WS-BAT-001',
            category: 'Battery Packs',
            brand: 'WebSankalp',
            series: 'Power Solutions',
            subtype: 'Li-Ion Battery',
            model: 'WS-Battery-LFP',
            image: 'Images/Renewable Li-Ion & LFP Battery/download (1).jpeg',
            features: ['LiFePO4 Technology', 'Long Cycle Life', 'Fast Charging', 'Safety Features']
        },

        // -- Custom Software Products --
        {
            id: 'WS-SW-001',
            category: 'Custom Software',
            brand: 'WebSankalp',
            series: 'Development Suite',
            subtype: 'Custom Software',
            model: 'WS-CustomDev-Pro',
            image: 'Images/Custom Software Solutions Home Page/cust_software_dev.jpg',
            features: ['Custom Development', 'Scalable Solutions', 'Modern Architecture', 'Full Support']
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