import { useSelector } from "react-redux";
export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser?.rest.profilePicture}
          alt="profile"
          className="self-center object-cover w-24 h-24 mt-2 rounded-full cursor-pointer"
        />
        <input
          defaultValue={currentUser?.rest.username}
          type="text"
          id="username"
          placeholder="Username"
          className="p-3 rounded-lg bg-slate-100"
        />
        <input
          defaultValue={currentUser?.rest.email}
          type="email"
          id="email"
          placeholder="Email"
          className="p-3 rounded-lg bg-slate-100"
        />
        <input
          type="password"
          id="password"
          placeholder="Passwprd"
          className="p-3 rounded-lg bg-slate-100"
        />
        <button className="p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-95 disabled:opacity-85">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-500 cursor-pointer">Delete Account</span>
        <span className="text-red-500 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}
