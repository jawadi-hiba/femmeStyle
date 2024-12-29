const products = [
    {
        id: 1,
        name: 'Summer Dress',
        price: '$89.99',
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3'
    },
    {
        id: 2,
        name: 'Elegant Blazer',
        price: '$129.99',
        image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3'
    },
    {
        id: 3,
        name: 'Classic Jeans',
        price: '$69.99',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3'
    },
    {
        id: 4,
        name: 'Evening Gown',
        price: '$199.99',
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3'
    }
];

function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
            </div>
        </div>
    `;
}

export function initShop() {
    const productsGrid = document.querySelector('.products-grid');
    if (productsGrid) {
        productsGrid.innerHTML = products.map(createProductCard).join('');
    }
}