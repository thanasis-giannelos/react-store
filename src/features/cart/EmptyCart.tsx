import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Button from "../../ui/Button";

const StyledEmptyCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  text-align: center;
`;

function EmptyCart() {
  return (
    <StyledEmptyCard>
      <Container>
        <h4>Your Cart Is Empty</h4>
        <Button variation="primary" size='large'>
          <Link to="/products">Continue your shopping</Link>
        </Button>
      </Container>
    </StyledEmptyCard>
  );
}

export default EmptyCart;
