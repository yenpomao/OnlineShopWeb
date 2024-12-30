// Import all images dynamically
const images = require.context('./all_products', false, /\.jpg$/);

// Map image names to their paths
const imageMap = images.keys().reduce((map, path) => {
    const imageName = path.replace('./', '').replace('.jpg', ''); // Extract "p1", "p2", etc.
    map[imageName] = images(path);
    return map;
}, {});

let data_product = [
    { id: 1, name: "Men's Classic T-Shirt", image: imageMap['p1'], new_price: 12.00, old_price: 15.00, category: "men" },
    { id: 2, name: "Men's Casual Shirt", image: imageMap["p2"], new_price: 20.00, old_price: 25.00, category: "men" },
    { id: 3, name: "Unisex Hoodie", image: imageMap["p3"], new_price: 40.00, old_price: 45.00, category: "men" },
    { id: 4, name: "Denim Jeans", image: imageMap["p4"], new_price: 18.75, old_price: 22.00, category: "men" },
    { id: 5, name: "Casual Sneakers", image: imageMap["p5"], new_price: 35.00, old_price: 40.00, category: "men" },
    { id: 6, name: "Leather Jacket", image: imageMap["p6"], new_price: 75.00, old_price: 90.00, category: "men" },
    { id: 7, name: "Men's Watch", image: imageMap["p7"], new_price: 80.00, old_price: 100.00, category: "men" },
    { id: 8, name: "Men's Running Shoes", image: imageMap["p8"], new_price: 55.00, old_price: 70.00, category: "men" },
    { id: 9, name: "Men's Belt", image: imageMap["p9"], new_price: 15.00, old_price: 18.00, category: "men" },
    { id: 10, name: "Men's Sunglasses", image: imageMap["p10"], new_price: 25.00, old_price: 30.00, category: "men" },
    { id: 11, name: "Men's Formal Shirt", image: imageMap["p11"], new_price: 28.00, old_price: 32.00, category: "men" },
    { id: 12, name: "Men's Athletic Shorts", image: imageMap["p12"], new_price: 18.00, old_price: 22.00, category: "men" },
    { id: 13, name: "Men's Jacket", image: imageMap["p13"], new_price: 65.00, old_price: 80.00, category: "men" },
    { id: 14, name: "Men's Boots", image: imageMap["p14"], new_price: 85.00, old_price: 100.00, category: "men" },

    { id: 15, name: "Kid's Graphic Tee", image: imageMap["p15"], new_price: 10.00, old_price: 12.00, category: "kid" },
    { id: 16, name: "Kid's Pajamas", image: imageMap["p16"], new_price: 18.00, old_price: 22.00, category: "kid" },
    { id: 17, name: "Kid's Sandals", image: imageMap["p17"], new_price: 15.00, old_price: 18.00, category: "kid" },
    { id: 18, name: "Kid's Backpack", image: imageMap["p18"], new_price: 22.00, old_price: 28.00, category: "kid" },
    { id: 19, name: "Kid's Raincoat", image: imageMap["p19"], new_price: 18.00, old_price: 22.00, category: "kid" },
    { id: 20, name: "Kid's Shorts", image: imageMap["p20"], new_price: 12.00, old_price: 15.00, category: "kid" },
    { id: 21, name: "Kid's Gloves", image: imageMap["p21"], new_price: 10.00, old_price: 12.00, category: "kid" },
    { id: 22, name: "Kid's Cap", image: imageMap["p22"], new_price: 8.00, old_price: 10.00, category: "kid" },
    { id: 23, name: "Kid's Hoodie", image: imageMap["p23"], new_price: 25.00, old_price: 30.00, category: "kid" },
    { id: 24, name: "Kid's Socks", image: imageMap["p24"], new_price: 5.00, old_price: 7.00, category: "kid" },

    { id: 25, name: "Women's Handbag", image: imageMap["p25"], new_price: 65.00, old_price: 80.00, category: "women" },
    { id: 26, name: "Women's Blouse", image: imageMap["p26"], new_price: 30.00, old_price: 35.00, category: "women" },
    { id: 27, name: "Women's Sportswear", image: imageMap["p27"], new_price: 45.00, old_price: 55.00, category: "women" },
    { id: 28, name: "Women's High Heels", image: imageMap["p28"], new_price: 50.00, old_price: 60.00, category: "women" },
    { id: 29, name: "Women's Necklace", image: imageMap["p29"], new_price: 40.00, old_price: 50.00, category: "women" },
    { id: 30, name: "Women's Earrings", image: imageMap["p30"], new_price: 30.00, old_price: 40.00, category: "women" },
    { id: 31, name: "Women's Sunglasses", image: imageMap["p31"], new_price: 25.00, old_price: 30.00, category: "women" },
    { id: 32, name: "Women's Hat", image: imageMap["p32"], new_price: 18.00, old_price: 22.00, category: "women" },
    { id: 33, name: "Women's Scarf", image: imageMap["p33"], new_price: 20.00, old_price: 25.00, category: "women" },
    { id: 34, name: "Women's Maxi Dress", image: imageMap["p34"], new_price: 60.00, old_price: 75.00, category: "women" },
    { id: 35, name: "Women's Swimsuit", image: imageMap["p35"], new_price: 50.00, old_price: 65.00, category: "women" },
    { id: 36, name: "Women's Formal Dress", image: imageMap["p36"], new_price: 70.00, old_price: 85.00, category: "women" },
];

export default data_product;



