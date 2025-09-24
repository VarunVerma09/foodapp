import React from 'react';
import { IoIosStar } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Sliece';

const Foodcard = ({id,img,price,desc,name,rating , handleToast}) => {
  const usedispatch = useDispatch()
    return (
        <section className='flex flex-col  lg:flex-row  sm:p-2 mt-8  items-center py-4'>
  <div className='flex flex-col h-120 w-full sm:w-3/4 md:w-1/2 lg:w-[20vw] px-3 bg-white rounded-lg pt-5 shadow-2xl m-2'>
    
    {/* Image */}
    <img 
      src={img} 
      alt={name} 
      className='w-full object-fill h-60 rounded p-10'
    />

    {/* Name & Price */}
    <div className='flex justify-between px-5 pt-2 items-center'>
      <h3 className='text-xl font-bold truncate'> {(name || "").slice(0,10) + "..."}</h3>
      <span className='text-xl tc font-bold'>₹ {price}</span>
    </div>

    {/* Description */}
    <p className='w-full px-5 pt-3 text-gray-700'>
      {(desc || "").slice(0,100) + "..."}
    </p>

    {/* Rating & Button */}
    <div className="flex justify-between items-center px-5 py-3">
      <h3 className="flex items-center gap-1">
        <IoIosStar className="text-yellow-500 text-xl" />
        <span>{rating}</span>
      </h3>
      <button onClick={()=>{usedispatch(addToCart({id,name,price,rating,price,Qty:1,img}));
    handleToast(name);

    }} className="px-4 py-1 bg text-white rounded font-bold cursor-pointer transition">
        Add To Cart
      </button>
    </div>

  </div>
</section>

    );
}

export default Foodcard;
