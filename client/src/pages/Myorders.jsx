import React from "react";
import { useSelector } from "react-redux";
import ItemCard from "../components/ItemCard";

function Myorders() {
  const cartItems = useSelector((state) => state.cart.cart);

  // Get user from localStorage
  const userData = localStorage.getItem("user");
  const parsedUser = userData ? JSON.parse(userData) : null;

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800">
        Welcome, {parsedUser?.user?.name || "User"} 👋
      </h1>
      <p className="mt-2 text-gray-600">
        Here you can manage your orders, check your cart, and update your account.
      </p>

      <div className="mt-6 bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          My Recent Orders
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">No orders yet.</p>
        ) : (
          <ul className="space-y-3">
            {cartItems.map((food) => (
              <li
                key={food.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <ItemCard
                  name={food.name}
                  price={food.price}
                  rating={food.rating}
                  img={food.img}
                  id={food.id}
                  Qty={food.Qty}
                />
              </li>
            ))}
          
          </ul>
        )}
      </div>
    </>
  );
}

export default Myorders;
