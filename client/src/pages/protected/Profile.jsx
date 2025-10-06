import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/AuthSlice";
import Nav from "../../components/Nav";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    profileImage: "https://i.pravatar.cc/150?img=12",
  });

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser({
        name: parsedUser.user.name,
        email: parsedUser.user.email,
        profileImage:
          parsedUser.profileImage || "https://i.pravatar.cc/150?img=12",
      });
    }
  }, []);

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-[40%] lg:w-[25%] bg-white shadow-md p-4 sm:p-6 flex-shrink-0">
          <div className="flex flex-col sm:flex-row md:flex-col items-center shadow-md p-5 rounded-xl sm:items-start md:items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-0 md:space-y-4">
            <img
              src={user.profileImage}
              alt="profile"
              className="w-20 h-20 sm:w-16 sm:h-16 rounded-full border object-cover"
            />
            <div className="text-center sm:text-left md:text-center ">
              <h2 className="text-base sm:text-sm font-semibold text-gray-800 break-words">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500 break-words">{user.email}</p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            <button
              onClick={() => navigate("/profile/myorders")}
              className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-100 text-gray-700 font-medium text-sm sm:text-base"
            >
              📦 My Orders
            </button>
            <button
              onClick={() => navigate("/profile/account-settings")}
              className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-100 text-gray-700 font-medium text-sm sm:text-base"
            >
              ⚙️ Account Settings
            </button>
            <button
              onClick={() => dispatch(logout())}
              className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-100 text-gray-700 font-medium text-sm sm:text-base"
            >
              🚪 Logout
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Profile;
