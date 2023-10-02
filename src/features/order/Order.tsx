import { useAppSelector } from "../../hooks/hooks";
import { getOrder } from "./orderSlice";

function Order() {
  const order = useAppSelector(getOrder);
  return (
    <div>
      HERE IS YOUR ORDER
      {JSON.stringify(order)}
    </div>
  );
}

export default Order;
