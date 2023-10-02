import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { getTotalCartQuantity } from "../features/cart/cartSlice";
import { useAppSelector } from "../hooks/hooks";
import { getUser } from "../features/user/userSlice";

const Header: React.FC = () => {
  const totalQuantity = useAppSelector(getTotalCartQuantity);
  const username = useAppSelector(getUser);
  return (
    <header style={{ border: "3px solid red" }}>
      <Logo />
      <Link to="#">{username}</Link>
      <span>{totalQuantity}</span>
      <Link to="cart">CART</Link>
    </header>
  );
};

export default Header;
