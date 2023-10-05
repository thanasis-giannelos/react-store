import { styled } from "styled-components";
import { useAppSelector } from "../../hooks/hooks";
import { StyledWelcome, Header } from "../../ui/Welcome";
import { Wrapper } from "./SuccessfulOrder";
import { getOrder } from "./orderSlice";

const FlexRow = styled.li`
  display: flex;
  justify-content: space-between;
`;

function Order() {
  const order = useAppSelector(getOrder);
  return (
    <StyledWelcome>
      <Wrapper>
        <Header>Thank you!</Header>
        <Header>Order Confirmed</Header>
        <Header>Order Number: #{order?.id}</Header>
        <ul>
          {order?.cart.map((item) => {
            return (
              <FlexRow>
                <span>
                  {item.quantity} {item.name}
                </span>
                <span>${item.totalPrice}</span>
              </FlexRow>
            );
          })}
        </ul>
        <FlexRow>
          <span>Total:</span>
          <span>${order?.price}</span>
        </FlexRow>
      </Wrapper>
    </StyledWelcome>
  );
}

export default Order;
