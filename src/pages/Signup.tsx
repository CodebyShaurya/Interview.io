import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function Signup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: any) => {
    e.preventDefault();
    setError("");
    const email = (
      document.getElementById("email") as HTMLInputElement
    )?.value.trim();
    const username = (
      document.getElementById("username") as HTMLInputElement
    )?.value.trim();
    const password = (
      document.getElementById("password") as HTMLInputElement
    )?.value.trim();
    if (!email || !username || !password) {
      return setError("All fields are required.");
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`,
        { email, username, password }
      );
      localStorage.setItem("userId", response.data.userId);
      navigate("/signin");
    } catch (error: any) {
      console.error(error);
      if (error.response) {
        if (error.response.status === 400) {
          setError(
            error.response.data.error ||
              "Invalid signup details (email and username should be unique)."
          );
        } else if (error.response.status === 500) {
          setError("A server error occurred. Please try again later.");
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
      } else {
        setError(
          "Unable to connect to the server. Please check your internet connection."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full h-screen items-center justify-center bg-gradient-to-r from-[#2f1d64] via-[#1b2a5c] to-[#2f1d64] ...">
      <div className="lg:w-[600px] md:w-[500px] w-[300px] bg-white shadow-sm shadow-black rounded-md p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-500">
          Create Your Account
        </h2>
        <form>
          {error && (
            <div className="text-red-600 text-center mb-4">{error}</div>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              type="email"
              placeholder="example@example.com"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="username"
              type="text"
              placeholder="Choose a username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              type="password"
              placeholder="Choose a password"
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-4">
            <button
              className={`${
                loading
                  ? "cursor-not-allowed bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  : "bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              } text-white font-bold py-2 px-4 rounded w-full shadow-lg flex items-center justify-center`}
              type="submit"
              onClick={handleSignup}
              disabled={loading}
            >
              {loading ? <ClipLoader size={24} color="#ffffff" /> : "Sign Up"}
            </button>
            <p className="text-sm text-gray-600">
              Already registered?{" "}
              <Link
                to="/login"
                className="text-purple-500 hover:text-purple-700 underline underline-offset-2"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
