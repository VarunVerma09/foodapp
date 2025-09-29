import React from 'react';
import Foodcard from '../components/Foodcard';
import FoodData from '../data/FoodData.js'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Fooditems = () => {
    const category = useSelector((state)=> state.category.category);
    const search = useSelector((state)=>state.search.search);
const handleToast = (name) =>{
    toast.success(`Added ${name} To Cart`)
}

    return (
        <><Toaster
            position="top-center"
            reverseOrder={false}
        />
            <div className='flex flex-wrap justify-evenly px-10'>
                {FoodData.filter((food)=>{
                    if(category === "All"){
                        return food.name.toLowerCase().includes(search.toLowerCase());
                    }else{
                        
                   return  category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
                                       }
                }).map((food)=>(<Foodcard key={food.id}
                        id={food.id}
                        img={food.img}
                        name={food.name}
                        price={food.price}
                        desc={food.desc}
                        rating={food.rating}
                        handleToast={handleToast} />)
                    
                )
                }
            </div>
    
        </>
    )};
   

export default Fooditems;
