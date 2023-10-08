import React from "react";
import { Link } from "react-router-dom";
import CartListItem from "./CartLIstItem";
import { clearCart, getCart, getTotalCartPrice } from "./cartSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import EmptyCart from "./EmptyCart";
import styled from "styled-components";
import Button from "../../ui/Button";

const StyledCart = styled.div`
  max-width: 110rem;
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto auto;
  gap: 2rem;

  @media (min-width: 600px) {
    grid-template-columns: auto 23rem;
    margin: 0 auto;
  }
`;
const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CartActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`;

const Cart: React.FC = () => {
  const cart = useAppSelector(getCart);
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector(getTotalCartPrice);

  if (!cart.length) return <EmptyCart />;

  return (
    <StyledCart>
      <CartList>
        {cart.map((item, index) => (
          <CartListItem key={index} item={item} />
        ))}
      </CartList>

      <CartActions>
        <Total>
          <span>Total:</span>
          <span>$ {totalPrice.toFixed(2)}</span>
        </Total>
        <Button variation="primary" size='large'>
          <Link to="/order/new">CHECKOUT</Link>
        </Button>
        <Button variation="danger" size='large' onClick={() => dispatch(clearCart())}>
          CLEAR CART
        </Button>
      </CartActions>
    </StyledCart>
  );
};

export default Cart;
