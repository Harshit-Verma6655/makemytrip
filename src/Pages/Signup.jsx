import React, { useState } from 'react'
import { IoCloseCircle } from "react-icons/io5";

import SignupAPI from '../APIs/SignupAPI';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../FlightContext/UserContext';

function Signup({ handleModal }) {
    const navigate = useNavigate("/");
    const { setUser } = useUserContext();
    function handleSumit(e) {
        e.preventDefault();
        let userData = { "name": e.target[0].value, "email": e.target[1].value, "password": e.target[2].value }
        console.log("event", userData);

        SignupAPI(userData).then((result) => {
            console.log(result);

            if (result.status === "success") {
                userData.token = result.token;
                setUser(userData);
                alert("logged");
                handleModal("");
            } else {
                alert(result.message);
            }

        });


    }
    return (
        <div className='w-[100vw] h-[100vh] z-50 flex justify-center items-center fixed top-0  '
            style={{ background: "rgba(0,0,0,0.5)" }}
        >
            <div className='flex w-full mx-8 justify-center z-10 '>
                <div className='bg-[url("https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] hidden sm:block shadow-md w-[500px] bg-center' style={{ backgroundSize: "cover" }}>

                </div>
                <div className='sm:w-[510px] bg-white w-full   sm:h-[520px] relative flex flex-col gap-4 justify-center items-center shadow-lg px-[30px] pt-[50px] pb-[30px]'>
                    <button className='absolute -top-6 text-3xl  text-black -right-6 '
                        onClick={handleModal}
                    >
                        <IoCloseCircle />

                    </button>
                    <div className='flex bg-white shadow-lg sm:flex-row flex-col sm:rounded-full p-2  items-center gap-6'>
                        <h1 className='gradient p-2 rounded-full font-bold text-white'>PERSONAL ACCOUNT</h1>
                        <h1 className='mx-2  font-black'>MYBIZZACCOUNT</h1>
                    </div>
                    <form className='flex flex-col items-center w-full' onSubmit={(e) => handleSumit(e)}>
                        <label className='mt-4 text-center w-full font-semibold '>
                            Name<br />
                            <input type='text' name='name' className='border-2 w-full  outline-none mt-2 rounded' placeholder=' Enter name' required />
                        </label>
                        <label className='mt-4 text-center w-full font-semibold'>
                            Email<br />
                            <input type='email' name='email' className='border-2 w-full outline-none mt-2 rounded' placeholder=' Enter email' required />
                        </label>
                        <label className='my-4 text-center w-full font-semibold'>
                            Password<br />
                            <input type='password' name='password' className='border-2 w-full outline-none mt-2 rounded' placeholder=' Enter password' required />
                        </label>
                        <button className='bg-gray-300 px-4 w-full rounded-full py-1 mt-4  font-bold text-white hover:bg-gray-500 '>Continue</button>
                        <h1>Already have Account? <span className='text-blue-700 cursor-pointer'

                            onClick={() => handleModal("login")}
                        >Log in</span></h1>
                        <h1> <span className='text-blue-700 cursor-pointer'

                            onClick={() => handleModal("login")}
                        >Guest Log in</span></h1>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Signup