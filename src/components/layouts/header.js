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
                    <span id="cart-text">Cart</span> ( <span id="cart-count">{cartCount}</span> ) 
                </button>
                <div className={`cart-dropdown`} id="cart-dropdown">
                    <div id="cart-list">
                        
                        <div className="cart-item">
                            <div>
                                <div className="cart-img">
                                    <img src={''} alt="Product in Cart" />
                                </div>
                                <div className="cart-details">
                                    <div>{'Product Title'}</div>
                                    <div className="quantity-amount">
                                        {'0'}x <span>${'0.00'}</span>
                                    </div>
                                    <div>Size: {'S'}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
