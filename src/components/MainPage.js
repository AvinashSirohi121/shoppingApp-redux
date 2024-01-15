import React, { useEffect, useState } from "react";
import "../CSS/Main.css";
import axios from "axios";
import { Link } from "react-router-dom";

const MainPage = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const getProductsData = async () => {
    const data = await axios(url)
      .then((res) => {
        console.log("Response =>", res.data);
        setProducts(res.data);
      })
      .catch((e) => {
        console.log("Error =>", e);
      });
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="main">
      <div className="products">
        {products && products.length > 0
          ? products.map((product, index) => (
              <div className="product" key={product.id}>
                <p className="productTitle">{`${product.title.slice( 0,20)}...`}</p>
                <p className="productDesc">{`${product.description.slice(0,40)}...`}</p>
                <Link to={`/product/${product.title}`} state ={product}>
                  <img className="productImage" src={product.image} />
                </Link>

                <div className="priceAndButton">
                  <div className="price">
                    <p className="productPrice">{`₹ ${Math.round(
                      product.price * 80
                    )}`}</p>
                    <p className="productPriceDisc">
                      {<del> ₹ {Math.round(product.price * 80) * 1.5}</del>}
                    </p>
                  </div>
                  <div className="buttonPart">
                    <button className="button add">Add to Cart</button>
                    {/* <button className="button remove">Remove from Cart</button> */}
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default MainPage;
