import React from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { removeFromCart, increment, decrement } from '../redux/Sliece'


const ItemCard = ({ id, name, rating, price, Qty, img }) => {
  const disptach = useDispatch()
  return (

    <div className="w-full lg:h-[7vw] flex items-center p-2 relative rounded-lg mt-2 shadow-xl">
      <MdDelete onClick={() => {
        disptach(removeFromCart({ id, img, name, price, Qty }));
        toast(`${name} Removed!`, {
          icon: '👏',
        });
      }} className='text-2xl top-5 absolute right-2 cursor-pointer ' />
      <img
        src={img} alt="Pizza"
        className="h-full w-[30vw] lg:w-[7vw] object-fill rounded"
      />


      <div className="flex flex-col justify-between w-full pl-4">
        
        <h2 className="font-bold text-xl">{name}</h2>



        <div className="flex items-center justify-between w-full mt-1">
          <h2 className="tc font-semibold text-2xl">₹ {price}</h2>

          <div className="flex items-center gap-2">
            <FaMinus onClick={() => disptach(decrement({ id }))} className="border-2 text-red-400 w-6 h-6 rounded p-1 cursor-pointer hover:bg-red-400 hover:text-white" />
            <span className="font-medium">{Qty}</span>
            <FaPlus onClick={() => disptach(increment({ id }))} className="border-2 text-red-400 w-6 h-6 rounded p-1 cursor-pointer hover:bg-red-400 hover:text-white" />
          </div>
        </div>
      </div>
    </div>

  );
}

export default ItemCard;
