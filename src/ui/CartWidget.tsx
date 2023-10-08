import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { getTotalCartQuantity } from "../features/cart/cartSlice";
import { useAppSelector } from "../hooks/hooks";
import { styled } from "styled-components";

const StyledCartWidget = styled.div`
  position: relative;
  /* border: 1px solid red; */
  flex-basis: 30px;
`

const Quantity = styled.div`
  background-color: red;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  right: 0;
`

const Icon = styled.span`
  display: inline-block;
`

function CartWidget(): JSX.Element {
  const totalQuantity = useAppSelector(getTotalCartQuantity);

  return (
    <StyledCartWidget>
      <Link to="cart">
        <Icon>
          <HiShoppingCart />
        </Icon>
        {totalQuantity > 0 && <Quantity></Quantity>}
      </Link>
    </StyledCartWidget>
  );
}
export default CartWidget;
