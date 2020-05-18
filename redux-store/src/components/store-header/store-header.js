import React from 'react';
import './store-header.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

const StoreHeader = ({items}) => {
    return (
    <header className="shop-header row">
        <Link to="/">
            <div className="logo text-dark" href="/">Redux Store</div>
        </Link>
        <Link to="/cart">
            <div className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart" />
                    {items?.reduce((prev, cur) =>  prev+cur.count,0)}
                <span> items</span> 
                (${items?.reduce((prev, cur) =>  prev+cur.total,0)})
            </div>
        </Link>
    </header>
    )
}

const mapStateToProps = ({shoppingCart}) => {
    return {
        items: shoppingCart.cartItems
    }
}



export default connect(mapStateToProps)(StoreHeader);