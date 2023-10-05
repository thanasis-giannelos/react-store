import { TailSpin } from "react-loader-spinner";
import { styled } from "styled-components";

const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Loader() {
  return (
    <StyledLoader>
      <TailSpin
        height="80"
        width="80"
        color="#4f46e5"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </StyledLoader>
  );
}

export default Loader;
