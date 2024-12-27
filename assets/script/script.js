document.addEventListener('alpine:init', () => {
    // Alpine.js Component for Product Data
    Alpine.data('productData', () => ({
        products: [
            {
                label: 'PLASMA',
                price: 58990,
                image: 'assets/images/antec-c8-black.jpg',
                chassis: 'Antec C8 (E-ATX) Full Tower Cabinet Black',
                motherboard: 'GIGABYTE 8160M DS3H AX WITH WIFI AND BLUETOOTH',
                graphicsCard: 'INTEGRATED GRAPHICS (UPTO 2 DISPLAY PORTS)',
                secondaryStorage: 'NOT REQUIRED',
                powerSupply: 'COOLER MASTER MWE 650 WATTS 80 PLUS BRONZE',
                processor: 'Core i3 13100 (Upto-4.50GHz, Cores-4, Threads-8)',
                ram: '16GB 6000 MHZ DDR5 (CORSAIR/G.SKILL)',
                primaryStorage: '500 GB CRUCIAL pa PLUS GEN 4 UPTO 4700 MB/s NVMe MI',
                cooler: 'DEEPCOOL AK400 ZERO DARK 120MM AIR COOLER',
                operatingSystem: 'Windows 11 Professional Trial'
            },
            {
                label: 'EQURA',
                price: 63990,
                image: 'assets/images/ant-220-air-white.jpg',
                chassis: 'Ant Esports 220 Air White',
                motherboard: 'GIGABYTE B160M DS3H AX DDR5 WITH WIFI AND BLUETOOTH',
                graphicsCard: 'INTEGRATED GRAPHICS',
                secondaryStorage: 'NOT REQUIRED',
                powerSupply: 'COOLER MASTER 650 WATTS 80 PLUS BRONZE',
                processor: 'Core i3 13400 (Upto 4.60GHz, Cores 10, Threads 16)',
                ram: '16GB 6000 MHZ DDR5 (CORSAIR/G.SKILL)',
                primaryStorage: '500 GB CRUCIAL P3 PLUS GEN 4 UPTO 4700 NVMe MI',
                cooler: 'DEEPCOOL AK400 120MM Air Cooler',
                operatingSystem: 'Windows 11 Professional Trial'
            }
        ],
        formatPrice(price) {
            return new Intl.NumberFormat('en-IN').format(price);
        }
    }));

    Alpine.data('priceUpdate', () => ({
        cabinets: [
            { name: 'Antec' },
            { name: 'ANT Esports' },
            { name: 'Corsair' },
            { name: 'Gigabyte' }
        ],
        cabinetOptions: {
            'Antec': [
                { value: 'antec-c8-black', label: 'Antec C8 (E-ATX) Full Tower Cabinet Black', price: 9390, image: 'assets/images/antec-c8-black.jpg' },
                { value: 'c5-black', label: 'C 5 Black with 7 ARGB Fans', price: 9990, image: 'assets/images/antec-c5-black.jpg' }
            ],
            'ANT Esports': [
                { value: 'ice-112-rgb-black', label: 'Ant Esports ICE-112 RGB Black', price: 3490, image: 'assets/images/ant-ice-112-rgb-black.jpg' },
                { value: '220-air-white', label: 'Ant Esports 220 Air White', price: 3690, image: 'assets/images/ant-220-air-white.jpg' },
                { value: '250-air-black', label: 'Ant Esports 250 Air Black', price: 3890, image: 'assets/images/ant-250-air-black.jpg' }
            ],
            'Corsair': [
                { value: '4000-airflow-black', label: 'Corsair 4000 Airflow Black', price: 6990, image: 'assets/images/4000-airflow-black.jpg' },
                { value: '3500-argb-white', label: 'Corsair 3500 ARGB White', price: 9990, image: 'assets/images/3500-argb-white.jpg' },
                { value: 'c301-v2-black', label: 'Corsair C301 V2 Black', price: 6990, image: 'assets/images/c301-v2-black.jpg' }
            ],
            'Gigabyte': [
                { value: 'c301-v2-black', label: 'GIGABYTE C301 GLASS V2 Black', price: 6990, image: 'assets/images/c301-v2-black.jpg' },
                { value: 'aows-c500-glass', label: 'AOWS C500 Glass', price: 13990, image: 'assets/images/aows-c500-glass.jpg' }
            ]
        },

        // Processor options
        processorOptions: {
            intel: [
                { value: 'i5-12400', label: 'Intel Core i5-12400', price: 15500 },
                { value: 'i7-12700', label: 'Intel Core i7-12700', price: 28500 },
                { value: 'i9-12900K', label: 'Intel Core i9-12900K', price: 45000 }
            ],
            amd: [
                { value: 'ryzen-5-5600X', label: 'AMD Ryzen 5 5600X', price: 16000 },
                { value: 'ryzen-7-5800X', label: 'AMD Ryzen 7 5800X', price: 27000 },
                { value: 'ryzen-9-5900X', label: 'AMD Ryzen 9 5900X', price: 39000 }
            ]
        },

        motherboardOptions: {
            asus: {
                amd: [
                    { value: 'prime-b450m-a-ii', label: 'ASUS PRIME B450M.A II', price: 6990 },
                    { value: 'prime-b550-plus', label: 'ASUS PRIME B550.PLUS', price: 11990 },
                    { value: 'tuf-8550-plus', label: 'ASUS TUF 8550 Plus', price: 15900 },
                    { value: 'tuf-8550m-plus-wifi', label: 'ASUS TUF 8550M Plus Wifi', price: 17990 },
                    { value: 'tuf-8550-plus-ii-wifi', label: 'ASUS TUF 8550 Plus II Wifi', price: 18900 },
                    { value: 'rog-strix-8550-f-gaming-wifi-ii', label: 'ASUS ROG STRIX 8550 F Gaming Wifi II', price: 21900 }
                ],
                intel: [
                    { value: 'prime-h610m-e', label: 'ASUS PRIME H610M-E', price: 8390 },
                    { value: 'b760m4yw-wifi', label: 'ASUS B760M4YW WIFI', price: 12990 },
                    { value: 'prime-8660m', label: 'ASUS PRIME 8660M', price: 13990 },
                    { value: 'prime-b760m-a-ddr5', label: 'ASUS PRIME B760M.A DDR5', price: 15990 },
                    { value: 'prime-8760-ujs-ddr4', label: 'ASUS PRIME 8760*UJS DDR4', price: 14990 },
                    { value: 'prime-wifi-ddr4', label: 'ASUS PRIME WIFI DDR4', price: 16990 },
                    { value: 'prime-wifi-ddr5', label: 'ASUS PRIME WIFI DDR5', price: 16990 },
                    { value: 'tuf-gaming-8660m-plus', label: 'ASUS TUF GAMING 8660M PLUS', price: 17990 },
                    { value: 'tuf-gaming-8660m-plus-wifi', label: 'ASUS TUF GAMING 8660M PLUS WIFI', price: 19990 },
                    { value: 'tuf-gaming-b160m-pujs-ddr5', label: 'ASUS TUF GAMING B160M-PUJS DDR5', price: 19990 },
                    { value: 'prime-2690-p-ddr4', label: 'ASUS Prime 2690 P DDR4 Motherboard', price: 20890 },
                    { value: 'tuf-gaming-b160m-pujs-wifi-ddr5', label: 'ASUS TUF GAMING B160M-PUJS WIFI DDR5', price: 21990 },
                    { value: 'tuf-gaming-b160-plus-wifi-ddr4', label: 'ASUS TUF GAMING B160-PLUS WIFI DDR4', price: 21990 },
                    { value: 'prime-z790m-plus', label: 'ASUS Prime Z790M PLUS', price: 22490 },
                    { value: 'prime-2690-p-wifi', label: 'ASUS Prime 2690 P WIFI', price: 23000 }
                ]
            },
            gigabyte: {
                amd: [
                    { value: 'b450m-ds3h-v2', label: 'Gigabyte B450M DS3H V2', price: 6990 },
                    { value: 'b450m-ds3h-wifi', label: 'Gigabyte B450M DS3H Wifi', price: 7990 },
                    { value: 'b550m-ds3h', label: 'Gigabyte B550M DS3H', price: 9790 },
                    { value: 'aorus-elite-v2', label: 'Gigabyte AORUS Elite V2', price: 9990 },
                    { value: 'aorus-elite-wifi', label: 'Gigabyte AORUS Elite Wifi', price: 11990 },
                    { value: 'aorus-pro-ax', label: 'Gigabyte AORUS PRO AX', price: 15490 },
                    { value: 'aorus-elite-ax-v2-wifi', label: 'Gigabyte AORUS Elite AX V2 Wifi', price: 16990 }
                ],
                intel: [
                    { value: '11610m-h', label: 'Gigabyte 11610M H', price: 7490 },
                    { value: '8760m-d2h-ddr4', label: 'Gigabyte 8760M D2H DDR4', price: 10990 },
                    { value: '8760m-d2h-ddr5', label: 'Gigabyte 8760M D2H DDR5', price: 11990 },
                    { value: '8760m-gaming-ac-ddr4', label: 'Gigabyte 8760M GAMING AC (Wi-Fi) DDR4', price: 12990 },
                    { value: '8760m-gaming-ddr5', label: 'Gigabyte 8760M GAMING DDR5', price: 12990 },
                    { value: '8760m-ds3h-ddr4', label: 'Gigabyte 8760M DS3H DDR4', price: 13990 },
                    { value: '8760m-gaming-ac-wifi-ddr5', label: 'Gigabyte 8760M GAMING AC WIFI DDR5', price: 13990 },
                    { value: '8760m-ds3h-ddr5', label: 'Gigabyte 8760M DS3H DDR5', price: 14490 },
                    { value: '8760m-ds3h-ax-wifi-ddr4', label: 'Gigabyte 8760M DS3H AX (Wi-Fi) DDR4', price: 14990 },
                    { value: '8760m-ds3h-ax-wifi-ddr5', label: 'Gigabyte 8760M DS3H AX WIFI DDR5', price: 15990 },
                    { value: '8760-gaming-x-ax-wifi-ddr5', label: 'Gigabyte 8760 GAMING X AX WIFI DDR5', price: 19990 },
                    { value: 'z790m-aorus-elite-ax-wifi-ddr5', label: 'Gigabyte Z790M AORUS ELITE AX WIFI DDR5', price: 21990 },
                    { value: '2790-ud-ac-wifi-ddr5', label: 'Gigabyte 2790 UD AC (Wi-Fi) DDR5', price: 22990 },
                    { value: '1790-ud-ax-wifi-ddr5', label: 'Gigabyte 1790 UD AX (Wi-Fi) DDR5', price: 23990 }
                ]
            },
            msi: {
                amd: [
                    { value: 'b450m-pro-vdh-max', label: 'MSI B450M PRO-VDH MAX', price: 6390 },
                    { value: 'b550m-pro-vdh-wifi', label: 'MSI B550M Pro VDH Wifi', price: 10900 },
                    { value: 'b550-gaming-plus', label: 'MSI B550 Gaming Plus', price: 13950 },
                    { value: 'b550m-mortar-wifi', label: 'MSI B550M Mortar Wifi', price: 15990 },
                    { value: 'b550-tomahawk', label: 'MSI B550 Tomahawk', price: 16990 },
                    { value: 'mpg-b550-tomahawk-max-wifi', label: 'MSI MPG B550 TOMAHAWK MAX WIFI', price: 17990 }
                ],
                intel: [
                    { value: 'pro-b760m-e-ddr4', label: 'MSI PRO B760M.E DDR4', price: 10990 },
                    { value: '8760m-bomber-wifi-ddr5', label: 'MSI 8760M BOMBER WIFI DDR5', price: 11990 },
                    { value: 'pro-b760m-p-ddr5', label: 'MSI PRO B760M.P DDR5', price: 12990 },
                    { value: 'pro-b760m-a-wifi-ddr4', label: 'MSI PRO B760M-A WIFI DDR4', price: 15490 },
                    { value: 'pro-b760wa-wifi-ddr5', label: 'MSI PRO B760WA WIFI DDR5', price: 15990 },
                    { value: 'mag-8760m-mortar-wifi-ddr5', label: 'MSI MAG 8760M MORTAR WIFI DDR5', price: 18990 },
                    { value: 'pro-b760-p-wifi-ddr5', label: 'MSI PRO B760-P WIFI DDR5', price: 18990 },
                    { value: '8760-gaming-plus-wifi-ddr5', label: 'MSI 8760 GAMING PLUS WIFI DDR5', price: 18990 },
                    { value: 'mag-8760-tomahawk-wifi-ddr5', label: 'MSI MAG 8760 TOMAHAWK WIFI DDR5', price: 22990 },
                    { value: 'mpg-87601-edge-wifi-ddr5', label: 'MSI MPG 87601 EDGE WIFI DDR5 Mini ITX', price: 25990 },
                    { value: 'pro-z790-a-wifi-ddr5', label: 'MSI PRO Z790.A WIFI DDR5', price: 26990 },
                    { value: 'pro-max-wifi', label: 'MSI PRO MAX WIFI', price: 27900 },
                    { value: 'tomahawk-wifi-ddr5', label: 'MSI TOMAHAWK WIFI DDR5', price: 30990 },
                    { value: 'mag-1790-tomahawk-max-wifi', label: 'MSI MAG 1790 TOMAHAWK MAX WIFI', price: 32990 }
                ]
            }
        },

        // New Graphic Card (GPU) options
        gpuOptions: {
            asus: [
                { value: 'rog-strix-rx-560-4gb', label: 'ROG Strix RX 560 4GB DDR5', price: 9990 },
                { value: 'gt-730-2gb', label: 'GT 730 2GB DDR5 with 4 HDMI Ports', price: 11990 },
                { value: 'rx-6600-8gb', label: 'RX 6600 Dual 8GB GDDR6', price: 20990 },
                { value: 'rix-3050-8gb', label: 'RIX 3050 Dual 8GB GDDR6', price: 21990 },
                { value: 'rix-3060-12gb', label: 'RIX 3060 Dual OC 12GB GDDR6', price: 26990 },
                { value: 'rtx-4060-8gb', label: 'RTX 4060 Dual OC 8GB GDDR6', price: 27900 },
                { value: 'rx-7600-xt-16gb', label: 'Dual Radeon RX 7600 XT OC Edition 16GB GDDR6', price: 33990 },
                { value: 'tuf-rx-7600-xt-16gb', label: 'TUF Gaming RX 7600 XT OC Edition 16GB DDR6 Triple Fans', price: 38990 },
                { value: 'rtx-4060-ti-8gb', label: 'RTX 4060 Ti Dual OC Edition 8GB DDR6', price: 37990 },
                { value: 'rx-7700-xt-12gb', label: 'Dual Radeon RX 7700 XT OC Edition 12GB GDDR6', price: 41990 },
                { value: 'rx-7800-xt-16gb', label: 'Dual Radeon RX 7800 XT OC Edition 16GB GDDR6', price: 48990 },
                { value: 'rtx-4070-12gb', label: 'RTX 4070 Dual OC 12GB DDR6X', price: 57990 }
            ],
            gigabyte: [
                { value: 'gt-1030-2gb', label: 'GT 1030 2GB DDR4', price: 7990 },
                { value: 'rtx-3050-6gb', label: 'RTX 3050 Windforce OC Dual Fan 6GB DDR6', price: 16990 },
                { value: 'gtx-1660-super-6gb', label: 'GTX 1660 Super OC 6GB DDR6', price: 20890 },
                { value: 'rx-6600-8gb', label: 'RX 6600 Eagle 8GB DDR6 Triple Fan', price: 21390 },
                { value: 'rtx-3060-12gb', label: 'RTX 3060 Windforce OC 12GB DDR6', price: 25990 },
                { value: 'rx-7600-8gb', label: 'RX 7600 Gaming OC 8GB Triple Fan', price: 27990 },
                { value: 'rtx-4060-8gb', label: 'RTX 4060 Windforce OC 8GB DDR6', price: 27900 }
            ],
            galax: [
                { value: 'gtx-1650-4gb', label: 'GTX 1650 1 Click OC Dual Fan 4GB DDR6', price: 12990 },
                { value: 'rix-3050-6gb', label: 'RIX 3050 1 Click OC Dual Fan 6GB DDR6', price: 18990 },
                { value: 'gtx-1660-super-6gb', label: 'GTX 1660 Super 1 Click OC 6GB DDR6', price: 19990 }
            ],
            msi: [
                { value: 'gtx-1650-ventus-4gb', label: 'GTX 1650 Ventus XS OCVI 4GB DDR5', price: 12990 },
                { value: 'rtx-3050-ventus-8gb', label: 'RTX 3050 Ventus OC 8GB DDR6', price: 21990 },
                { value: 'rix-3060-12gb', label: 'RIX 3060 Ventus OC 12GB DDR6', price: 25990 },
                { value: 'rtx-4060-8gb', label: 'RTX 4060 Ventus OC 8GB DDR6', price: 28990 }
            ],
        },

        // New SMPS (Power Supply) options
        smpsOptions: {
            // Corsair Options
            corsair: [
                { value: 'cx650-650w', label: 'CX650 650 watts 80 Plus Bronze', price: 5490 },
                { value: 'cx650f-650w-rgb', label: 'CX650F 650 WATT RGB FULLY MODULAR 80 PLUS BRONZE', price: 6490 },
                { value: 'cx750-750w', label: 'CX750 750 watts 80 Plus Bronze', price: 6990 },
                { value: 'cx750f-750w-rgb', label: 'CX750F 750 WATT RGB FULLY MODULAR 80 PLUS BRONZE - White', price: 7490 },
                { value: 'sf450-450w', label: 'SF450 450 WATT MINI ITX 80 PLUS GOLD', price: 9950 },
                { value: 'rm750e-750w', label: 'RM750E ATX 3.0 750 WATT 80 PLUS GOLD', price: 9890 },
                { value: 'rm750-750w', label: 'RM750 750 WATT 80 PLUS GOLD', price: 10490 },
                { value: 'rm850e-850w', label: 'RM850E ATX 3.0 850 WATT 80 PLUS GOLD', price: 11990 },
                { value: 'rm850x-shift-850w', label: 'RM850x Shift 850 watts 80 Plus Gold ATX 3.0', price: 11990 },
                { value: 'rm1000e-1000w', label: 'RM1000E ATX 3.0 1000 WATT 80 PLUS GOLD', price: 16990 },
                { value: 'rm1000x-shift-1000w', label: 'RM1000x Shift 1000 watts 80 Plus Gold ATX 3.0', price: 17990 },
                { value: 'hx1000i-1000w', label: 'HX1000i 1000 WATT FULLY MODULAR 80 PLUS PLATINUM', price: 22850 },
                { value: 'rm1200x-shift-1200w', label: 'RM1200x Shift 1200 watts 80 Plus Gold ATX 3.0', price: 22990 },
                { value: 'hx1500i-1500w', label: 'HX1500i 1500 WATT FULLY MODULAR PLATINUM ATX 3.0', price: 34990 },
                { value: 'ax1600i-1600w', label: 'AX1600i 1600 Watts Fully Modular 80 Plus Platinum', price: 48900 }
            ],

            // Gigabyte Options
            gigabyte: [
                { value: 'p450b-450w', label: 'P450B 450 WATT 80 PLUS BRONZE', price: 2995 },
                { value: 'p550b-550w', label: 'P550B 550 WATT 80 PLUS BRONZE', price: 3995 },
                { value: 'p650b-650w', label: 'P650B 650 WATT 80 PLUS BRONZE', price: 4990 },
                { value: 'ud750gm-750w', label: 'GP-UD750GM 750w 80 Plus Gold Fully Modular', price: 7490 },
                { value: 'ud750gm-pg5-750w', label: 'GP-UD750GM PG5 750w 80 Plus Gold Fully Modular', price: 7890 },
                { value: 'ud850gm-850w', label: 'GP-UD850GM 850w 80 Plus Gold Fully Modular', price: 8990 },
                { value: 'ud850gm-pg5-850w', label: 'GP-UD850GM PG5 ATX 3.0 850w 80 Plus Gold Fully Modular', price: 9990 }
            ],

            // MSI Options
            msi: [
                { value: 'a650bn-650w', label: 'A650BN 650 WATTS 80 PLUS BRONZE', price: 4990 },
                { value: 'a750gl-750w', label: 'MAG A750GL 750 watts 80 Plus Gold PCIE5 Fully Modular', price: 8990 },
                { value: 'a850gl-850w', label: 'MAG A850GL 850 watts 80 Plus Gold PCIE5 Fully Modular', price: 9990 },
                { value: 'a1000gl-1000w', label: 'MAG A1000GL 1000 watts 80 Plus Gold PCIE5 Fully Modular', price: 11990 }
            ]
        },

        storageOptions: {
            hdd: [
                { value: '1tb-barracuda-7200rpm', label: '1 TB BARRACUDA 7200 RPM', price: 4390 },
                { value: '2tb-barracuda-5400rpm', label: '2 TB BARRACUDA 5400 RPM', price: 5590 },
                { value: '1tb-wdblue-7200rpm', label: '1 TB WD BLUE 7200 RPM', price: 4390 },
                { value: '2tb-wdblue-7200rpm', label: '2 TB WD BLUE 7200 RPM', price: 5790 },
                { value: '4tb-wdblue-5400rpm', label: '4 TB WD BLUE 5400 RPM', price: 9890 }
            ],
            ssd: [
                { value: '1tb-legend-710-gen3', label: '1 TB LEGEND 710 GEN 3 UPTO 2400MB/s NVMe MI', price: 5490 },
                { value: '1tb-legend-800-gen4', label: '1 TB LEGEND 800 GEN 4 UPTO 3500MB/s NVMe MI', price: 5990 },
                { value: '1tb-legend-960-gen4', label: '1 TB LEGEND 960 GEN 4 UPTO 7400MB/s NVMe MI', price: 7490 },
                { value: '1tb-s70-blade-gen4', label: '1 TB S70 Blade GEN 4 UPTO 7400MB/s NVMe M.2', price: 7990 },
                { value: '2tb-s70-blade-gen4', label: '2 TB S70 Blade GEN 4 UPTO 7400MB/s NVMe MI', price: 11990 },
                { value: '1tb-legend-970-gen5', label: '1 TB LEGEND 970 GEN 5 UPTO 10000MB/s NVMe MI', price: 15990 },
                { value: '2tb-legend-970-gen5', label: '2 TB LEGEND 970 GEN 5 UPTO 10000MB/s NVMe M.2', price: 26990 }
            ]
        },

        ramOptions: {
            crucial: [
                { value: '8gb-ddr4-3200mhz', label: '8GB DDR4 3200 MHz', price: 1690 },
                { value: '16gb-ddr4-3200mhz', label: '16GB DDR4 3200 MHz', price: 2990 },
                { value: '16gb-8x2-ddr4-3200mhz', label: '16GB (8x2) DDR4 3200 MHz', price: 3380 },
                { value: '32gb-16x2-ddr4-3200mhz', label: '32GB (16x2) DDR4 3200 MHz', price: 5990 },
                { value: '64gb-32x2-ddr4-3200mhz', label: '64GB (32x2) DDR4 3200 MHz', price: 12990 }
            ],
            corsair: [
                { value: '8gb-3600mhz', label: '8GB VENGEANCE LPX 3600 MHz CL18 DDR4', price: 2690 },
                { value: '16gb-3200mhz', label: '16GB VENGEANCE LPX 3200 MHz CL16 DDR4', price: 3690 },
                { value: '32gb-3200mhz', label: '32GB (16x2) VENGEANCE 3200 MHz CL16 DDR4', price: 7990 },
                { value: '64gb-3200mhz', label: '64GB (32x2) VENGEANCE LPX 3200 MHz CL16 DDR4', price: 13990 }
            ]
        },

        coolerOptions: {
            air: {
                arctic: [
                    { value: 'freezer-34-esports-duo-grey', label: 'Freezer 34 Esports Duo Grey', price: 4650 },
                    { value: 'freezer-36-esports-dual-fans-black', label: 'Freezer 36 Esports Dual Fans Black', price: 3990 },
                    { value: 'freezer-36-esports-co-dual-fans-black', label: '36 Esports CO Dual Fans Black', price: 4990 },
                    { value: 'freezer-34-esports-duo-white', label: 'Freezer 34 Esports Duo White', price: 4990 },
                    { value: 'freezer-36-esports-dual-fans-argb-black', label: 'Freezer 36 Esports Dual Fans ARGB Black', price: 4690 },
                    { value: 'freezer-36-esports-dual-fans-argb-white', label: 'Freezer 36 Esports Dual Fans ARGB White', price: 4990 }
                ],
                deepcool: [
                    { value: 'ag400-argb-black', label: 'AG400 ARGB BLACK', price: 2490 },
                    { value: 'ag400-plus-dual-fan', label: 'AG400 PLUS Dual Fan', price: 2495 },
                    { value: 'ag400-argb-white', label: 'AG400 ARGB WHITE', price: 2690 },
                    { value: 'ag500-with-120mm-fan-black', label: 'AG500 WITH 120MM FAN BLACK', price: 2695 },
                    { value: 'ak400120mm-black', label: 'AK400120MM Black', price: 2890 },
                    { value: 'ak400120mm-white', label: 'AK400120MM WHITE', price: 2990 },
                    { value: 'ag400-digital-120mm', label: 'AG400 DIGITAL 120MM', price: 3490 },
                    { value: 'ak400120mm-dark-zero', label: 'AK400120MM DARK ZERO', price: 3490 },
                    { value: 'ag620-black-dual-fan-aircooler', label: 'AG620 BLACK Dual Fan Aircooler', price: 3990 }
                ]
            },
            liquid: {
                arctic: [
                    { value: 'liquid-freezer-ill-240-black', label: 'Liquid Freezer Ill 240 Black', price: 9090 },
                    { value: 'liquid-freezer-ill-argb-240-white', label: 'Liquid Freezer Ill ARGB 240 White', price: 9990 },
                    { value: 'liquid-freezer-ill-360-black', label: 'Liquid Freezer Ill 360 Black', price: 10490 },
                    { value: 'liquid-freezer-ill-360-argb-black', label: 'Liquid Freezer Ill 360 ARGB Black', price: 11990 },
                    { value: 'liquid-freezer-ill-360-argb-white', label: 'Liquid Freezer Ill 360 ARGB White', price: 14590 },
                    { value: 'liquid-freezer-ill-420-argb-black', label: 'Liquid Freezer Ill 420 ARGB Black', price: 16990 }
                ],
                asus: [
                    { value: 'rog-strix-240-argb', label: 'ROG STRIX 240 ARGB', price: 8590 },
                    { value: 'rog-strix-360-argb', label: 'ROG STRIX 360 ARGB', price: 10590 },
                    { value: 'rog-strix-360-argb-ice-white', label: 'ROG STRIX 360 ARGB ICE White', price: 11990 }
                ],
                coolermaster: [
                    { value: 'masterliquid-ml240r-argb', label: 'MasterLiquid ML240R ARGB', price: 6690 },
                    { value: 'masterliquid-ml360r-argb', label: 'MasterLiquid ML360R ARGB', price: 8690 },
                    { value: 'masterliquid-ml360-argon-fan', label: 'MasterLiquid ML360 ARGON FAN', price: 7990 },
                    { value: 'masterliquid-ml240-argon', label: 'MasterLiquid ML240 ARGON', price: 7790 }
                ],
                deepcool: [
                    { value: 'ak500l-120mm-argon', label: 'AK500L 120mm ARGON', price: 7590 },
                    { value: 'ak500l-360mm-argon', label: 'AK500L 360mm ARGON', price: 10990 }
                ]
            }
        },

        wifiOptions: [
            { value: 'none', label: 'NOT REQUIRED', price: 0 },
            { value: 'tp-link-tl-wn823n', label: 'TP-LINK TL.WN823N 300MBPS MINI WIRELESS N USB ADAPTAR', price: 895 },
            { value: 'tp-link-tl-wn881nd', label: 'TP-LINK TL-WN881ND 300MBPS WIRELESS N PCI-E ADAPTER', price: 1295 },
            { value: 'tp-link-archer-ac1300', label: 'TP-LINK ARCHER AC1300 WIRELESS DUAL BAND PCl.E ADAPTER', price: 3990 },
            { value: 'asus-ax3000', label: 'ASUS AX3000 DUAL BAND WIFI 6 PCI-EXPRESS ADAPTER', price: 4990 }
        ],

        osOptions: [
            { value: 'none', label: 'NOT REQUIRED', price: 0 },
            { value: 'win-10-11-trial', label: 'Windows 10/11 Professional Trial Version', price: 0 },
            { value: 'win-11-oem', label: 'Windows 11 Professional 64 Bit (OEM)', price: 990 },
            { value: 'win-11-fpp', label: 'Windows 11 Professional 64 Bit FPP (With USB Pendrive)', price: 14990 }
        ],

        selectedCabinet: '',
        selectedOption: '',
        selectedProcessorBrand: '',
        selectedProcessor: '',
        selectedMotherboardBrand: '',
        selectedMotherboard: '',
        selectedGPU: '',
        selectedGPUBrand: '',
        selectedSMPS: '',
        selectedSMPSBrand: '',
        selectedStorageType: [],
        selectedPrimaryStorageType: '',
        selectedPrimaryHddStorage: '',
        selectedPrimarySsdStorage: '',
        selectedSecondaryStorageType: '',
        selectedSecondaryHddStorage: '',
        selectedSecondarySsdStorage: '',
        selectedRAMBrand: '',
        selectedRAM: '',
        selectedCoolerType: '',
        selectedAirCoolerBrand: '',
        selectedLiquidCoolerBrand: '',
        selectedAirCooler: '',
        selectedLiquidCooler: '',
        selectedWiFi: '',
        selectedOS: '',
        totalPrice: 0,
        showMessage: false,

        // Method to update price based on selected options
        updatePrice() {
            let cabinetPrice = 0;
            if (this.selectedCabinet && this.selectedOption) {
                let cabinet = this.cabinetOptions[this.selectedCabinet].find(option => option.value === this.selectedOption);
                cabinetPrice = cabinet ? cabinet.price : 0;
            }

            let processorPrice = 0;
            if (this.selectedProcessor) {
                let processor = this.processorOptions[this.selectedProcessorBrand]?.find(option => option.value === this.selectedProcessor);
                processorPrice = processor ? processor.price : 0;
            }

            let motherboardPrice = 0;
            if (this.selectedMotherboardBrand && this.selectedMotherboard) {
                let motherboard = this.motherboardOptions[this.selectedMotherboardBrand]?.[this.selectedProcessorBrand]?.find(option => option.value === this.selectedMotherboard);
                motherboardPrice = motherboard ? motherboard.price : 0;
            }

            let gpuPrice = 0;
            if (this.selectedGPUBrand && this.selectedGPU) {
                let gpu = this.gpuOptions[this.selectedGPUBrand.toLowerCase()]?.find(option => option.value === this.selectedGPU);
                gpuPrice = gpu ? gpu.price : 0;
            }

            let smpsPrice = 0;
            if (this.selectedSMPSBrand && this.selectedSMPS) {
                let smps = this.smpsOptions[this.selectedSMPSBrand.toLowerCase()]?.find(option => option.value === this.selectedSMPS);
                smpsPrice = smps ? smps.price : 0;
            }

            // Calculate the price of the primary storage
            let primaryStoragePrice = 0;
            if (this.selectedPrimaryStorageType) {
                let selectedPrimaryStorage = (this.selectedPrimaryStorageType === 'HDD' ? this.selectedPrimaryHddStorage : this.selectedPrimarySsdStorage);
                let storageOptionsType = this.selectedPrimaryStorageType.toLowerCase();
                let selectedOption = this.storageOptions[storageOptionsType].find(option => option.value === selectedPrimaryStorage);
                primaryStoragePrice = selectedOption ? selectedOption.price : 0;
            }

            // Calculate the price of the secondary storage
            let secondaryStoragePrice = 0;
            if (this.selectedSecondaryStorageType) {
                let selectedSecondaryStorage = (this.selectedSecondaryStorageType === 'HDD' ? this.selectedSecondaryHddStorage : this.selectedSecondarySsdStorage);
                let storageOptionsType = this.selectedSecondaryStorageType.toLowerCase();
                let selectedOption = this.storageOptions[storageOptionsType].find(option => option.value === selectedSecondaryStorage);
                secondaryStoragePrice = selectedOption ? selectedOption.price : 0;
            }

            let ramPrice = 0;
            if (this.selectedRAMBrand && this.selectedRAM) {
                let ram = this.ramOptions[this.selectedRAMBrand.toLowerCase()]?.find(option => option.value === this.selectedRAM);
                ramPrice = ram ? ram.price : 0;
            }

            let airCoolerPrice = 0;
            if (this.selectedCoolerType === 'air' && this.selectedAirCooler) {
                const selectedAirCooler = this.coolerOptions.air[this.selectedAirCoolerBrand.toLowerCase()].find(option => option.value === this.selectedAirCooler);
                airCoolerPrice = selectedAirCooler ? selectedAirCooler.price : 0;
            }

            let liquidCoolerPrice = 0;
            if (this.selectedCoolerType === 'liquid' && this.selectedLiquidCooler) {
                const selectedLiquidCooler = this.coolerOptions.liquid[this.selectedLiquidCoolerBrand.toLowerCase()].find(option => option.value === this.selectedLiquidCooler);
                liquidCoolerPrice = selectedLiquidCooler ? selectedLiquidCooler.price : 0;
            }

            let wifiPrice = 0;
            if (this.selectedWiFi) {
                let wifiOption = this.wifiOptions.find(option => option.value === this.selectedWiFi);
                wifiPrice = wifiOption ? wifiOption.price : 0;
            }


            let osPrice = 0;
            if (this.selectedOS) {
                let osOption = this.osOptions.find(option => option.value === this.selectedOS);
                osPrice = osOption ? osOption.price : 0;
            }


            // Calculate the total price
            this.totalPrice = cabinetPrice + processorPrice + motherboardPrice + gpuPrice + smpsPrice + primaryStoragePrice + secondaryStoragePrice + ramPrice + airCoolerPrice + liquidCoolerPrice + wifiPrice + osPrice;
        },

        // Computed property to check if all required fields are selected
        get isFormComplete() {
            return this.selectedCabinet &&
                this.selectedOption &&
                this.selectedProcessorBrand &&
                this.selectedProcessor &&
                this.selectedMotherboardBrand &&
                this.selectedMotherboard &&
                this.selectedGPU &&
                this.selectedGPUBrand &&
                this.selectedSMPS &&
                this.selectedSMPSBrand &&
                this.selectedPrimaryStorageType &&
                ((this.selectedPrimaryHddStorage || this.selectedPrimarySsdStorage) ||
                    (this.selectedSecondaryHddStorage || this.selectedSecondarySsdStorage)) &&
                this.selectedRAMBrand &&
                this.selectedRAM &&
                this.selectedCoolerType &&
                ((this.selectedCoolerType === 'air' && this.selectedAirCooler) ||
                    (this.selectedCoolerType === 'liquid' && this.selectedLiquidCooler)) &&
                this.selectedWiFi &&
                this.selectedOS;
        },



        // Function to add items to cart
        addToCart() {
            const findLabelAndPrice = (options, selectedValue) => {
                const option = options?.find(opt => opt.value === selectedValue);
                return option ? { label: option.label, price: option.price } : { label: 'N/A', price: 0 };
            };

            // Collect data for all selected items
            const selectedItems = {
                Cabinet: findLabelAndPrice(this.cabinetOptions[this.selectedCabinet], this.selectedOption),
                Processor: findLabelAndPrice(this.processorOptions[this.selectedProcessorBrand], this.selectedProcessor),
                Motherboard: findLabelAndPrice(this.motherboardOptions[this.selectedMotherboardBrand]?.[this.selectedProcessorBrand], this.selectedMotherboard),
                GPU: findLabelAndPrice(this.gpuOptions[this.selectedGPUBrand?.toLowerCase()], this.selectedGPU),
                SMPS: findLabelAndPrice(this.smpsOptions[this.selectedSMPSBrand?.toLowerCase()], this.selectedSMPS),
                PrimaryStorage: findLabelAndPrice(
                    this.storageOptions[this.selectedPrimaryStorageType?.toLowerCase()],
                    this.selectedPrimaryStorageType === 'HDD' ? this.selectedPrimaryHddStorage : this.selectedPrimarySsdStorage
                ),
                SecondaryStorage: findLabelAndPrice(
                    this.storageOptions[this.selectedSecondaryStorageType?.toLowerCase()],
                    this.selectedSecondaryStorageType === 'HDD' ? this.selectedSecondaryHddStorage : this.selectedSecondarySsdStorage
                ),
                RAM: findLabelAndPrice(this.ramOptions[this.selectedRAMBrand?.toLowerCase()], this.selectedRAM),
                Cooler: this.selectedCoolerType === 'air'
                    ? findLabelAndPrice(this.coolerOptions.air[this.selectedAirCoolerBrand?.toLowerCase()], this.selectedAirCooler)
                    : findLabelAndPrice(this.coolerOptions.liquid[this.selectedLiquidCoolerBrand?.toLowerCase()], this.selectedLiquidCooler),
                WiFi: findLabelAndPrice(this.wifiOptions, this.selectedWiFi),
                OS: findLabelAndPrice(this.osOptions, this.selectedOS),
                TotalPrice: this.totalPrice
            };

            // Save data to localStorage (separate each order by a unique ID)
            let orders = JSON.parse(localStorage.getItem('orders')) || [];
            const orderId = Date.now();  // Using timestamp as unique order ID
            orders.push({ orderId, items: selectedItems });
            localStorage.setItem('orders', JSON.stringify(orders));

            // Show success message
            this.showMessage = true;

            // Hide message after 1 second
            setTimeout(() => {
                this.showMessage = false;
            }, 1000);

            // Reset all dropdown selections and variables
            this.selectedCabinet = '';
            this.selectedOption = '';
            this.selectedProcessorBrand = '';
            this.selectedProcessor = '';
            this.selectedMotherboardBrand = '';
            this.selectedMotherboard = '';
            this.selectedGPUBrand = '';
            this.selectedGPU = '';
            this.selectedSMPSBrand = '';
            this.selectedSMPS = '';
            this.selectedStorageType = [];
            this.selectedPrimaryStorageType = '';
            this.selectedPrimaryHddStorage = '';
            this.selectedPrimarySsdStorage = '';
            this.selectedSecondaryStorageType = '';
            this.selectedSecondaryHddStorage = '';
            this.selectedSecondarySsdStorage = '';
            this.selectedRAMBrand = '';
            this.selectedRAM = '';
            this.selectedCoolerType = '';
            this.selectedAirCoolerBrand = '';
            this.selectedAirCooler = '';
            this.selectedLiquidCoolerBrand = '';
            this.selectedLiquidCooler = '';
            this.selectedWiFi = '';
            this.selectedOS = '';
            this.totalPrice = 0;
        }
    }));
});