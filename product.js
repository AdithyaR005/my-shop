const products = [
    // Sun Direct Plans
    {
        id: 1,
        name: "Sun Direct Basic Plan",
        category: "sun-direct",
        price: 299,
        description: "100+ channels, 1 month validity",
        image: "☀️"
    },
    {
        id: 2,
        name: "Sun Direct Premium Plan",
        category: "sun-direct",
        price: 499,
        description: "200+ channels, 1 month validity",
        image: "☀️"
    },
    {
        id: 3,
        name: "Sun Direct Ultimate Plan",
        category: "sun-direct",
        price: 799,
        description: "400+ channels, 1 month validity",
        image: "☀️"
    },
    {
        id: 4,
        name: "Sun Direct Sports Add-on",
        category: "sun-direct",
        price: 199,
        description: "Sports channels package, 1 month",
        image: "⚽"
    },
    {
        id: 5,
        name: "Sun Direct Movies Add-on",
        category: "sun-direct",
        price: 99,
        description: "Movie channels package, 1 month",
        image: "🎬"
    },

    // Dishes
    {
        id: 6,
        name: "Ceramic Dinner Plates Set (6pc)",
        category: "dishes",
        price: 499,
        description: "Beautiful ceramic plates, microwave safe",
        image: "🍽️"
    },
    {
        id: 7,
        name: "Steel Mixing Bowls Set (3pc)",
        category: "dishes",
        price: 299,
        description: "Stainless steel mixing bowls with lids",
        image: "🥣"
    },
    {
        id: 8,
        name: "Glass Water Glasses Set (6pc)",
        category: "dishes",
        price: 399,
        description: "Crystal clear glass cups for everyday use",
        image: "🥤"
    },
    {
        id: 9,
        name: "Stainless Steel Spoon Set (12pc)",
        category: "dishes",
        price: 349,
        description: "Durable spoons for dining and serving",
        image: "🥄"
    },
    {
        id: 10,
        name: "Dinner Plates & Bowls Combo",
        category: "dishes",
        price: 699,
        description: "Complete dinner set - plates and bowls",
        image: "🍲"
    },

    // TV Recharge
    {
        id: 11,
        name: "1 Month TV Recharge",
        category: "tv-recharge",
        price: 299,
        description: "TV recharge for 1 month",
        image: "📺"
    },
    {
        id: 12,
        name: "3 Months TV Recharge",
        category: "tv-recharge",
        price: 799,
        description: "TV recharge for 3 months - Save ₹100",
        image: "📺"
    },
    {
        id: 13,
        name: "6 Months TV Recharge",
        category: "tv-recharge",
        price: 1499,
        description: "TV recharge for 6 months - Save ₹300",
        image: "📺"
    },
    {
        id: 14,
        name: "12 Months TV Recharge",
        category: "tv-recharge",
        price: 2499,
        description: "TV recharge for 1 year - Save ₹1000",
        image: "📺"
    }
];

function renderProducts(category = 'all') {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);

    filtered.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.image}</div>
            <h3>${product.name}</h3>
            <p class="product-desc">${product.description}</p>
            <p class="product-price">₹${product.price}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });

    // Add event listeners to buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
            e.target.textContent = '✓ Added!';
            setTimeout(() => {
                e.target.textContent = 'Add to Cart';
            }, 1500);
        });
    });
}

// Filter buttons
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderProducts(e.target.dataset.category);
        });
    });
});
