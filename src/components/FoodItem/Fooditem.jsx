import React, { useContext, useState } from 'react'
import './Fooditem.css'
import { StoreContext } from '../../context/StoreContext';

const Fooditem = ({ id, name, price, description, image }) => {

    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

    return (
        <div className="product-item">
            {!cartItems[id]
                ? ""
                :<div className="item-counter">
                    <p className="item-count">
                        {cartItems[id]}
                    </p>
                </div>
            }
            <div className="product-item-container">
                <img className="product-item-image" src={image} alt="" />
            </div>
            <div className="product-item-info">
                <div className="product-item-name">
                    <p>{name}</p>
                </div>
                <p className="product-item-discription">{description}</p>
                <p className="product-item-price"> Rs.{price}/- </p>
                <div className="product-add">
                    {!cartItems[id]
                        ? <div className="add" onClick={() =>addToCart(id)}>add to cart</div>
                        : <div className="product-item-counter">
                            <div onClick={() =>addToCart(id)} className="add1">add to cart</div>
                            <div onClick={() =>removeFromCart(id)} className="minus1">discart</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Fooditem
