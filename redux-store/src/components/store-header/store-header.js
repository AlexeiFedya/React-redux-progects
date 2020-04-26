import React from 'react';
import './store-header.css'
import { Link } from 'react-router-dom'


const StoreHeader = ({numItems, total}) => {
    return (
    <header className="shop-header row">
        <Link to="/">
            <div className="logo text-dark" href="/">Redux Store</div>
        </Link>
        <Link to="/cart">
            <div className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart" />
                {numItems} items (${total})
            </div>
        </Link>
    </header>
    )
}



export default StoreHeader;