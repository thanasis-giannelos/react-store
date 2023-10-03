import React from "react";
import { Link } from "react-router-dom";
import { getTotalCartQuantity } from "../features/cart/cartSlice";
import { getUser } from "../features/user/userSlice";
import { useAppSelector } from "../hooks/hooks";

const Header: React.FC = () => {
  const totalQuantity = useAppSelector(getTotalCartQuantity);
  const username = useAppSelector(getUser);
  return (
    <header className="flex justify-between p-3 bg-yellow-500">
      <Link to="/">ReactStore</Link>
      <div>
        <Link to="#">{username}</Link>
        <Link to="cart">CART</Link>
        <span className="text-yellow-500">{totalQuantity}</span>
      </div>
    </header>
  );
};

export default Header;
