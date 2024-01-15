import React from "react";
import { useLocation } from "react-router-dom";
import "../CSS/ProductDetail.css";

const ProductDetail = (props) => {
  const location = useLocation();
  const product = location.state;
  console.log("Product =>", product);

  return (
    <div className="main">
      <div className="productDetail">
        <div className="leftProductDetail">
          <img className="productDetailImage" src={product.image} />
        </div>
        <div className="rightProductDetail">
          <h3 className="productDetailTitle">{product.title}</h3>
          <h5 className="productDetailCategory">{`(${product.category})`}</h5>
          <p className="productDetailDesc">{product.description}</p>
          <div className="productPrices">
            <span className="productPrice">{`₹${Math.round(
              product.price * 82
            )}`}</span>
            <span className="productPriceDisc">
              {<del> ₹ {Math.round(product.price * 80) * 1.5}</del>}
            </span>
          </div>
          <p className="productrating">{product.rating.rate}</p>
          <p className="productratingCount">{product.rating.count}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
