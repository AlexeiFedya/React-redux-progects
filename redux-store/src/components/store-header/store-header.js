import React from 'react';
import './store-header.css'

const StoreHeader = ({numItems, total}) => {
    return (
    <header className="shop-header row">
        <a className="logo text-dark" href="/">Redux Store</a>
        <a className="shopping-cart">
            <i className="cart-icon fa fa-shopping-cart" />
            {numItems} items (${total})
        </a>
    </header>
    )
}

export default StoreHeader;