# 🛍️ Adithya Shop - E-Commerce Website

A simple, responsive e-commerce website for **Adithya Shop** selling:
- ☀️ **Sun Direct** (DTH Plans)
- 🍽️ **Dishes** (Kitchenware)
- 📺 **TV Recharge** (Subscription Plans)

## ✨ Features

✅ **Product Catalog** - Browse all products by category  
✅ **Shopping Cart** - Add/remove items, manage quantities  
✅ **Cart Persistence** - Cart data saved in browser storage  
✅ **Checkout** - Complete order with customer details  
✅ **Responsive Design** - Works on mobile, tablet, desktop  
✅ **Category Filters** - Filter by product type  

## 📂 Files

- `index.html` - Homepage with product listing
- `cart.html` - Shopping cart page
- `checkout.html` - Checkout and order confirmation
- `styles.css` - All styling
- `products.js` - Product data and rendering
- `cart.js` - Cart management functions

## 🚀 How to Use

### Option 1: Local File
1. Download all files
2. Open `index.html` in your browser
3. Start shopping!

### Option 2: GitHub Pages
1. Push files to GitHub repository
2. Go to **Settings → Pages**
3. Select `main` branch as source
4. Your site will be live at: `https://username.github.io/my-shop`

### Option 3: Live Server (VS Code)
1. Install Live Server extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## 📦 Products

### Sun Direct Plans
- Basic Plan - ₹299/month (100+ channels)
- Premium Plan - ₹499/month (200+ channels)
- Ultimate Plan - ₹799/month (400+ channels)
- Sports Add-on - ₹199/month
- Movies Add-on - ₹99/month

### Dishes (Kitchenware)
- Ceramic Dinner Plates Set (6pc) - ₹499
- Steel Mixing Bowls Set (3pc) - ₹299
- Glass Water Glasses Set (6pc) - ₹399
- Stainless Steel Spoon Set (12pc) - ₹349
- Dinner Plates & Bowls Combo - ₹699

### TV Recharge
- 1 Month - ₹299
- 3 Months - ₹799
- 6 Months - ₹1,499
- 12 Months - ₹2,499

## 🛠️ Customization

To modify products, edit `products.js`:

```javascript
{
    id: 15,
    name: "Your Product Name",
    category: "sun-direct", // or "dishes", "tv-recharge"
    price: 299,
    description: "Your description",
    image: "🎯" // Any emoji
}
```

## 📝 Notes

- All prices are in Indian Rupees (₹)
- Cart data stored in browser's localStorage
- No backend required - fully client-side
- Add your own payment gateway in checkout.html

## 🎨 Customization

Change colors in `styles.css`:
```css
/* Change primary color */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Change to your colors */
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
```

## 📱 Mobile Friendly
✅ Fully responsive  
✅ Touch-friendly buttons  
✅ Mobile-optimized layout  

---

Made with ❤️ for Adithya Shop
