import React from "react";
import { Link } from "react-router-dom";
import CartListItem from "./CartLIstItem";
import { clearCart, getCart, getTotalCartPrice } from "./cartSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import EmptyCart from "./EmptyCart";
import styled from "styled-components";

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

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;

  color: var(--color-brand-50);
  background-color: var(--color-brand-600);

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

const ClearCartButton = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;

  color: var(--color-red-100);
  background-color: var(--color-red-700);

  &:hover {
    background-color: var(--color-red-800);
  }
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
        <Button>
          <Link to="/order/new">CHECKOUT</Link>
        </Button>
        <ClearCartButton onClick={() => dispatch(clearCart())}>
          CLEAR CART
        </ClearCartButton>
      </CartActions>
    </StyledCart>
  );
};

export default Cart;
