import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setError("");
    const email = (
      document.getElementById("email") as HTMLInputElement
    )?.value.trim();
    const password = (
      document.getElementById("password") as HTMLInputElement
    )?.value.trim();
    if (!email || !password) {
      return setError("Please fill all the fields.");
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/signin`,
        { email, password }
      );
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error: any) {
      console.error(error);
      setError(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full h-screen items-center justify-center bg-gradient-to-r from-[#2f1d64] via-[#1b2a5c] to-[#2f1d64] ...">
      <div className="lg:w-[600px] md:w-[500px] w-[300px] bg-white shadow-sm shadow-black rounded-md p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-500">
          Welcome Back!
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
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              type="password"
              placeholder="Enter your password"
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
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? <ClipLoader size={24} color="#ffffff" /> : "Sign In"}
            </button>
            <p className="text-sm text-gray-600">
              If not already registered,{" "}
              <Link
                to="/signup"
                className="text-purple-500 hover:text-purple-700 underline underline-offset-2"
              >
                sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
