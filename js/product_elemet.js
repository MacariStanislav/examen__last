const params = new URLSearchParams(window.location.search);//Здесь мы создаем объект URLSearchParams, который позволяет удобно работать с параметрами строки запроса в URL (то, что идет после знака ?).
const productId = params.get('id');

const products = {
    1: { 
        name: 'Nike ZoomX 2023',
        description: 'Nike ZoomX 2023.\n Breathable mesh with sleek, responsive cushioning.\nSleek sole for speed and comfort.',
        price: '79$',
        color: 'white',
        image: 'img/sneakers/korean/0266ff61-fcb5-4d26-a9d2-79a51c43aac7.webp',
        pointer: '10 people purchased'
    },
    2: {
        name: 'Adidas Ultraboost X 2023',
        description: 'Soft primeknit upper with responsive Boost cushioning.\nSleek, lightweight sole for a smooth and powerful run.',
        price: '$48.99',
        color: 'black',
        image: 'img/sneakers/korean/He535e4c5a6004157b6103df755cc6e5dc.avif',
        pointer: '25 people purchased'
    },
    3: {
        name: 'Puma Future Rider 2023',
        description: 'Classic retro design with modern materials.\nLightweight midsole and breathable upper for all-day comfort.',
        price: '$35.99',
        color: 'red',
        image: 'img/sneakers/korean/0266ff61-fcb5-4d26-a9d2-79a51c43aac7.webp',
        pointer: '18 people purchased'
    },
    4: {
        name: 'New Balance 990v6',
        description: 'Premium suede and mesh for durability and breathability.\nSoft, cushioned sole for a smooth, supportive ride.',
        price: '$78.99',
        color: 'blue',
        image: 'img/sneakers/korean/He535e4c5a6004157b6103df755cc6e5dc.avif',
        pointer: '15 people purchased'
    },
    5: {
        name: 'Reebok Zig Kinetica 2023',
        description: 'Futuristic design with responsive cushioning for speed.\nLightweight sole with bold style and flexibility.',
        price: '$76.99',
        color: 'green',
        image: 'img/sneakers/korean/0266ff61-fcb5-4d26-a9d2-79a51c43aac7.webp',
        pointer: '30 people purchased'
    },
    6: {
        name: 'Under Armour HOVR Phantom 2023',
        description: 'Energy-returning foam for enhanced speed.\nSleek knit upper with superior breathability and comfort.',
        price: '$36.99',
        color: 'grey',
        image: 'img/sneakers/korean/He535e4c5a6004157b6103df755cc6e5dc.avif',
        pointer: '12 people purchased'
    },
    7: {
        name: 'Asics Gel-Kayano 30',
        description: 'Supportive, stable design with Gel cushioning.\nLightweight sole for maximum comfort and smooth transitions.',
        price: '$39.99',
        color: 'yellow',
        image: 'img/sneakers/korean/0266ff61-fcb5-4d26-a9d2-79a51c43aac7.webp',
        pointer: '8 people purchased'
    },
    8: {
        name: 'Nike Air Max 2023',
        description: 'Iconic Air cushioning technology for all-day comfort.\nModern, breathable mesh upper with sleek design.',
        price: '$30.99',
        color: 'purple',
        image: 'img/sneakers/korean/He535e4c5a6004157b6103df755cc6e5dc.avif',
        pointer: '40 people purchased'
    },
    9: {
        name: 'Saucony Endorphin Pro 2023',
        description: 'Fast, responsive ride with powerful SPEEDROLL technology.\nLightweight mesh upper for breathability and performance.',
        price: '$25.99',
        color: 'orange',
        image: 'img/sneakers/korean/He535e4c5a6004157b6103df755cc6e5dc.avif',
        pointer: '22 people purchased'
    },
    10: {
        name: 'Jordan Zoom 2023',
        description: 'Dynamic Zoom Air technology for lightweight cushioning.\nSleek leather and mesh design for durability and comfort.',
        price: '$28.99',
        color: 'pink',
        image: 'img/sneakers/korean/He535e4c5a6004157b6103df755cc6e5dc.avif',
        pointer: '14 people purchased'
    },
    11: {
        name: 'Converse Chuck 70 Pro 2023',
        description: 'Classic canvas upper with premium rubber sole.\nModern comfort with vintage style for every step.',
        price: '$76.99',
        color: 'brown',
        image: 'img/sneakers/korean/He535e4c5a6004157b6103df755cc6e5dc.avif',
        pointer: '19 people purchased'
    },
    12: {
        name: 'Jordan Zoom 2023',
        description: 'Dynamic Zoom Air technology for lightweight cushioning.\nSleek leather and mesh design for durability and comfort.',
        price: '$46.99',
        color: 'blue',
        image: 'img/sneakers/korean/He535e4c5a6004157b6103df755cc6e5dc.avif',
        pointer: '5 people purchased'
    },
    13: {
        name: 'Puma Future Rider 2023',
        description: 'Classic retro design with modern materials.\nLightweight midsole and breathable upper for all-day comfort.',
        price: '$55.99',
        color: 'black',
        image: 'img/sneakers/korean/He535e4c5a6004157b6103df755cc6e5dc.avif',
        pointer: '17 people purchased'
    },
    14: {
        name: 'Adidas Ultraboost X 2023',
        description: 'Soft primeknit upper with responsive Boost cushioning.\nSleek, lightweight sole for a smooth and powerful run.',
        price: '$66.99',
        color: 'red',
        image: 'img/sneakers/korean/He535e4c5a6004157b6103df755cc6e5dc.avif',
        pointer: '13 people purchased'
    },
    15: {
        name: 'Nike Air Max 2023',
        description: 'Iconic Air cushioning technology for all-day comfort.\nModern, breathable mesh upper with sleek design.',
        price: '$77.99',
        color: 'green',
        image: 'img/sneakers/korean/He535e4c5a6004157b6103df755cc6e5dc.avif',
        pointer: '27 people purchased'
    },
    16: {
        name: 'New Balance 990v6',
        description: 'Premium suede and mesh for durability and breathability.\nSoft, cushioned sole for a smooth, supportive ride.',
        price: '$28.99',
        color: 'yellow',
        image: 'img/sneakers/korean/He535e4c5a6004157b6103df755cc6e5dc.avif',
        pointer: '23 people purchased'
    },
    17: {
        name: 'Reebok Zig Kinetica 2023',
        description: 'Futuristic design with responsive cushioning for speed.\nLightweight sole with bold style and flexibility.',
        price: '$30.99',
        color: 'grey',
        image: 'img/sneakers/korean/He535e4c5a6004157b6103df755cc6e5dc.avif',
        pointer: '9 people purchased'
    },
    18: {
        name: 'Under Armour HOVR Phantom 2023',
        description: 'Energy-returning foam for enhanced speed.\nSleek knit upper with superior breathability and comfort.',
        price: '$82.99',
        color: 'white',
        image: 'img/sneakers/korean/He535e4c5a6004157b6103df755cc6e5dc.avif',
        pointer: '11 people purchased'
    },
    19: {
        name: 'Asics Gel-Kayano 30',
        description: 'Supportive, stable design with Gel cushioning.\nLightweight sole for maximum comfort and smooth transitions.',
        price: '$60.99',
        color: 'orange',
        image: 'img/sneakers/korean/He535e4c5a6004157b6103df755cc6e5dc.avif',
        pointer: '8 people purchased'
    },
    20: {
        name: 'Saucony Endorphin Pro 2023',
        description: 'Fast, responsive ride with powerful SPEEDROLL technology.\nLightweight mesh upper for breathability and performance.',
        price: '$68.99',
        color: 'pink',
        image: 'img/sneakers/korean/He535e4c5a6004157b6103df755cc6e5dc.avif',
        pointer: '20 people purchased'
    }
    
};

const product = products[productId];

if (product) {
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-price').innerText = product.price;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('color').innerText = product.color;
    document.getElementById('pointer').innerText = product.pointer;
    document.getElementById('card').innerTesxt = product.card;
    document.getElementById('favorit').innerText = product.favorit;
} else {
    document.getElementById('product-name').innerText = 'Не братух сегодня без товара understand?';
    document.getElementById('color').innerText = 'no';
    document.getElementById('card').style.display = 'none';
    document.getElementById('favorit').style.display = 'none';
    

}

