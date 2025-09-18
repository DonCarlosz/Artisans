import React, { useState } from "react";
import { asset } from "../Images/asset";
import { Link, useNavigate } from "react-router-dom";
import { Apple, Globe } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex h-screen p-1">
      <div className="hidden md:flex w-1/2 h-full">
        <img
          src={asset.login}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex w-full md:w-1/2 justify-center items-center p-6">
        <form
          className="w-full max-w-md bg-white px-6 rounded-2xl shadow-lg py-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-lg font-semibold mb-2">Log in to your account</h2>

          <div className="mb-4">
            <p className="text-sm font-medium">Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-secondary outline-none"
            />
          </div>

          <div className="mb-4">
            <p className="text-sm font-medium">Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-secondary outline-none"
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-secondary text-white py-2 text-sm rounded-lg hover:bg-blue-700"
          >
            Log In
          </button>

          <p className="text-center mt-2 text-sm text-gray-600">
            Don’t have an account?{" "}
            <span className="text-blue-600 font-medium">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>

          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div className="space-y-3 text-sm">
            <button
              type="button"
              onClick={handleGoogle}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100"
            >
              <Globe size={20} />
              <span>Continue with Google</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100"
            >
              <Apple size={20} />
              <span>Continue with Apple</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
