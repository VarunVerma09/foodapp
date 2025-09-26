import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

 
  const user = {
    name: "Varun Verma",
    email: "umangsoni409@gmail.com",
    profileImage: "https://i.pravatar.cc/150?img=12",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-[40%] lg:w-[25%]  bg-white shadow-md p-6">
        <div className="flex items-center space-x-4">
          <img
            src={user.profileImage}
            alt="profile"
            className="w-16 h-16 rounded-full border object-cover"
          />
          <div>
            <h2 className="text-sm font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-sm hidden lg:block text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <button
            onClick={() => navigate("/")}
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-100 text-gray-700 font-medium"
          >
            📦 My Orders
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-100 text-gray-700 font-medium"
            
          >
            🛒 My Cart
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-100 text-gray-700 font-medium"
          >
            ⚙️ Account Settings
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-100 text-gray-700 font-medium"
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800">Welcome, {user.name} 👋</h1>
        <p className="mt-2 text-gray-600">
          Here you can manage your orders, check your cart, and update your account.
        </p>

        {/* Example Section (You can make routes for these pages) */}
        <div className="mt-6 bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">My Recent Orders</h2>
          <ul className="space-y-3">
            <li className="flex justify-between items-center border-b pb-2">
              <span></span>
              <span className="text-sm text-green-600"></span>
            </li>
        
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
