// Import necessary modules and components
import React, { useState, useEffect } from "react";

import placeholder from "../../assets/images/placeholder.png";

// Product component definition
function Product({ productData: initialProductData }) {
    // State variables to manage product data, selected size, and local cart data
    const [productData, setProductData] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);


    // Effect to fetch initial product data
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!initialProductData) {
                    const response = await fetchDefaultProduct();
                    setProductData(response);
                } else {
                    setProductData(initialProductData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [initialProductData]);

    // Function to fetch default product data (simulated API request)
    const fetchDefaultProduct = async () => {
        try {
            return {
                "id": 1,
                "title": "Sample Product",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                "price": 99.99,
                "imageURL": "https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg",
                "sizeOptions": [
                    { "id": 1, "label": "S" },
                    { "id": 2, "label": "M" },
                    { "id": 3, "label": "L" }
                ]
            };
        } catch (error) {
            console.error('Error fetching default product:', error);
            return {}; // Provide a default value
        }
    };

    // Function to handle size selection
    const handleSizeClick = async (size) => {
        setSelectedSize(size);
    };

    const addToCart = (selectedSize) => {
        try {
            return;
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    }

    return (
        <div id="divider">
            <div id="product-image">
                <img src={placeholder} alt="Product Image" />
            </div>
            <div id="product-details">
                <div id="product-title">{'Product Title'}</div>
                <div id="amount">$<span id="product-amount">{99.99}</span></div>
                <div id="product-description">{'Product Description'}</div>
                <div id="size-div">SIZE<span className="required-size">*</span> <span id="selected-size">{""}</span></div>
                <div id="size-selection">
                    <button
                        className={`size-button`}
                        onClick={() => handleSizeClick([])}
                    />
                </div>
                <button id="add-to-cart" onClick={() => addToCart(selectedSize)}>
                    ADD TO CART
                </button>
            </div>
        </div>
    );

}

// Export Product component
export default Product;