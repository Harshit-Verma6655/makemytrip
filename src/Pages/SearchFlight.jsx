import React from 'react'
import Flight from '../components/Flight'
import url from '../../assets/bg2.jpg';
import { useNavigate } from 'react-router-dom';
function SearchFlight() {
    let navigate = useNavigate();
    return (
        <div className={` flex flex-col justify-center  h-[100vh] bg-contain text-white `} style={{ backgroundImage: `url(${url})`, }}>
            <button className='pl-4 text-2xl font-bold px-4 bg-black w-fit' onClick={() => navigate("/")}> Back</button>
            <div className='sm:hidden  '><Flight /></div>
        </div>
    )
}

export default SearchFlight