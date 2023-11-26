import React, { useState, useEffect } from "react";

function Header(props) {
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const totalItems = props.cartData.reduce((acc, item) => acc + item.quantity, 0);
        setCartCount(totalItems);
    }, [props.cartData]);

    const toggleCartVisibility = () => {
        if (cartCount > 0) {
            setIsCartVisible(!isCartVisible);
        }
    };

    return (
        <header>
            <div className="data cart-area">
                <button
                    id="cart-button"
                    className={isCartVisible ? 'active' : ''}
                    onClick={toggleCartVisibility}
                    disabled={cartCount === 0}
                >
                    <span id="cart-text"></span> ( <span id="cart-count">{cartCount}</span> ) 
                </button>
                <div className={`cart-dropdown ${isCartVisible ? 'active' : ''}`} id="cart-dropdown">
                    <div id="cart-list">
                        {props.cartData?.map((item) => (
                            <div className="cart-item" key={item.sizeId}>
                                <div>
                                    <div className="cart-img">
                                        <img src={item.image} alt="Product in Cart" />
                                    </div>
                                    <div className="cart-details">
                                        <div>{item.title}</div>
                                        <div className="quantity-amount">
                                            {item.quantity}x <span>${item.price.toFixed(2)}</span>
                                        </div>
                                        <div>Size: {item.sizeLabel}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
