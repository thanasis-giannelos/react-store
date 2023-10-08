import { styled } from "styled-components";
import { useAppSelector } from "../../hooks/hooks";
import { Header } from "../../ui/Welcome";
import { getOrder } from "./orderSlice";
import { FlexContainer } from "../../ui/FlexContainer";
import { FlexCenteredWrapper } from "./SuccessfulOrder";

const FlexRow = styled.li`
  display: flex;
  justify-content: space-between;
`;

function Order() {
  const order = useAppSelector(getOrder);
  return (
    <FlexContainer>
      <FlexCenteredWrapper>
        <Header>Thank you!</Header>
        <Header>Order Confirmed</Header>
        <Header>Order Number: #{order?.id}</Header>
        <ul>
          {order?.cart.map((item, index) => {
            return (
              <FlexRow key={index}>
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
      </FlexCenteredWrapper>
    </FlexContainer>
  );
}

export default Order;
