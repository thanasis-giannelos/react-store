import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { getTotalCartQuantity } from "../features/cart/cartSlice";
import { useAppSelector } from "../hooks/hooks";

function CartWidget(): JSX.Element {
  const totalQuantity = useAppSelector(getTotalCartQuantity);

  return (
    <div>
      <Link to="cart">
        <span>
          <HiShoppingCart />
        </span>
        <span>{totalQuantity}</span>
      </Link>
    </div>
  );
}
export default CartWidget;
