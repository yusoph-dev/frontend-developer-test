// Import necessary modules and components
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import placeholder from "../../assets/images/placeholder.png";

// Product component definition
function Product({ productData: initialProductData, updateCartData }) {
    // State variables to manage product data, selected size, and local cart data
    const [productData, setProductData] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [localCartData, setLocalCartData] = useState([]);

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

    // Effect to retrieve cart data from local storage
    useEffect(() => {
        const storedCartData = localStorage.getItem('cartData');
        if (storedCartData) {
            setLocalCartData(JSON.parse(storedCartData));
        }
    }, []);

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

    // Function to add product to cart
    const addToCart = (selectedSize) => {
        try {
            if (!selectedSize) {
                alert('Please select a size first');
                return;
            }

            const existingCartItemIndex = localCartData.findIndex((cartItem) => cartItem.sizeId === selectedSize.id);

            if (existingCartItemIndex >= 0) {
                setLocalCartData((prevCartData) => {
                    const updatedCartData = [...prevCartData];
                    updatedCartData[existingCartItemIndex].quantity++;
                    return updatedCartData;
                });
            } else {
                const newCartItem = {
                    title: productData.title,
                    image: productData.imageURL,
                    sizeId: selectedSize.id,
                    sizeLabel: selectedSize.label,
                    quantity: 1,
                    price: productData.price,
                };
                setLocalCartData((prevCartData) => [...prevCartData, newCartItem]);
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    // Effect to update parent component with localCartData and store in local storage
    useEffect(() => {
        updateCartData(localCartData);
        localStorage.setItem('cartData', JSON.stringify(localCartData));
    }, [localCartData, updateCartData]);

    // Render product details
    return (
        <div id="divider">
            <div id="product-image">
                <img src={productData?.imageURL || placeholder} alt="Product Image" />
            </div>
            <div id="product-details">
                <div id="product-title">{productData?.title}</div>
                <div id="amount">$<span id="product-amount">{productData?.price ? productData.price.toFixed(2) : ''}</span></div>
                <div id="product-description">{productData?.description}</div>
                <div id="size-div">SIZE<span className="required-size">*</span> <span id="selected-size">{selectedSize?.label || ""}</span></div>
                <div id="size-selection">
                    {productData?.sizeOptions?.map((size) => (
                        <button
                            className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                            key={size.id}
                            onClick={() => handleSizeClick(size)}
                        >
                            {size.label}
                        </button>
                    ))}
                </div>
                <button id="add-to-cart" onClick={() => addToCart(selectedSize)}>
                    ADD TO CART
                </button>
            </div>
        </div>
    );
}

// Prop types definition for Product component
Product.propTypes = {
    initialProductData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    updateCartData: PropTypes.func.isRequired,
};

// Export Product component
export default Product;
