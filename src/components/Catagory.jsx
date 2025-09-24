import React, { useEffect, useState } from 'react';
import FoodData from '../data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/CategorySlice';

const Category = () => {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const uniqueCategories = [...new Set(FoodData.map(food => food.category))];
        setCategories(uniqueCategories);
    }, []);
    const selectCategory = useSelector((state) => state.category.category)

    return (
        <div className='flex mt-5 gap-2'>

            <button
                onClick={() => dispatch(setCategory("All"))}
                className={`border-2 border-gray-100  px-3 py-1 rounded-lg cursor-pointer text-gray-500 hover:bg-red-400 hover:text-white font-bold text-gray-5 ${selectCategory === "All" && "bg-red-400 text-white"}`}
            >
                All
            </button>

            {categories.map((item, index) => (
                <button
                    key={index}
                    onClick={() => dispatch(setCategory(item))}
                    className={`border-2 border-gray-100 px-3 py-1 rounded-lg cursor-pointer hover:bg-red-400 hover:text-white font-bold text-gray-500 ${selectCategory === item ? "bg-red-400 text-white" : ""
                        }`}
                >
                    {item}
                </button>
            ))}

        </div>
    );
}

export default Category;
