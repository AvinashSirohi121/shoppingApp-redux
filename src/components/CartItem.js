import React from "react";
import { MdDelete } from "react-icons/md";
import { remove } from "../redux/Slices/cartSlice";
import { useDispatch } from "react-redux";
import "../CSS/CartItem.css";
import { toast } from "react-toastify";
const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Product removed from Cart", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      theme: "colored",
    });
  };
  return (
    <div className="cartItems">
      <div className="cartItem">
        <div className="cartItemImage">
          <img src={item.image} />
        </div>
        <div className="cartItemDesc">
          <h1 className="cartItemTitle">{item.title}</h1>
          <h1 className="cartItemDescription">{`${item.description.slice(
            0,
            120
          )}...`}</h1>
          <div className="cartItemLower">
            <p className="cartItemPrice">{`₹ ${Math.round(
              item.price * 80
            )}`}</p>

            <div className="cartItemDelete">
              <MdDelete
                className="deleteItem"
                onClick={() => removeFromCart(item)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
