const products = [
    {
        "id": 1,
        "name": "Cordless Drill",
        "brand": "DeWalt",
        "category": "Power Tools",
        "subcategory": "Drilling",
        "stock": 50,
        "description":
            "The DeWalt cordless drill is a powerful and reliable tool that caters to the needs of professionals and DIY enthusiasts alike. With its ergonomic design and high-performance motor, this drill makes drilling holes and driving screws into a variety of materials, from wood to metal and concrete, a breeze. The DeWalt brand is known for its quality and durability, ensuring that this drill will serve you well for many future projects. The high-capacity lithium-ion battery provides long-lasting power and allows for cordless, worry-free operation. Whether you're building furniture or tackling home repairs, the DeWalt cordless drill is a trustworthy choice.",
        "photo": "https://cdn.mscdirect.com/global/images/ProductImages/7136229-24.jpg",
        "price": 100,
        "details": {
            "PowerSupply": "Battery powered",
            "Speeds": "1500 rpm",
            "Voltage": "20 volts",
            "Amperage": "1.3 Amps",
            "Material": "Steel",
            "ItemWeight": "3.64 pound",
            "ItemDimensions": "13.88 x 9.88 x 4.25 inches"
        }
    },
    {
        "id": 2,
        "name": "Cordless Drill",
        "brand": "Makita",
        "category": "Power Tools",
        "subcategory": "Drilling",
        "stock": 78,
        "description":
            "The Makita cordless drill is a popular choice among construction professionals and DIY enthusiasts. The Makita brand is renowned for its innovation and performance, and this drill is no exception. With a powerful motor and a compact design, it's ideal for drilling and driving tasks in tight spaces. The high-quality lithium-ion battery ensures long runtime and fast recharging. Whether you're constructing a structure or installing shelves, the Makita cordless drill provides the power and precision you need.",
        "photo":
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FKVk3L8CdBLu8QirmgkJgX6a52_RXwHNjTigvKW1QD6v3kxKx6srxaxlTExk9YEuhfc&usqp=CAU",
        "price": 120,
        "details": {
            "PowerSupply": "Battery powered",
            "Speeds": "1300 rpm",
            "Voltage": "20 volts",
            "Amperage": "1.3 Amps",
            "Material": "Steel",
            "ItemWeight": "4.13 pound",
            "ItemDimensions": "13.88 x 7.88 x 5.25 inches"
        }
    },
    {
        "id": 3,
        "name": "Cordless Drill",
        "brand": "Bosch",
        "category": "Power Tools",
        "subcategory": "Drilling",
        "stock": 100,
        "description":
            "The Bosch cordless drill is a reliable tool for construction and renovation projects. The Bosch brand is known for its precision engineering, and this drill is no different. With enough power to drill holes in hardwood and a variety of other materials, this drill delivers exceptional performance. Its compact and ergonomic design makes it easy to handle, even in tight spaces. The high-performance battery ensures long runtime and quick charging. Whether you're a professional or a DIY enthusiast, the Bosch cordless drill is a dependable choice.",
        "photo":
            "https://www.gigatools.ph/cdn/shop/products/gsr_180_shopify.jpg?v=1587399374",
        "price": 150,
        "details": {
            "PowerSupply": "Battery powered",
            "Speeds": "1400 rpm",
            "Voltage": "20 volts",
            "Amperage": "1.3 Amps",
            "Material": "Steel",
            "ItemWeight": "3 pound",
            "ItemDimensions": "12.85 x 8 x 4.25 inches"
        }
    },
    {
        "id": 4,
        "name": "Milwaukee Circular Saw",
        "brand": "Milwaukee",
        "category": "Power Tools",
        "subcategory": "Cutting",
        "stock": 9,
        "description": "Milwaukee Circular Saws are the go-to choice for fast and precise wood, board, and material cutting. Offering outstanding power and versatility, these saws are essential for a wide range of applications. Whether you're a professional or a DIY enthusiast, Milwaukee Circular Saws provide the cutting precision and performance you need.",
        "photo": "https://images.thdstatic.com/productImages/97d1ac60-e061-4bed-8b6c-2aff79a4e840/svn/milwaukee-circular-saws-2630-20-64_600.jpg"
        , "price": 200,
        "details": {
            "PowerSupply": "Battery powered",
            "Speeds": "3500 rpm",
            "Voltage": "18 volts",
            "Amperage": "15 Amps",
            "Material": "Steel",
            "ItemWeight": "3.81 kg",
            "ItemDimensions": "12.25 x 8.5 x 8 inches"
        }
    },
    {
        "id": 5,
        "name": "Circular Saw",
        "brand": "RIDGID",
        "category": "Power Tools",
        "subcategory": "Cutting",
        "stock": 64,
        "description": "RIDGID Circular Saws are the ideal choice for quick and precise cutting of wood, boards, and various materials. These saws offer power and versatility for a wide range of cutting applications. Whether you're working on a construction project or a DIY task, RIDGID Circular Saws provide the cutting performance you can rely on.",
        "photo": "https://cdn2.ridgid.com/resources/images/7f8d5258-0dd2-4198-9b12-443b7f8ac2f2",
        "price": 250,
        "details": {
            "PowerSupply": "Battery powered",
            "Speeds": "3000 rpm",
            "Voltage": "18 volts",
            "Amperage": "15 Amps",
            "Material": "Steel",
            "ItemWeight": "3.90 kg",
            "ItemDimensions": "15.32 x 8.98 x 9.14 inches"
        }
    },
    {
        "id": 6,
        "name": "Circular Saw",
        "brand": "Festool",
        "category": "Power Tools",
        "subcategory": "Cutting",
        "stock": 76,
        "description": "Festool Circular Saws are renowned for their precision and reliability in wood, board, and material cutting tasks. They offer exceptional power and versatility for a variety of cutting applications. Whether you're a professional woodworker or a craftsman, Festool Circular Saws are your trusted tool for precise and efficient cuts.",
        "photo": "https://media.screwfix.com/is/image/ae235/245PF_P",
        "price": 300,
        "details": {
            "PowerSupply": "1500 w",
            "Speeds": "3500 rpm",
            "Voltage": "18 volts",
            "Amperage": "13 Amps",
            "Material": "Steel",
            "ItemWeight": "4.80 kg",
            "ItemDimensions": "12.25 x 8.5 x 8 inches"
        }
    },
    {
        "id": 7,
        "name": "Reciprocating Saw",
        "brand": "Hilti",
        "category": "Power Tools",
        "subcategory": "Cutting",
        "stock": 25,
        "description": "The Hilti Reciprocating Saw is a powerful tool designed for aggressive cutting in various construction materials, tree branches, and demolition work. It offers robust performance and versatility, making it a go-to choice for professionals in need of precision and speed.",
        "photo": "https://dam-assets.apps.travisperkins.group/oz8y6l0/GPID_1100688340_IMG_00.jpg?width=450&height=300",
        "price": 400,
        "details": {
            "PowerSupply": " Battery powered",
            "Speeds": "2600 strokes per minute",
            "Voltage": "18 volts",
            "Amperage": "13 Amps",
            "Material": "Steel",
            "ItemWeight": "3.1 kg",
            "ItemDimensions": "455 x 91 x 156 mm"
        }
    },
    {
        "id": 8,
        "name": "Reciprocating Saw",
        "brand": "Ryobi",
        "category": "Power Tools",
        "subcategory": "Cutting",
        "stock": 30,
        "description": "The Ryobi Reciprocating Saw is a powerful tool designed for aggressive cutting in a variety of materials, including wood and metal. It excels in demolition and remodeling tasks, offering reliable performance for both professionals and DIY enthusiasts.",
        "photo": "https://media.diy.com/is/image/Kingfisher/ryobi-one-18v-cordless-reciprocating-saw-rrs1801m-bare~4892210118707_01bq?$MOB_PREV$&$width=768&$height=768"
        , "price": 100,
        "details": {
            "PowerSupply": " Battery powered",
            "Speeds": "2400 strokes per minute",
            "Voltage": "18 volts",
            "Amperage": "13 Amps",
            "Material": "Steel",
            "ItemWeight": "1.8 kg",
            "ItemDimensions": "17.91 x 6.77 x 3.46 inches"
        }
    },
    {
        "id": 9,
        "name": "Reciprocating Saw",
        "brand": "SKIL",
        "category": "Power Tools",
        "subcategory": "Cutting",
        "stock": 20,
        "description": "The SKIL Reciprocating Saw is a versatile cutting tool that delivers precision and power. Whether you're tackling demolition or cutting through various materials, this tool is up for the challenge. It's a must-have for any workshop or construction site.",
        "photo": "https://i5.walmartimages.com/asr/acec749f-db20-4b23-a5d3-48de9962f0cf_1.24dfe65a582b844970abd940e8f0c25f.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        "price": 80,
        "details": {
            "PowerSupply": "Electrical cable",
            "Speeds": "2500 strokes per minute",
            "Voltage": "120 volts",
            "Amperage": "13 Amps",
            "Material": "Steel",
            "ItemWeight": "9 pounds",
            "ItemDimensions": "19.7 x 3.6 x 8 inches"
        }
    },
    {
        "id": 10,
        "name": "Orbital Sander",
        "brand": "Porter-Cable",
        "category": "Power Tools",
        "subcategory": "Cutting",
        "stock": 15,
        "description": "The Porter-Cable Orbital Sander is a versatile tool for achieving smooth and uniform surfaces. It excels in sanding tasks, offering efficiency and precision for various woodworking and finishing projects. Whether you're a professional woodworker or a DIY enthusiast, this sander is a valuable addition to your toolkit.",
        "photo": "https://m.media-amazon.com/images/I/71N99TZfDTL.jpg",
        "price": 70,
        "details": {
            "PowerSupply": " Battery powered",
            "Speeds": "12000 rpm",
            "Voltage": "20 volts",
            "Amperage": "20 Amps",
            "Material": "Steel",
            "ItemWeight": "4 kg",
            "ItemDimensions": "9.84 x 6.3 x 8.07 inches"
        }
    },
    {
        "id": 11,
        "name": "Orbital Sander",
        "brand": "Craftsman",
        "category": "Power Tools",
        "subcategory": "Cutting",
        "stock": 20,
        "description": "The Craftsman Orbital Sander is designed for achieving a flawless finish on your woodworking and refinishing projects. It provides exceptional sanding performance, making it a reliable choice for both professionals and DIYers. Whether you're smoothing surfaces or preparing them for paint or stain, Craftsman has you covered.",
        "photo": "https://m.media-amazon.com/images/I/71U8G0kbNKL._AC_UF894,1000_QL80_.jpg",
        "price": 70,
        "details": {
            "PowerSupply": "Electrical cable",
            "Speeds": "12000 rpm",
            "Voltage": "20 volts",
            "Amperage": "3 Amps",
            "Material": "Steel",
            "ItemWeight": "2.9 pounds",
            "ItemDimensions": "10.13 x 5.5 x 5.75 inches"
        }
    },
    {
        "id": 12,
        "name": "Orbital Sander",
        "brand": "AEG",
        "category": "Power Tools",
        "subcategory": "Cutting",
        "stock": 18,
        "description": "The AEG Orbital Sander is a precision tool that delivers exceptional sanding results. With its ergonomic design and efficient performance, it's a valuable asset for professionals and woodworking enthusiasts alike. Whether you're working on intricate detailing or larger surfaces, AEG ensures a smooth and refined finish.",
        "photo": "https://cdn.hoffmann-group.com/derivatives/8481/jpg_1200/jpg_1200_b077321_ex150e.jpg",
        "price": 130,
        "details": {
            "PowerSupply": "Electrical cable",
            "Speeds": "15000 rpm",
            "Voltage": "20 volts",
            "Amperage": "3 Amps",
            "Material": "Steel",
            "ItemWeight": "1.5 kg",
            "ItemDimensions": "10.13 x 5.5 x 5.75 inches"
        }
    },
    {
        "id": 14,
        "name": "Drill Press",
        "brand": "DeWalt",
        "category": "Power Tools",
        "subcategory": "Drilling",
        "stock": 30,
        "description": "The DeWalt Drill Press is a sturdy and versatile tool for accurate drilling. It's perfect for both home workshops and industrial settings. With its precise depth control and powerful motor, DeWalt makes drilling holes easier and more efficient.",
        "photo": "https://images.thdstatic.com/productImages/fcdc4ccc-9729-435e-a7d4-10911c871cb3/svn/dewalt-specialty-power-tools-dcd1623b-a0_600.jpg"
        , "price": 350,
        "details": {
            "PowerSupply": "Electrical cable",
            "Speeds": "450 rpm",
            "Voltage": "240 volts",
            "Amperage": "10 Amps",
            "Material": "Mixture",
            "ItemWeight": "33 pounds",
            "ItemDimensions": "22.44 x 6.5 x 19.29 inches"
        }
    },
    {
        "id": 15,
        "name": "Cordless Welder",
        "brand": "Lincoln Electric",
        "category": "Power Tools",
        "subcategory": "Welding",
        "stock": 20,
        "description": "The Lincoln Electric Cordless Welder is a portable and efficient solution for welding tasks. Whether you're working on automotive repairs or metal fabrication, this cordless welder provides the flexibility and power needed for professional welding results.",
        "photo": "https://mobileimages.lowes.com/productimages/b5c726ad-199d-4ff7-82dd-709f62cbe862/50141926.jpg?size=pdhism",
        "price": 2000,
        "details": {
            "PowerSupply": "Lithium-ion battery",
            "Speeds": 5,
            "Voltage": "18V or 20V",
            "Amperage": "20A or 40A",
            "Material": "Aluminum",
            "ItemWeight": "5 lbs",
            "ItemDimensions": "12 x 8 x 6"
        }
    },
    {
        "id": 16,
        "name": "Welding Machine",
        "brand": "Miller",
        "category": "Power Tools",
        "subcategory": "Welding",
        "stock": 18,
        "description": "The Miller Welding Machine is a high-performance tool for welding applications. It offers exceptional control and versatility, making it a top choice for professional welders and metalworkers. Whether you're working with mild steel or aluminum, Miller ensures precise and reliable welds.",
        "photo": "https://millerweldseurope.com/wp-content/uploads/2020/12/welders_main_photo-1024x1024.jpg",
        "price": 3500,
        "details": {

            "PowerSupply": "Single-phase",
            "Speeds": "1-10",
            "Voltage": "230V",
            "Amperage": "200A",
            "Material": "Steel",
            "ItemWeight": "100",
            "ItemDimensions": "36 x 24 x 18 inches"

        }
    },
    {
        "id": 17,
        "name": "Welding Torch",
        "brand": "Hobart",
        "category": "Power Tools",
        "subcategory": "Welding",
        "stock": 15,
        "description": "The Hobart Welding Torch is a dependable tool for various welding tasks. It's suitable for both MIG and TIG welding processes, offering precision and control. Whether you're a professional welder or tackling DIY projects, Hobart ensures consistent and high-quality welds.",
        "photo": "https://i.ebayimg.com/images/g/u0YAAOSwlFZexJUI/s-l1600.jpg",
        "price": 300,
        "details": {

            "PowerSupply": "Oxy-acetylene",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "100A",
            "Material": "Brass",
            "ItemWeight": "1",
            "ItemDimensions": "12 x 4  x 2 inches"

        }
    },
    {
        "id": 18,
        "name": "Pipe Wrench",
        "brand": "Ridgid",
        "category": "Hand Tools",
        "subcategory": "Plumbing",
        "stock": 20,
        "description": "The Ridgid Pipe Wrench is a heavy-duty tool designed for gripping and turning pipes. It features a sturdy construction and adjustable jaws, making it ideal for plumbing applications.",
        "photo": "https://5.imimg.com/data5/SELLER/Default/2021/11/XN/CT/QK/3902076/heavy-duty-pipe-wrench.jpg",
        "price": 30,
        "details": {
            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Ductile iron",
            "ItemWeight": "2 lbs",
            "ItemDimensions": "10 x 6 x 4 inches"
        }
    },
    {
        "id": 19,
        "name": "Pipe Cutter",
        "brand": "Lenox",
        "category": "Hand Tools",
        "subcategory": "Plumbing",
        "stock": 18,
        "description": "The Lenox Pipe Cutter is a precision tool for cutting pipes with ease. Its sharp cutting wheel ensures clean and accurate cuts, making it indispensable for plumbing professionals.",
        "photo": "https://www.cutwithlenox.com/NAG/PRODUCT/IMAGES/HIRES/12121S1/12121S1_1.jpg?resize=530x530",
        "price": 70,
        "details": {
            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Steel",
            "ItemWeight": "2",
            "ItemDimensions": "12 x 6 x 4 inches"
        }
    },
    {
        "id": 20,
        "name": "Masonry Trowel",
        "brand": "MARSHALLTOWN",
        "category": "Hand Tools",
        "subcategory": "Masonry",
        "stock": 25,
        "description": "The MARSHALLTOWN Masonry Trowel is a reliable tool for spreading mortar and leveling bricks or blocks. Its high-quality construction ensures durability and precise masonry work.",
        "photo": "https://cdn.aws.toolstation.com/images/141020-UK/800/58335.jpg",
        "price": 35,
        "details": {
            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Steel",
            "ItemWeight": "2",
            "ItemDimensions": "12 x 6 x 4 inches"
        }
    },
    {
        "id": 22,
        "name": "Masonry Chisel",
        "brand": "IRWIN",
        "category": "Hand Tools",
        "subcategory": "Masonry",
        "stock": 15,
        "description": "The IRWIN Masonry Chisel is a versatile tool for cutting or shaping bricks and stones. It offers precision and durability, making it a valuable addition to any mason's toolkit.",
        "photo": "https://www.irwintools.com/NAG/PRODUCT/IMAGES/HIRES/1992668/1992668_2.jpg?resize=530x530",
        "price": 10,
        "details": {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Steel",
            "ItemWeight": "1.5 lbs.",
            "ItemDimensions": "10 x 5 x 3 inches"
        }
    },
    {
        "id": 23,
        "name": "Utility Knife",
        "brand": "Stanley",
        "category": "Hand Tools",
        "subcategory": "Cutting",
        "stock": 30,
        "description": "The Stanley Utility Knife is a versatile cutting tool for various materials, including cardboard, carpet, and plastic. Its retractable blade ensures safety and convenience.",
        "photo": "https://images.thdstatic.com/productImages/2c87896d-bb7e-46ab-9889-df7b63a2c556/svn/stanley-utility-knives-stht10479-64_1000.jpg",
        "price": 15,
        "details": {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Plastic and metal",
            "ItemWeight": "0.5 lbs.",
            "ItemDimensions": "6 x 2 x 1 inches"
        }
    },
    {
        "id": 24,
        "name": "Hacksaw",
        "brand": "DEWALT",
        "category": "Hand Tools",
        "subcategory": "Cutting",
        "stock": 22,
        "description": "The DEWALT Hacksaw is a durable and adjustable tool for cutting metal and plastic. It provides reliable cutting performance for a wide range of applications.",
        "photo": "https://www.dewalt.com/NAG/PRODUCT/IMAGES/HIRES/DWHT20547/DWHT20547_1.jpg",
        "price": 25,
        "details": {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Metal and plastic",
            "ItemWeight": "1 lb.",
            "ItemDimensions": "12 x 4 x 2 inches"
        }
    },
    {
        "id": 25,
        "name": "Pruning Shears",
        "brand": "Fiskars",
        "category": "Hand Tools",
        "subcategory": "Cutting",
        "stock": 18,
        "description": "The Fiskars Pruning Shears are perfect for trimming branches and bushes. They offer sharp blades and ergonomic handles for comfortable and precise pruning.",
        "photo": "https://images.thdstatic.com/productImages/a129e29d-0af8-4abf-9a5d-5e324c58ce78/svn/fiskars-pruning-shears-399242-1003-64_1000.jpg",
        "price": 25,
        "details": {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Steel and plastic",
            "ItemWeight": "1 lb.",
            "ItemDimensions": "10 x 6 x 2 inches"
        }
    },
    {
        "id": 26,
        "name": "Screwdriver Set",
        "brand": "Klein Tools",
        "category": "Hand Tools",
        "subcategory": "Fastening",
        "stock": 28,
        "description": "The Klein Tools Screwdriver Set is a comprehensive set of screwdrivers for various fastening tasks. It features durable tips and comfortable grips for efficient screwdriving.",
        "photo": "https://acdn.mitiendanube.com/stores/001/546/946/products/d_nq_np_2x_753977-mla51521139785_092022-f1-9c077525749b682eb416657512112007-640-0.png",
        "price": 35,
        "details": {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Steel and plastic",
            "ItemWeight": "1.5 lbs.",
            "ItemDimensions": "12 x 8 x 4 inches"
        }
    },
    {
        "id": 27,
        "name": "Staple Gun",
        "brand": "Arrow Fastener",
        "category": "Hand Tools",
        "subcategory": "Fastening",
        "stock": 24,
        "description": "The Arrow Fastener Staple Gun is a reliable tool for fastening staples in various materials. It's suitable for upholstery, carpentry, and DIY projects.",
        "photo": "https://images.thdstatic.com/productImages/8a62c012-ac04-4946-b4a6-7c8b43485c82/svn/arrow-staple-guns-t50-64_1000.jpg",
        "price": 25,
        "details": {

            "PowerSupply": "Manual or electric",
            "Speeds": "1",
            "Voltage": "N/A (if electric)",
            "Amperage": "N/A (if electric)",
            "Material": "Metal and plastic",
            "ItemWeight": "1-2 lbs.",
            "ItemDimensions": "10 x 5 x 3 inches"
        }
    },
    {
        "id": 28,
        "name": "C-Clamp",
        "brand": "IRWIN",
        "category": "Hand Tools",
        "subcategory": "Fastening",
        "stock": 20,
        "description": "The IRWIN C-Clamp is a versatile tool for clamping and securing materials. It offers strong clamping force and a durable construction for a wide range of applications.",
        "photo": "https://www.irwintools.com/NAG/PRODUCT/IMAGES/HIRES/225134/225134_P1.jpg?resize=530x530",
        "price": 13,
        "details": {
            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Steel and plastic",
            "ItemWeight": "1-5 lbs.",
            "ItemDimensions": "6 x 4 x 2 inches"
        }
    },
    {
        "id": 29,
        "name": "Tape Measure",
        "brand": "Milwaukee",
        "category": "Hand Tools",
        "subcategory": "Measuring",
        "stock": 35,
        "description": "The Milwaukee Tape Measure is a reliable tool for accurate measurements. It features a durable tape and a comfortable grip for easy measuring in various applications.",
        "photo": "https://static.grainger.com/rp/s/is/image/Grainger/55ED61_AS01",
        "price": 10,
        "details": {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Metal and plastic",
            "ItemWeight": "1-2 lbs.",
            "ItemDimensions": "12 x 6 x 2 inches"
        }
    },
    {
        "id": 30,
        "name": "Spirit Level",
        "brand": "Stanley",
        "category": "Hand Tools",
        "subcategory": "Measuring",
        "stock": 30,
        "description": "The Stanley Spirit Level is a precision tool for ensuring level and plumb surfaces. It's ideal for construction and woodworking projects.",
        "photo": "https://homedevo.com/images/detailed/11/51fAvRYGeTL._SL1200_.jpg",
        "price": 25
        ,
        "details": {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Aluminum and plastic",
            "ItemWeight": "1-2 lbs.",
            "ItemDimensions": "12 x 3 x 2 inches"
        }
    },
    {
        "id": 31,
        "name": "Calipers",
        "brand": "Mitutoyo",
        "category": "Hand Tools",
        "subcategory": "Measuring",
        "stock": 25,
        "description": "The Mitutoyo Calipers are high-precision measuring tools for accurate inside and outside measurements. They are essential for quality control and machining tasks.",
        "photo": "https://images-na.ssl-images-amazon.com/images/I/61jqF9qzJyL._SS400_.jpg",
        "price": 180,
        "details": {

            "PowerSupply": "Manual or digital",
            "Speeds": "1",
            "Voltage": "N/A (if digital)",
            "Amperage": "N/A (if digital)",
            "Material": "Steel and plastic",
            "ItemWeight": "1-2 lbs.",
            "ItemDimensions": "6 x 4 x 2 inches"
        }
    },
    {
        "id": 33,
        "name": "Needle-Nose Pliers",
        "brand": "KNIPEX",
        "category": "Hand Tools",
        "subcategory": "Pliers and clamps",
        "stock": 15,
        "description": "The KNIPEX Needle-Nose Pliers are precision tools for fine gripping and bending tasks. They feature long, slender jaws for accessing tight spaces.",
        "photo": "https://www.lewiscontractorsales.com/Merchant2/graphics/00000002/24824.jpg",
        "price": 34,
        "details": {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Steel and plastic",
            "ItemWeight": "1 lb.",
            "ItemDimensions": "6 x 4 x 2 inches"
        }
    },
    {
        "id": 34,
        "name": "Adjustable Wrench",
        "brand": "Craftsman",
        "category": "Hand Tools",
        "subcategory": "Pliers and clamps",
        "stock": 18,
        "description": "The Craftsman Adjustable Wrench is a versatile tool for turning nuts and bolts. It offers adjustable jaws and a comfortable grip for various applications.",
        "photo": "https://m.media-amazon.com/images/I/514VA1R9D7S.jpg",
        "price": 15
        ,
        "details": {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Chrome vanadium steel",
            "ItemWeight": "1-2 lbs.",
            "ItemDimensions": "8 x 4 x 2 inches"
        }
    },
    {
        "id": 36,
        "name": "Plumber's Snake",
        "brand": "Superior Tool",
        "category": "Hand Tools",
        "subcategory": "Plumbing",
        "stock": 12,
        "description": "The Superior Tool Plumber's Snake is perfect for clearing stubborn clogs in drains and pipes. It's a flexible and durable tool that gets the job done.",
        "photo": "https://www.ellagar.com/SERV_ADMIN_FILES/Archivos/Imagenes/Articulos_MED/7084045_MED.jpg",
        "price": 17,
        "details": {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Steel and plastic",
            "ItemWeight": "2-3 lbs.",
            "ItemDimensions": "36 x 12 x 6 inches"
        }
    },
    {
        "id": 37,
        "name": "Adjustable Pipe Wrench",
        "brand": "Craftsman",
        "category": "Hand Tools",
        "subcategory": "Plumbing",
        "stock": 14,
        "description": "The Craftsman Adjustable Pipe Wrench is a versatile tool designed for gripping and turning pipes of various sizes. It offers precise adjustments and a comfortable grip.",
        "photo": "https://m.media-amazon.com/images/I/514VA1R9D7S._AC_UF894,1000_QL80_.jpg",
        "price": 18,
        "details": {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Ductile iron",
            "ItemWeight": "2-3 lbs.",
            "ItemDimensions": "10 x 6 x 4 inches"
        }
    },
    {
        "id": 38,
        "name": "Tile Saw",
        "brand": "DEWALT",
        "category": "Hand Tools",
        "subcategory": "Masonry",
        "stock": 18,
        "description": "The DEWALT Tile Saw is a high-performance tool for cutting ceramic and stone tiles. It provides accurate cuts and is essential for tile installation projects.",
        "photo": "https://cca.dewalt.global/LAG/PRODUCT/IMAGES/HIRES/D24000/D24000_4.jpg?resize=530x530",
        "price": 700,
        "details": {

            "PowerSupply": "Electric",
            "Speeds": "1",
            "Voltage": "120V",
            "Amperage": "10A",
            "Material": "Steel and plastic",
            "ItemWeight": "20-30 lbs.",
            "ItemDimensions": "18 x 12 x 6 inches"
        }
    },
    {
        "id": 39,
        "name": "Mortar Mixing Paddle",
        "brand": "QEP",
        "category": "Hand Tools",
        "subcategory": "Masonry",
        "stock": 12,
        "description": "The QEP Mortar Mixing Paddle is designed for efficiently mixing mortar, grout, and other construction materials. It's a must-have tool for masonry and tile work.",
        "photo": "https://images.thdstatic.com/productImages/07dc47ec-3593-4e1c-aa05-f925e41d381f/svn/qep-mortar-mixers-61205-64_1000.jpg",
        "price": 17,
        "details": {

            "PowerSupply": "Manual or electric",
            "Speeds": "1",
            "Voltage": "N/A (if electric)",
            "Amperage": "N/A (if electric)",
            "Material": "Steel and plastic",
            "ItemWeight": "1-2 lbs.",
            "ItemDimensions": "12 x 6 x 2 inches"
        }
    },
    {
        "id": 40,
        "name": "Bolt Cutter",
        "brand": "KNIPEX",
        "category": "Hand Tools",
        "subcategory": "Cutting",
        "stock": 16,
        "description": "The KNIPEX Bolt Cutter is a heavy-duty tool designed for cutting through bolts, chains, and wire mesh. Its powerful jaws provide clean and effortless cuts.",
        "photo": "https://cdn11.bigcommerce.com/s-9t4wk8/images/stencil/2000x2000/products/28449/61707/New_Cobolts__34008.1592846043.jpg?c=4",
        "price": 75,
        "details": {
            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Chrome vanadium steel",
            "ItemWeight": "1-2 lbs.",
            "ItemDimensions": "8 x 4 x 2 inches"
        }
    },
    {
        "id": 41,
        "name": "Duct Cutter",
        "brand": "IRWIN",
        "category": "Hand Tools",
        "subcategory": "Cutting",
        "stock": 14,
        "description": "The IRWIN Duct Cutter is a specialized tool for cutting ductwork and sheet metal. Its serrated blades ensure precise and efficient cuts in HVAC installations.",
        "photo": "https://m.media-amazon.com/images/I/51lGgSMx9ZL._AC_UF1000,1000_QL80_.jpg",
        "price": 11,
        "details": {
            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Steel and plastic",
            "ItemWeight": "1 lb.",
            "ItemDimensions": "6 x 4 x 2 inches"
        }
    },
    {
        "id": 42,
        "name": "Screwdriver Bit Set",
        "brand": "DEWALT",
        "category": "Hand Tools",
        "subcategory": "Fastening",
        "stock": 24,
        "description": "The DEWALT Screwdriver Bit Set includes a wide range of bits for various screw types. They are made from high-quality materials for long-lasting performance.",
        "photo": "https://www.dewalt.com.au/EMEA/PRODUCT/IMAGES/HIRES/DW2166/DW2166_1.jpg?resize=530x530",
        "price": 28,
        "details": {
            "PowerSupply": "N/A",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Steel and plastic",
            "ItemWeight": "1-2 lbs.",
            "ItemDimensions": "6 x 4 x 2 inches"
        }
    },
    {
        "id": 43,
        "name": "Quick Release Clamp",
        "brand": "Bessey",
        "category": "Hand Tools",
        "subcategory": "Fastening",
        "stock": 16,
        "description": "The Bessey Quick Release Clamp is designed for one-handed operation. It provides rapid and secure clamping for woodworking and DIY projects.",
        "photo": "https://www.ultimatetools.ca/cdn/shop/products/Bessey_GTR_Series_Quick_Track_Clamp_BES-GTR16S6H.jpg?v=1600009858",
        "price": 46,
        "details": {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Steel and plastic",
            "ItemWeight": "1-2 lbs.",
            "ItemDimensions": "6 x 4 x 2 inches"
        }
    },
    {
        "id": 44,
        "name": "Digital Protractor",
        "brand": "Wixey",
        "category": "Hand Tools",
        "subcategory": "Measuring",
        "stock": 22,
        "description": "The Wixey Digital Protractor provides precise angle measurements for woodworking and metalworking projects. It offers an easy-to-read digital display.",
        "photo": "https://i5.walmartimages.com/asr/9bbcd9cc-d230-41f3-a818-a1cf87002909_1.d6f67a1fa1394feb6da26afd7a29b7f6.jpeg",
        "price": 46,
        "details": {

            "PowerSupply": "Battery",
            "Speeds": "1",
            "Voltage": "3V",
            "Amperage": "0.1A",
            "Material": "Plastic",
            "ItemWeight": "1 lb.",
            "ItemDimensions": "6 x 4 x 2 inches"
        }
    },
    {
        "id": 45,
        "name": "Distance Measurer",
        "brand": "Bosch",
        "category": "Hand Tools",
        "subcategory": "Measuring",
        "stock": 18,
        "description": "The Bosch Distance Measurer uses laser technology to accurately measure distances. It's a convenient tool for construction and layout tasks.",
        "photo": "https://www.bosch-professional.com/es/es/ocsmedia/337111-54/application-image/1434x828/medidor-laser-de-distancias-glm-40-0601072900.png",
        "price": 132,
        "details": {

            "PowerSupply": "Battery",
            "Speeds": "1",
            "Voltage": "3V",
            "Amperage": "0.1A",
            "Material": "Plastic",
            "ItemWeight": "1 lb.",
            "ItemDimensions": "6 x 4 x 2 inches"
        }
    },
    {
        "id": 46,
        "name": "Groove Joint Pliers",
        "brand": "Irwin VISE-GRIP",
        "category": "Hand Tools",
        "subcategory": "Pliers and clamps",
        "stock": 12,
        "description": "The Irwin VISE-GRIP Groove Joint Pliers are designed for gripping and adjusting pipes and other objects. They feature a groove joint for versatility.",
        "photo": "https://i5.walmartimages.com/asr/820a0703-1e33-4e61-a0b6-2093d6a6bdb3.4cb45060d02d172d4c31bbedfe8eb044.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        "price": 10,
        "details":
        {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Steel and plastic",
            "ItemWeight": "1-2 lbs.",
            "ItemDimensions": "8 x 4 x 2 inches"
        }
    },
    {
        "id": 47,
        "name": "Locking Pliers",
        "brand": "Stanley",
        "category": "Hand Tools",
        "subcategory": "Pliers and clamps",
        "stock": 14,
        "description": "The Stanley Locking Pliers provide a secure grip on objects that need to be clamped or held in place. They are versatile and easy to adjust for various tasks.",
        "photo": "https://cdn11.bigcommerce.com/s-6sy7my5b50/images/stencil/1280x1280/products/5847/23151/file-input-1667320096957__86225.1667320098.1280.1280__07838.1678114342.jpg?c=1",
        "price": 15,
        "details": {
            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Steel and plastic",
            "ItemWeight": "1-2 lbs.",
            "ItemDimensions": "8 x 4 x 2 inches"
        }
    },
    {
        "id": 48,
        "name": "Galvanized Steel Screw",
        "brand": "Bosch",
        "category": "Hardware",
        "subcategory": "Fastening",
        "stock": 100,
        "description": "High-strength galvanized steel screws, ideal for fastening materials in construction and woodworking applications.",
        "photo": "https://www.part-on.co.uk/uploaded/thumbnails/db_file_img_16025_1024x1024.jpg",
        "price": 0.06,
        "details": {

            "PowerSupply": "N/A",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Galvanized",
            "ItemWeight": "0.1 oz.",
            "ItemDimensions": "1 x 0.25 x 0.25 inches"
        }
    },
    {
        "id": 49,
        "name": "Steel Nail",
        "brand": "Stanley",
        "category": "Hardware",
        "subcategory": "Fastening",
        "stock": 150,
        "description": "Durable steel nails for securing and fastening objects in wood and other materials.",
        "photo": "https://s8580.pcdn.co/wp-content/uploads/2015/01/Stanley-58-112-Steel-Nail-Set-324x324.jpg",
        "price": 0.03,
        "details": {
            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Steel",
            "ItemWeight": "0.05 oz.",
            "ItemDimensions": "1 x 0.125 x 0.125 inches"
        }
    },
    {
        "id": 50,
        "name": "Self-Tapping Screw",
        "brand": "Makita",
        "category": "Hardware",
        "subcategory": "Fastening",
        "stock": 120,
        "description": "Quality self-tapping screws for drywall and mounting applications.",
        "photo": "https://www.lsengineers.co.uk/media/catalog/product/cache/2183975d50b12d1ff8f0f4c988893bcd/2/6/266429-2.jpg",
        "price": 0.07,
        "details": {

            "PowerSupply": "Manual or electric",
            "Speeds": "1",
            "Voltage": "N/A (if electric)",
            "Amperage": "N/A (if electric)",
            "Material": "Steel",
            "ItemWeight": "0.1 oz.",
            "ItemDimensions": "1 x 0.25 x 0.25 inches"
        }
    },
    {
        "id": 51,
        "name": "Bolt Nut",
        "brand": "DeWalt",
        "category": "Hardware",
        "subcategory": "Fastening",
        "stock": 80,
        "description": "High-strength bolt nuts for securing heavy-duty structures and equipment.",
        "photo": "https://m.media-amazon.com/images/I/51dA+hSZUzL._AC_UF350,350_QL50_.jpg",
        "price": 0.20,
        "details": {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Steel",
            "ItemWeight": "0.2 oz.",
            "ItemDimensions": "1 x 0.5 x 0.5 inches"
        }
    },
    {
        "id": 52,
        "name": "Anchor Bolt",
        "brand": "Hilti",
        "category": "Hardware",
        "subcategory": "Fastening",
        "stock": 90,
        "description": "Anchor bolts designed for securely fastening objects to concrete and masonry.",
        "photo": "https://5.imimg.com/data5/ANDROID/Default/2020/12/LT/SH/SC/36071419/product-jpeg-500x500.jpg",
        "price": 0.50,
        "details": {

            "PowerSupply": "Manual or electric",
            "Speeds": "1",
            "Voltage": "N/A (if electric)",
            "Amperage": "N/A (if electric)",
            "Material": "Steel",
            "ItemWeight": "0.5 oz.",
            "ItemDimensions": "2 x 0.75 x 0.75 inches"
        }
    },
    {
        "id": 53,
        "name": "Drywall Anchor",
        "brand": "E-Z Ancor",
        "category": "Hardware",
        "subcategory": "Fastening",
        "stock": 110,
        "description": "Reliable drywall anchors for secure wall mounting of fixtures and decorations.",
        "photo": "https://mobileimages.lowes.com/productimages/e85b4017-93eb-4870-90f0-b6bbe0f2f084/45405206.jpg",
        "price": 0.10,
        "details": {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Nylon",
            "ItemWeight": "0.1 oz.",
            "ItemDimensions": "1 x 0.25 x 0.25 inches"
        }
    },
    {
        "id": 54,
        "name": "Cable Tie",
        "brand": "VELCRO Brand",
        "category": "Hardware",
        "subcategory": "Fastening",
        "stock": 200,
        "description": "Durable cable ties for organizing and securing cables and wires.",
        "photo": "https://www.hookandloop.com/media/catalog/product/b/l/black_cable_ties_4_1_1.jpg",
        "price": 0.10,
        "details": {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Nylon",
            "ItemWeight": "0.01 oz.",
            "ItemDimensions": "6 x 0.25 x 0.25 inches"
        }
    },
    {
        "id": 55,
        "name": "Interior Latex Paint",
        "brand": "Sherwin-Williams",
        "category": "Hardware",
        "subcategory": "Painting Supplies",
        "stock": 50,
        "description": "High-quality interior latex paint available in a variety of colors and finishes.",
        "photo": "https://http2.mlstatic.com/D_NQ_NP_604877-MLC51802365080_102022-O.webp",
        "price": 40,
        "details": {

            "PowerSupply": "N/A",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Water-based latex",
            "ItemWeight": "1 gallon",
            "ItemDimensions": "12 x 12 x 6 inches"
        }
    },
    {
        "id": 57,
        "name": "Angled Paint Brush",
        "brand": "Purdy",
        "category": "Hardware",
        "subcategory": "Painting Supplies",
        "stock": 70,
        "description": "High-quality angled paint brushes for precise detailing and fine painting applications.",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRItg1oNUl63NklKO27TLp6qa7tLuujlrFp_z7Q1kJKgKP45kQ2hKO1rl67mV5TH-8j6Ic&usqp=CAU",
        "price": 17,
        "details": {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Bristles: Natural or synthetic; Handle: Wood or plastic",
            "ItemWeight": "0.25 lbs.",
            "ItemDimensions": "9 x 4 x 2 inches"
        }
    },
    {
        "id": 58,
        "name": "Paint Tray",
        "brand": "Wooster",
        "category": "Hardware",
        "subcategory": "Painting Supplies",
        "stock": 60,
        "description": "Durable paint trays with compartments for easy paint distribution and clean-up.",
        "photo": "https://images.thdstatic.com/productImages/a917e160-8b03-4f53-b436-ea3341deb899/svn/green-plastic-wooster-paint-trays-0br4130210-64_1000.jpg",
        "price": 5,
        "details": {

            "PowerSupply": "N/A",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Plastic",
            "ItemWeight": "0.5 lbs.",
            "ItemDimensions": "12 x 6 x 3 inches"
        }
    },
    {
        "id": 59,
        "name": "Painter's Tape",
        "brand": "FrogTape",
        "category": "Hardware",
        "subcategory": "Painting Supplies",
        "stock": 100,
        "description": "High-quality painter's tape for precise masking and clean paint lines.",
        "photo": "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwf7d93ab5/images/large/641732_1000_1_-frogtape-delicate-surface-masking-tape-24mm-x-41-1m.jpg?sw=680&q=85",
        "price": 7,
        "details": {

            "PowerSupply": "N/A",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Crepe paper with adhesive backing",
            "ItemWeight": "0.1 lbs",
            "ItemDimensions": "60 yds. x 1.88 inches"
        }
    },
    {
        "id": 60,
        "name": "Spray Paint",
        "brand": "Rust-Oleum",
        "category": "Hardware",
        "subcategory": "Painting Supplies",
        "stock": 90,
        "description": "Fast-drying and durable spray paint for various DIY and home improvement projects.",
        "photo": "https://cdn.mscdirect.com/global/images/ProductImages/5895677-21.jpg",
        "price": 5,
        "details": {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Aerosol paint",
            "ItemWeight": "1 lb.",
            "ItemDimensions": "12 x 6 x 4 inches"
        }
    },
    {
        "id": 61,
        "name": "Paint Can Opener",
        "brand": "Shur-Line",
        "category": "Hardware",
        "subcategory": "Painting Supplies",
        "stock": 120,
        "description": "Convenient paint can opener tool for easy access to paint cans.",
        "photo": "https://cdn.paintsupply.com/wp-content/uploads/2016/06/022384060203.jpg",
        "price": 3,
        "details": {

            "PowerSupply": "Manual",
            "Speeds": "1",
            "Voltage": "N/A",
            "Amperage": "N/A",
            "Material": "Metal",
            "ItemWeight": "0.1 lb.",
            "ItemDimensions": "6 x 4 x 2 inches"
        }
    }

]

export default products
