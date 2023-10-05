import { styled } from "styled-components";
import { useAppDispatch } from "../../hooks/hooks";
import { CartItem, decrement, increment, removeFromCart } from "./cartSlice";

const StyledCartListItem = styled.li`
  display: flex;
`;

const ImgContainer = styled.div`
  width: 33%;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const CartItemContent = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartItemInfo = styled.div``;
const CartItemBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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

type CartItemProps = {
  item: CartItem;
};

const CartLIstItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { id, img, name, quantity, unitPrice } = item;

  return (
    <StyledCartListItem>
      <ImgContainer>
        <Img src={img} alt="" />
      </ImgContainer>

      <CartItemContent>
        <CartItemInfo>
          <p>{name}</p>
          <p>$ {unitPrice}</p>
        </CartItemInfo>
        <CartItemBtns>
          <Button onClick={() => dispatch(decrement(id))}>-</Button>
          <span>{quantity}</span>
          <Button onClick={() => dispatch(increment(id))}>+</Button>
          <Button onClick={() => dispatch(removeFromCart(id))}>X</Button>
        </CartItemBtns>
      </CartItemContent>
    </StyledCartListItem>
  );
};

export default CartLIstItem;
