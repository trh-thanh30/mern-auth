import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email Address"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button
          disabled
          className="bg-slate-700 disabled:opacity-80 hover:opacity-95 text-white p-3 rounded-lg uppercase"
        >
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <span className="text-blue-500">
          <Link to={"/sign-in"}>Sign in</Link>
        </span>
      </div>
    </div>
  );
}
