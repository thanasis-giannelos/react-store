import { useAppDispatch } from "../../hooks/hooks";
import { CartItem, decrement, increment, removeFromCart } from "./cartSlice";

type CartItemProps = {
  item: CartItem;
};

const CartLIstItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const { id, img, name, quantity, unitPrice } = item;

  return (
    <li>
      <img height="140" src={img} alt="" />

      <p>{name}</p>
      <p>{id}</p>
      <p>$ {unitPrice}</p>
      <span>x {quantity}</span>
      <button onClick={() => dispatch(decrement(id))}>-</button>
      <button onClick={() => dispatch(increment(id))}>+</button>
      <button onClick={() => dispatch(removeFromCart(id))}>REMOVE</button>
    </li>
  );
};

export default CartLIstItem;
