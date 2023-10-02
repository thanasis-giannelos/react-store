import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getUser, setUser } from "../features/user/userSlice";
import { Navigate, useNavigate } from "react-router-dom";

function Welcome() {
  const [userName, setUserName] = useState("");
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(setUser(userName));
    navigate("/products");
  }

  if (user) return <Navigate to="/products" />;

  return (
    <div>
      <h2>Welcome to ReactStore</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Introduce yourself"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Start Shopping</button>
      </form>
    </div>
  );
}

export default Welcome;
