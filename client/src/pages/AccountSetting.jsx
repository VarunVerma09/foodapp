import axios from "axios";
import { parse } from "dotenv";
import React, { useEffect } from "react";



function AccountSetting() {
 const userData = localStorage.getItem("user");
 const json = JSON.parse(userData);
 const api = () => {
 const userinfo = axios.get("http://localhost:8800/api/v1/auth/register").then(res => console.log(res)
  )
 }

 useEffect(()=>{
  api()
 },[])

console.log(json);

  return (
    <div className="bg-white w-full h-screen rounded-2xl shadow-lg p-15 ">
      <h1 className="text-center pb-10 font-bold tc text-5xl">Account Details</h1>
      <main className="flex flex-wrap gap-15">
        
      <section className=" flex gap-1">
        
        <input
          type="text"
          value="umang"
          className="border-1 border-gray-300 p-2 w-[50vw] md:w-[20vw] rounded-lg text-gray-400 "
          disabled
        />

        <button className="p-2 px-3 cursor-pointer rounded-lg w-[20vw] bg md:w-[8vw] text-white ">
          Edit
        </button>
      </section>
        <section className=" flex gap-1 ">
        <input
          type="text"
          value="umang@gmail.com"
          className="border-1 border-gray-300 p-2 w-[50vw] md:w-[20vw] rounded-lg text-gray-400 "
          disabled
        />

        <button className="p-2 px-3 cursor-pointer rounded-lg bg w-[20vw] bg md:w-[8vw] text-white ">
          Edit
        </button>
      </section>
        <section className=" flex gap-1 ">
        <input
          type="text"
          value="7830473709"
          className="border-1 border-gray-300 p-2 w-[50vw] md:w-[20vw] rounded-lg text-gray-400 "
          disabled
        />

        <button className="p-2 px-3 cursor-pointer rounded-lg bg w-[20vw] bg md:w-[8vw] text-white ">
          Edit
        </button>
      </section>
        <section className=" flex gap-1 ">
        <input
          type="text"
          value="Noida Sector 62"
          className="border-1 border-gray-300 p-2 w-[50vw] md:w-[20vw] rounded-lg text-gray-400 "
          disabled
        />

        <button className="p-2 px-3 cursor-pointer rounded-lg bg w-[20vw] bg md:w-[8vw] text-white ">
          Edit
        </button>
      </section>
       
      
      </main>
    </div>
  );
}

export default AccountSetting;
