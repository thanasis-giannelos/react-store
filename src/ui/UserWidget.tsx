import { HiUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import { getUser } from "../features/user/userSlice";
import { useAppSelector } from "../hooks/hooks";

function UserWidget() {
  const username = useAppSelector(getUser);

  return (
    <div>
      <Link to="#">{username ? <span>{username}</span> : <HiUser />}</Link>
    </div>
  );
}

export default UserWidget;
