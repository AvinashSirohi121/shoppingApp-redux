import React , {useState, useEffect} from "react";
import "../CSS/Cart.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const CartPage = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(  cart.reduce((acc,curr)=>acc+curr.price,0) );
  },[cart])

  const addToCart = () =>{

  }


  return (
    <div className="cartPage">
      {cart && cart.length > 0 ? (
        <div className="cartPageinner">
          <div className="shoppingCart">
            {
              cart.map((item, index)=>(
                <CartItem item={item} key={index} itemIndex={index}/>
              ))
            }
          </div>
          <div className="summary">
            <p className="summaryHeading1">Your Cart</p>
            <h2 className="summaryHeading1">Summary</h2>
            <br></br>
            <br></br>
            <p>
              Total Items : <b>{`${cart.length}`}</b>
            </p>
            <p>
              Total Amount : <b>{`₹ ${Math.round(totalAmount * 80)} `} </b>
            </p>
            <button className="cartButton">Checkout Now</button>
          </div>
        </div>
      ) : (
        <div className="empty">
          <h2 className="emptyCartMessage">Cart is Empty</h2>
          <Link to="/" >
            <button className="cartButton">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
