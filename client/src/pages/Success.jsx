import React, { useEffect, useState } from 'react';
import { SyncLoader } from 'react-spinners';
import Nav from '../components/Nav';

const Success = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [])
    return (
        <>
        <Nav/>
        <div className='flex justify-center items-center flex-col h-screen'>

            {loading ? <SyncLoader  color="#ff0074"  /> : <div>
                <h2 className='text-3xl font-semibold mb-5 tc'>Oreder Successfull!</h2>
                <p className='mb-10'>Your order has been successfully placed</p>
                <a href="/" className='px-3 py-3 ml-15 rounded-2xl bg  text-white font-bold'>Go Back To Home</a>
            </div>}

            

        </div></>
    );
}

export default Success;
