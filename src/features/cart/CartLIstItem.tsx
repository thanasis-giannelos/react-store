import { styled } from "styled-components";
import { useAppDispatch } from "../../hooks/hooks";
import { CartItem, decrement, increment, removeFromCart } from "./cartSlice";
import Button from "../../ui/Button";

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
          <Button variation="primary" size='medium' onClick={() => dispatch(decrement(id))}>-</Button>
          <span>{quantity}</span>
          <Button variation="primary" size='medium' onClick={() => dispatch(increment(id))}>+</Button>
          <Button variation="danger" size='medium' onClick={() => dispatch(removeFromCart(id))}>X</Button>
        </CartItemBtns>
      </CartItemContent>
    </StyledCartListItem>
  );
};

export default CartLIstItem;
