import React from "react";
import { Link } from "react-router-dom";
import Product from "./product";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import {
  CartItem,
  addToCart,
  decrement,
  increment,
  removeFromCart,
} from "../cart/cartSlice";

type ProductListItemProps = {
  item: Product;
};

const ProductListItem: React.FC<ProductListItemProps> = ({ item }) => {
  const { id, title, thumbnail, price, rating } = item;
  const dispatch = useDispatch<AppDispatch>();

  function addToCartHandler() {
    const newCartItem: CartItem = {
      id: id,
      img: thumbnail,
      name: title,
      quantity: 1,
      unitPrice: price,
      totalPrice: 0,
    };
    dispatch(addToCart(newCartItem));
  }

  return (
    <li>
      <Link to={`${id}`}>
        <img src={thumbnail} alt="" />
        <div>
          <p>{title}</p>
          <p>{price}</p>
          <p>{rating}</p>
        </div>
      </Link>
      <button onClick={addToCartHandler}>ADD TO CART</button>
      <button onClick={() => dispatch(decrement(id))}>-</button>
      <button onClick={() => dispatch(increment(id))}>+</button>
      <button onClick={() => dispatch(removeFromCart(id))}>REMOVE</button>
    </li>
  );
};

export default ProductListItem;
