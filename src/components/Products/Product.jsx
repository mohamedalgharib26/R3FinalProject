import React, { useContext } from "react";
import { cartContext } from "../../Context/CartContext";

function Product(props) {
  const { image, category, price, title, id } = props.product;
  const { cart, addToCart } = useContext(cartContext);
  const add = (item) => {
    addToCart(item);
  };
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="single-product">
        <div className="product-image">
          <img src={image} alt="#" height={350} />
          <div className="button" onClick={() => add(props.product)}>
            <button className="btn">
              <i className="lni lni-cart" /> Add to Cart
            </button>
          </div>
        </div>
        <div className="product-info">
          <span className="category">{category}</span>
          <h4 className="title">
            <a href="product-grids.html">{title}</a>
          </h4>
          <ul className="review">
            <li>
              <i className="lni lni-star-filled" />
            </li>
            <li>
              <i className="lni lni-star-filled" />
            </li>
            <li>
              <i className="lni lni-star-filled" />
            </li>
            <li>
              <i className="lni lni-star-filled" />
            </li>
            <li>
              <i className="lni lni-star" />
            </li>
            <li>
              <span>4.0 Review(s)</span>
            </li>
          </ul>
          <div className="price">
            <span>${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
