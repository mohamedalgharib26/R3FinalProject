import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

function ProductsList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <section className="trending-product section" style={{ marginTop: 12 }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Trending Product</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* */}
            {products.map((item) => {
              return <Product key={item.id} product={item} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsList;
