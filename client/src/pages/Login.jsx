import React from "react";
import axios from "axios";
import { login } from "../redux/AuthSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:8800/api/v1/auth/login", data);

      
      localStorage.setItem("user", JSON.stringify(res.data));
      console.log("User logged in:", res.data);

      dispatch(login(res.data));

    
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <a href="/register" className="text-red-600 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
