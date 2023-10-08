import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import UserWidget from "./UserWidget";
import CartWidget from "./CartWidget";

const HeaderBar = styled.header`
  color: var(--color-brand-600);
  background-color: var(--color-grey-200);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3rem;
  padding: 0.75rem 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const StyledLink = styled(Link)`
  font-weight: 800;
`;

const WidgetContainer = styled.div`
  display: flex;
  /* gap: rem; */
  font-size: 2rem;
  align-items: center;
  justify-content: space-between;
  width: 7rem;
`;

const Header: React.FC = () => {
  return (
    <HeaderBar>
      <StyledLink to="/">ReactStore</StyledLink>
      <WidgetContainer>
        <UserWidget />
        <CartWidget />
      </WidgetContainer>
    </HeaderBar>
  );
};

export default Header;
