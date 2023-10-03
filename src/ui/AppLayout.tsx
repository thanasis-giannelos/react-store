import { Outlet } from "react-router";
import { useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";

  if (isLoading) return <Loader />;

  return (
    <>
      <Header />
      <main className="p-3">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
