import React from 'react';
import {Route, Switch} from 'react-router-dom'


import CartPage from '../pages/cart-page'
import HomePage from '../pages/home-page'
import StoreHeader from '../store-header/store-header';
import ShopCartTable from '../shop-cart-table/shop-cart-table.js'


import './app.css'





const  App = () =>{
  return (
    <main role="main" className="container">
      <StoreHeader numItems={5} total={210}/>
      <Switch>
      <Route
        path='/'
        component = {HomePage} 
        exact />
      <Route
        path='/cart'
        component= {CartPage} />  
      </Switch>
    </main>
  );
}

export default App;
