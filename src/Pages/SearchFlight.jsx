import React from 'react'
import Flight from '../components/Flight'
import url from '../../assets/bg2.jpg';
function SearchFlight() {
    return (
        <div className={` flex flex-col justify-center  h-[100vh] bg-contain `} style={{ backgroundImage: `url(${url})`, }}>

            <div className='sm:hidden  '><Flight /></div>
        </div>
    )
}

export default SearchFlight