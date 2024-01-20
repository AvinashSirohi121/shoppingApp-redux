import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../CSS/ProductDetail.css";
import { IoMdStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { add } from "../redux/Slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const product = location.state;
  console.log("Product =>", product);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<IoMdStar key={i} color="gold" size="20px" />);
  }

  const addToCart = (product) =>{
      dispatch(add(product));
      toast.success("Product added to Cart", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        theme: "colored",
      });
  }
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
          <div className="rightProductDetailBottom">
            <div className="rightProductDetailBottomLeft">
              <div className="productDetailPrices">
                <span className="productDetailPrice">{`₹${Math.round(
                  product.price * 82
                )}`}</span>
                <span className="productDetailPriceDisc">
                  {<del> ₹ {Math.round(product.price * 80) * 1.5}</del>}
                </span>
              </div>
              <p className="productRating">
                Rating{" "}
                <span className="productRatingSpan">
                  {product.rating.rate}
                  {/* {product.rating.rate.map((star, index) => (
                <IoMdStar
                  key={index}
                  color={star ? "gold" : "lightgray"}
                  size="20px"
                />
              ))} */}
                  {stars.slice(0, Math.round(product.rating.rate))}
                </span>
              </p>
              <p className="productReviewCount">
                No. of reviews { product.rating.count}
              </p>
            </div>
            <div className="rightProductDetailBottomRight">
              <Link to="/cart" onClick={()=>addToCart(product)}>
                <button className="productDetailButton">
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
