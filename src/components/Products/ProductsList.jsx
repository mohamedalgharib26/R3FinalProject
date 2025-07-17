import React from "react";
import Product from "./Product";

function ProductsList() {
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
            <div className="col-lg-3 col-md-6 col-12">
              <Product />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsList;
