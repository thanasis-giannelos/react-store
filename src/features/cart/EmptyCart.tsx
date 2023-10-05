import { Link } from "react-router-dom";
import { styled } from "styled-components";

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

const Button = styled.button`
  margin-top: 2rem;

  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;

  color: var(--color-brand-50);
  background-color: var(--color-brand-600);

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

function EmptyCart() {
  return (
    <StyledEmptyCard>
      <Container>
        <h4>Your Cart Is Empty</h4>
        <Button>
          <Link to="/products">Continue your shopping</Link>
        </Button>
      </Container>
    </StyledEmptyCard>
  );
}

export default EmptyCart;
