import React from "react";
import { Link } from "react-router-dom";
import CartListItem from "./CartLIstItem";
import { clearCart, getCart, getTotalCartPrice } from "./cartSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import EmptyCart from "./EmptyCart";

const Cart: React.FC = () => {
  const cart = useAppSelector(getCart);
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector(getTotalCartPrice);

  if (!cart.length) return <EmptyCart />;

  return (
    <div>
      <p>Total: $ {totalPrice.toFixed(2)}</p>

      <ul>
        {cart.map((item, index) => (
          <CartListItem key={index} item={item} />
        ))}
      </ul>

      <Link to="/order/new">CHECKOUT</Link>
      <button onClick={() => dispatch(clearCart())}>CLEAR CART</button>
    </div>
  );
};

export default Cart;
