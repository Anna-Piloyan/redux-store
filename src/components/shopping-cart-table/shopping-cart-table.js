import React from 'react';
import { connect } from 'react-redux';
import './shopping-cart-table.css';

import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from "../../actions";


const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, idx) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-warning btn-sm float-left">
                        <i className="fas fa-minus-circle"></i>Remove Item
                    </button>

                </td>
                <td>
                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-success btn-sm float-left">
                        <i className="fas fa-plus-circle"></i>Add Item
                    </button>
                </td>
                <td>
                    <button
                        onClick={() => onDelete(id)}
                        className="btn btn-danger btn-sm float-left">
                        <i className="fas fa-trash"></i>Delete
                    </button>
                </td>
            </tr>
        );
    };

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Decrease Item</th>
                        <th>Increase Item</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(renderRow)}
                </tbody>
            </table>

            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
