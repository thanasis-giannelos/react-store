import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { getOrder } from "./orderSlice";
import { StyledWelcome, Header, Button } from "../../ui/Welcome";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function SuccessfulOrder() {
  const order = useAppSelector(getOrder);

  return (
    <StyledWelcome>
      <Wrapper>
        <Header>Your Order Submitted Successfully!</Header>
        <Button>
          <Link to={`/order/${order?.id}`}>SHOW ORDER</Link>
        </Button>
      </Wrapper>
    </StyledWelcome>
  );

  // return (
  //   <div>
  //     <h3>Your Order Submitted Successfully!</h3>
  //     <Link to={`/order/${order?.id}`}>Show Order</Link>
  //   </div>
  // );
}

export default SuccessfulOrder;
