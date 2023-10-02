import { Outlet } from "react-router";
import Header from "./Header";
import { useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";

  if (isLoading) return <Loader />;

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
