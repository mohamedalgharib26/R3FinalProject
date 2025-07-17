import React, { useContext } from "react";
import { cartContext } from "../Context/CartContext";

function CartItems() {
  const { cart } = useContext(cartContext);
  return (
    <ul className="shopping-list">
      {cart.map((item) => {
        return (
          <li>
            <a
              href="javascript:void(0)"
              className="remove"
              title="Remove this item"
            >
              <i className="lni lni-close" />
            </a>
            <div className="cart-img-head">
              <a className="cart-img" href="product-details.html">
                <img src={item.image} alt="#" />
              </a>
            </div>
            <div className="content">
              <h4>
                <a href="product-details.html">{item.title}</a>
              </h4>
              <p className="quantity">
                1x - <span className="amount">${item.price}</span>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CartItems;
