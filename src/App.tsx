import { RouterProvider } from "react-router";
import { router } from "./router/router";
import { GlobalStyles } from "./styles/GlobalStyles";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />;
    </>
  );
};
