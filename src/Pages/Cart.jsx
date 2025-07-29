import React, { useContext } from "react";
import { cartContext } from "../Context/CartContext";

function Cart() {
  const { cart, remove } = useContext(cartContext);

  return (
    <div>
      <div className="shopping-cart section">
        <div className="container">
          <div className="cart-list-head">
            {/* Cart List Title */}
            <div className="cart-list-title">
              <div className="row">
                <div className="col-lg-1 col-md-1 col-12"></div>
                <div className="col-lg-4 col-md-3 col-12">
                  <p>Product Name</p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                  <p>Quantity</p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                  <p>Subtotal</p>
                </div>
                <div className="col-lg-1 col-md-2 col-12">
                  <p>CategoryId</p>
                </div>
              </div>
            </div>
            {/* End Cart List Title */}
            {/* Cart Single List list */}
            {cart.map((item) => {
              return (
                <div key={item.id} className="cart-single-list">
                  <div className="row align-items-center">
                    <div className="col-lg-1 col-md-1 col-12">
                      <a href="product-details.html">
                        <img src={item.image} alt="#" />
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-3 col-12">
                      <h5 className="product-name">
                        <p>{item.title}</p>
                      </h5>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                      <div className="count-input">
                        <select className="form-control" fdprocessedid="khw92f">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                      <p>${item.price}</p>
                    </div>
                    <div className="col-lg-1 col-md-2 col-12">
                      <button
                        className="remove-item"
                        onClick={() => remove(item)}
                      >
                        <i className="lni lni-close" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* End Single List list */}
          </div>
          <div className="row">
            <div className="col-12">
              {/* Total Amount */}
              <div className="total-amount">
                <div className="row">
                  <div className="col-lg-8 col-md-6 col-12">
                    <div className="left">
                      <div className="coupon">
                        <form action="#" target="_blank">
                          <input
                            name="Coupon"
                            placeholder="Enter Your Coupon"
                            fdprocessedid="gbwdxi"
                          />
                          <div className="button">
                            <button className="btn" fdprocessedid="b3bu6d">
                              Apply Coupon
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="right">
                      <ul>
                        <li>
                          Cart Subtotal<span>$2560.00</span>
                        </li>
                        <li>
                          Shipping<span>Free</span>
                        </li>
                        <li>
                          You Save<span>$29.00</span>
                        </li>
                        <li className="last">
                          You Pay<span>$2531.00</span>
                        </li>
                      </ul>
                      <div className="button">
                        <a href="checkout.html" className="btn">
                          Checkout
                        </a>
                        <a href="product-grids.html" className="btn btn-alt">
                          Continue shopping
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ End Total Amount */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
