import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import { useState } from "react";
import { Order, createOrder, getOrder } from "./orderSlice";
import { Link } from "react-router-dom";
import { getUser } from "../user/userSlice";

function CreateOrder() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const cart = useAppSelector(getCart);
  const order = useAppSelector(getOrder);
  const price = useAppSelector(getTotalCartPrice);
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newOrder: Order = {
      id: `${new Date().getSeconds()}`,
      status: "pending",
      price,
      estimatedDeliveryTime: new Date().setTime(
        new Date().getTime() + 40 * 60 * 1000
      ),
      username: name,
      phone: phone,
      address: address,
      cart,
    };
    dispatch(createOrder(newOrder));
    dispatch(clearCart());
  }

  if (order) {
    return (
      <div>
        <h3>Your Order Submitted Successfully!</h3>
        <Link to={`/order/${order.id}`}>Show Order</Link>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={user}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">SUBMIT ORDER</button>
      </form>
    </div>
  );
}

export default CreateOrder;
