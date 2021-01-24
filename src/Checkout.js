import React from 'react';
import './Checkout.css';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                className="checkout__ad"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" 
                alt=""/>
            <div>
                <h2 className="checkout__title">Your shopping Basket
                </h2>
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
            </div>
            </div>
            <div className="checkout__right">
                <h2>The subtotal</h2>
            </div>
        </div>
    )
}

export default Checkout 
