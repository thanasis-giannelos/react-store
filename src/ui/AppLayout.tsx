import { Outlet } from "react-router";
import { useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import styled from "styled-components";

const Main = styled.main`
  padding: 0.75rem 1rem;
`;

function AppLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";

  if (isLoading) return <Loader />;

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default AppLayout;
