# GadgetHaven

GadgetHaven is a responsive e-commerce platform designed for gadget enthusiasts. It provides a seamless shopping experience with features like product browsing, a shopping cart, wishlist management, and more.

## 🌟 Features

1. **Structured Navigation**

   - Intuitive navigation bar with clear product categories and search functionality.

2. **Product Categories and Details**

   - Explore gadgets by categories and access detailed product information.

3. **Shopping Cart and Wishlist**

   - Add items to the shopping cart or wishlist and manage them with real-time updates.

4. **Product Filtering and Sorting**

   - Filter products by price, category, or brand and sort them by price, popularity, or ratings.

5. **Data Persistence**

   - Use Context API to manage cart and wishlist data, with LocalStorage for persistence across sessions.

6. **Edge-case Handling**
   - Handle scenarios like empty cart, out-of-stock products, and price limits to ensure smooth functionality.

## 🧩 React Fundamentals

This project leverages essential React concepts:

- **Components and Props**: For creating reusable and dynamic components like ProductCard, Navbar, and FilterSidebar.
- **State and Lifecycle**: Manage application state (cart, wishlist, product filters) using `useState` and `useEffect`.
- **React Router**: For smooth navigation between pages (Home, Product Details, Cart, Wishlist).
- **Context API**: To provide a global state for cart and wishlist management.
- **Conditional Rendering**: For showing different UI elements based on user actions or state.

## 📊 Data Management

- **State Management**: Implemented using **Context API** to handle cart and wishlist data.
- **Local Storage**: Used for persisting data like the shopping cart and wishlist across browser sessions.

## 📂 Project Structure

```plaintext
src/
├── components/        # Reusable React components (Navbar, ProductCard, FilterSidebar)
├── pages/             # Main pages (Home, ProductDetails, Cart, Wishlist)
├── context/           # Context API for cart and wishlist management
├── hooks/             # Custom hooks (e.g., useCart, useWishlist)
├── utils/             # Helper functions for API calls and data formatting
├── styles/            # CSS or styled-components for consistent design
├── App.js             # Main app entry point
└── index.js           # React DOM rendering
```
