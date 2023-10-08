import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { getOrder } from "./orderSlice";
import { Header } from "../../ui/Welcome";
import { styled } from "styled-components";
import Button from "../../ui/Button";
import { FlexContainer } from "../../ui/FlexContainer";
import { CenteredWrapper } from "../../ui/CenteredWrapper";

export const FlexCenteredWrapper = styled(CenteredWrapper)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function SuccessfulOrder() {
  const order = useAppSelector(getOrder);

  return (
    <FlexContainer>
      <FlexCenteredWrapper>
        <Header>Your Order Submitted Successfully!</Header>
        <Button variation="primary" size='large'>
          <Link to={`/order/${order?.id}`}>SHOW ORDER</Link>
        </Button>
      </FlexCenteredWrapper>
    </FlexContainer>
  );
}

export default SuccessfulOrder;
