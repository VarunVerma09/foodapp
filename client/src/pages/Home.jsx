import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import { HiH1 } from 'react-icons/hi2';
import Catagory from '../components/Catagory';
import Fooditems from './Fooditems';
import Cart from '../components/Cart';
import axios from 'axios';



const Home = () => {
   useEffect(()=>{
   const res = axios.get("/api/v1/auth/upload");
   console.log(res);
   
   })

    return (
       <>
       <Nav/>
       <Cart />
      
       <section className='px-10 pt-5  '>
      <h1 className='font-bold text-2xl text-gray-500'>{new Date().toUTCString().slice(0,17)}</h1>
      <h3 className='text-4xl font-bold tc'>Place Your Order</h3>
      <Catagory/>
      
      </section>
      <Fooditems/>
      
     

       </>
    );
}

export default Home;
