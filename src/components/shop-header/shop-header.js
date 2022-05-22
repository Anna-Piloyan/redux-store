import React from 'react';
import './shop-header.css';
import { Link } from "react-router-dom";
import { connect } from "react-redux"; 

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="shop-header row">
            <Link to='/'>
                <div className="logo text-dark">Book Store</div>
            </Link>
            <Link to='/cart'>
                <div className="shopping-cart float-end">
               <span><b> Cart</b> </span>{numItems} items (${total})
            </div>
            </Link>
        </header>
    )
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
    let count=0;
    cartItems.forEach(item => count+=item.count);
    return {
        numItems: count,
        total: orderTotal
    }
}
export default connect(mapStateToProps)(ShopHeader)