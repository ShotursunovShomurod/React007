import React from 'react';
import Error from '../../assets/image.png'
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className="text-center container mx-auto">
        <img className='inline-block w-full mx-auto h-[600px]' src={Error} alt="" />
        <button className='border p-3 font-bold cursor-pointer' onClick={()=> navigate("/")}>Go Home</button>
    </div>
  );
}

export default NotFound;
