import { createBrowserRouter } from "react-router-dom";
import Cart from "../features/cart/Cart";
// import ProductDetails from "../features/products/ProductDetails";
import AppLayout from "../ui/AppLayout";
import Welcome from "../ui/Welcome";
import ProductsList, {
  loader as productsLoader,
} from "../features/products/ProductsList";
// import { loader as productLoader } from "../features/products/ProductDetails";
import Error from "../ui/Error";
import CreateOrder from "../features/order/CreateOrder";
import Order from "../features/order/Order";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Welcome /> },
      { path: "/products", element: <ProductsList />, loader: productsLoader },
      // {
      //   path: "/products/:productId",
      //   element: <ProductDetails />,
      //   loader: productLoader,
      // },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      { path: "/order/:orderId", element: <Order /> },
    ],
  },
]);
