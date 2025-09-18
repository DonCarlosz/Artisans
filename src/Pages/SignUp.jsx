import React, { useState } from "react";
import { asset } from "../Images/asset";
import { Link, useNavigate } from "react-router-dom";
import { Apple, Globe } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const SignUp = () => {
  const { signUp, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
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
    <div className="p-1 flex h-screen">
      {/* Left Side Image (hidden on small screens) */}
      <div className="hidden md:flex w-1/2">
        <img
          src={asset.SignImage}
          alt="Sign Up"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Form */}
      <div className="flex w-full md:w-1/2 justify-center items-center p-4 ">
        <form
          className="w-full max-w-md bg-white px-6 py-6 rounded-2xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-lg font-semibold mb-4">Create your account</h2>

          {/* Full Name */}
          <div className="mb-4">
            <p className="text-sm font-medium">Full Name</p>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <p className="text-sm font-medium">Email or Phone number</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email or phone number"
              className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-secondary outline-none"
            />
          </div>

          {/* Password */}
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
            className="w-full bg-secondary text-white py-2 text-sm rounded-lg hover:bg-blue-700 transition"
          >
            Continue
          </button>

          <p className="text-center mt-3 text-sm text-gray-600">
            Already have an account?{" "}
            <span className="text-blue-600 font-medium">
              <Link to="/login">Log in</Link>
            </span>
          </p>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Social Buttons */}
          <div className="space-y-3 text-sm">
            <button
              type="button"
              onClick={handleGoogle}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              <Globe size={20} />
              <span>Continue with Google</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
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

export default SignUp;
