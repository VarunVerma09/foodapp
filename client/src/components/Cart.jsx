import React, { use, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ItemCard from "./ItemCard";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cart);

  const totalqty = cartItems.reduce(
    (total, item) => total + Number(item.Qty || 0),
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price) * Number(item.Qty || 0),
    0
  );

  const [show, setShow] = useState(false);
  const [Payment, setPayment] = useState(false);
  return (
    <>
      <div
        className={`fixed right-0 w-full  overflow-y-auto lg:w-[25%] top-0 h-[100%] bg-white z-20 ${
          show ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500`}
      >
        <div className="flex justify-between p-5 bg text-white">
          <h2>My Orders</h2>
          <span className="border-2 px-2 py-1 rounded-lg cursor-pointer hover:bg-white hover:text-red-400">
            <AiOutlineClose onClick={() => setShow(false)} />
          </span>
        </div>
        <div className="px-5">
          {" "}
          {cartItems.length > 0 ? (
            cartItems.map((food) => (
              <ItemCard
                key={food.id}
                name={food.name}
                price={food.price}
                rating={food.rating}
                img={food.img}
                id={food.id}
                Qty={food.Qty}
              />
            ))
          ) : (
            <h1 className="p-5 text-center text-xl">Cart is Empty</h1>
          )}
        </div>

        <div className="fixed bottom-0 w-full px-5 py-3 bg-white shadow-t">
          <h2 className="mb-3">
            Items: <span>{totalqty}</span>
          </h2>
          <h2 className="mb-3">
            Total: <span>₹{totalPrice}</span>
          </h2>

          {cartItems.length > 0 ? (
            <button
              onClick={() => setPayment(true)}
              className="px-4 py-2 w-full font-bold text-white bg rounded-lg cursor-pointer h"
            >
              Make Payment
            </button>
          ) : (
            <button className="px-4 py-2 w-full font-bold text-white bg rounded-lg cursor-pointer h">
              Make Payment
            </button>
          )}
        </div>
      </div>

      <FaShoppingCart
        onClick={() => setShow(!show)}
        className={`fixed bottom-4 right-4 text-white text-6xl bg rounded-full shadow-2xl px-3 py-1 cursor-pointer ${
          totalqty > 0 ? "animate-bounce delay-500 transition-all" : ""
        }`}
      />
      {Payment && (
        <div
          className={`fixed right-0 w-full overflow-y-auto lg:w-[25%] top-0 h-[100%] bg-white z-20 ${
            Payment ? "translate-x-0" : "translate-x-full"
          } transition-all duration-500`}
        >
          <div className="flex justify-between p-5 bg text-xl text-white font-bold">
            <h2>Payment Method</h2>
            <AiOutlineClose
              onClick={() => setPayment(false)}
              className="border p-1 text-3xl rounded-lg cursor-pointer"
            />
          </div>
          <div className="text-3xl text-center pt-5 font-bold ">
            Total Amount :{totalPrice}
          </div>
          <div className="px-5 fixed w-full bottom-2">
           
            <button onClick={()=>navigate("/")} className="px-4 py-2 w-full font-bold text-white bg rounded-lg cursor-pointer ">
              Make Payment
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
