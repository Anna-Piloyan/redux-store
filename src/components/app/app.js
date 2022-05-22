import React from 'react';
import './app';
import ShopHeader from '../shop-header';
import { Routes, Route } from 'react-router-dom'
import { HomePage, CartPage } from "../pages";

const App = ({ num, total }) => {
    return(
    <main className="container">
        <ShopHeader numItems={num} total={total} />
        <Routes>
            <Route path="" element={<HomePage />} exact/>
            <Route path="cart" element={<CartPage />} />
        </Routes>
    </main>
    )

}

export default App;
