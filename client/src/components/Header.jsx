import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  return (
    <div className="bg-slate-200">
      <div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
        <Link to={"/"}>
          <h1 className="font-bold">Auth App</h1>
        </Link>
        <ul className="flex items-center gap-4">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                alt="profile"
                src={currentUser.profilePicture}
                className="object-cover rounded-full w-7 h-7"
              ></img>
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
