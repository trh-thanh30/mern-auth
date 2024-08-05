import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Signup() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      setError(null);
      e.preventDefault();
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (!res.ok) {
        setError(data.message);
      }
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChanges}
        />
        <input
          type="text"
          placeholder="Email Address"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChanges}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChanges}
        />

        <button
          disabled={loading}
          className="bg-slate-700 disabled:opacity-85  hover:opacity-95 text-white p-3 rounded-lg uppercase"
        >
          {loading ? "Loading..." : "Sign up"}
        </button>
        {error && (
          <p className="text-red-500 my-1 bg-red-50 p-2 text-center text-sm">
            {error}
          </p>
        )}
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
