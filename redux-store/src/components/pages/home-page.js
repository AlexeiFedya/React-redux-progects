import React from 'react';

import BookListContainer from '../book-list/book-list'
import ShopCartTable from '../shop-cart-table/shop-cart-table.js'


const HomePage = () => {

    return (
        <div>
            <BookListContainer/>
            <ShopCartTable/>
        </div>
    )
}

export default HomePage;