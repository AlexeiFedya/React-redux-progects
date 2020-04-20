import React from 'react';

import BookList from '../book-list/book-list'
import ShopCartTable from '../shop-cart-table/shop-cart-table.js'


const HomePage = () => {

    return (
        <div>
            <BookList/>
            <ShopCartTable/>
        </div>
    )
}

export default HomePage;