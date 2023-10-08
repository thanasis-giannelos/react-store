import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getUser, authenticateUser, User } from "../features/user/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { FlexContainer } from "./FlexContainer";
import { CenteredWrapper } from "./CenteredWrapper";

export const Header = styled.h2`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

function Welcome() {
  const [username, setUsername] = useState("sakis");
  const [password, setPassword] = useState("sakis");
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const user: User = { name: username, password: password };
    dispatch(authenticateUser(user));
    navigate("/products");
  }

  if (user) return <Navigate to="/products" />;

  return (
    <FlexContainer>
      <CenteredWrapper>
        <Header>ReactStore</Header>
        <Form onSubmit={(e) => onSubmit(e)}>
          <InputGroup>
            <label htmlFor="">Name</label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <Button size='large' variation='primary' type="submit">Start Shopping</Button>
        </Form>
      </CenteredWrapper>
    </FlexContainer>
  );
}

export default Welcome;
