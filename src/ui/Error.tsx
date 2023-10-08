import { Link, useRouteError } from "react-router-dom";
import { styled } from "styled-components";
// import LinkButton from "./LinkButton";

const StyledError = styled.div`
width: 50%;
  margin: 5rem auto;
`

function Error() {
  const error = useRouteError();
  console.log("Error: ", error);

  return (
    <StyledError>
      <h1>Something went wrong</h1>
      <Link to={'..'}>&larr; Go back</Link>
    </StyledError>
  );
}

export default Error;
