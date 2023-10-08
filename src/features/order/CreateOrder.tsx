import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import { useState } from "react";
import { Order, createOrder, getOrder } from "./orderSlice";
import { getUser } from "../user/userSlice";
import {
  Header,
  Input,
  Form,
  InputGroup,
} from "../../ui/Welcome";
import { FlexContainer } from "../../ui/FlexContainer";
import SuccessfulOrder from "./SuccessfulOrder";
import Button from "../../ui/Button";
import { CenteredWrapper } from "../../ui/CenteredWrapper";

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
    return <SuccessfulOrder />;
  }

  return (
    <FlexContainer>
      <CenteredWrapper>
        <Header>For Your Order</Header>
        <Form onSubmit={(e) => onSubmit(e)}>
          <InputGroup>
            <label htmlFor="">Name</label>
            <Input
              type="text"
              name="name"
              defaultValue={user}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="">Phone</label>
            <Input
              type="text"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="">Address</label>
            <Input
              type="text"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </InputGroup>
          <Button variation="primary" size='large' type="submit">SUBMIT ORDER</Button>
        </Form>
      </CenteredWrapper>
    </FlexContainer>
  );
}

export default CreateOrder;
