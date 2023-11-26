
import React, { useEffect, useState } from 'react';


// Import the fetchProducts utility
import { fetchProducts } from './api/api';  

// Import main components
import Header from './components/layouts/header';
import Product from './components/product/product';
import './assets/styles/main.scss';

function App() {
    // State to hold product data and cart data
    const [products, setProducts] = useState([]);
    const [cartData, setCartData] = useState([]);

    // Function to update cart data
    const updateCartData = (updatedCartData) => {
        setCartData(updatedCartData);
    };

    // Fetch product data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await fetchProducts();  // Use the utility function
                setProducts(productsData);
            } catch (error) {
                console.error('Failed to fetch products:', error.message);
                // log an error message to the user or log the error to a monitoring service.
            }
        };

        fetchData();
    }, []);

    // Render header and product components
    return (
        <div className="App">
            <Header cartCount={cartData.length} cartData={cartData} />
            <Product productData={products} cartData={cartData} updateCartData={updateCartData} />
        </div>
    );
}

export default App;
