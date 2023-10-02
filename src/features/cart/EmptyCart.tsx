import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div>
      <h4>Your Cart Is Empty</h4>
      <Link to="/products">Continue with your shopping</Link>
    </div>
  );
}

export default EmptyCart;
