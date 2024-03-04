import React from 'react'
import { useUserContext } from '../FlightContext/UserContext'

function Logout() {
    let { removeUser } = useUserContext();
    return (
        <div className='absolute z-50 top-8 sm:-left-8 backdrop-filter -left-10   text-center shadow p-1   h-[100px] w-[160px]  sm:w-[205px]'>
            <ul>
                <button className='text-gray-700 text-lg w-full font-black p-2 border-b-2 hover:bg-blue-200'
                    onClick={() => {
                        removeUser();
                    }}
                >Log out</button>
            </ul>


        </div>
    )
}

export default Logout