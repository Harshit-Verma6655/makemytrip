import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Flight from '../components/Flight';
import url from '../../assets/bg2.jpg';
import Offers from '../components/Offers';
import Footer from '../components/Footer';
import qr from '../../assets/qr.png';
import phn from '../../assets/dwnld.png';
import CommonNavbar from '../components/CommonNavbar';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import { useUserContext } from '../FlightContext/UserContext';
function Home() {
    let navigate = useNavigate();
    let [visible, setvisible] = useState(false);
    let { handleModal } = useUserContext();
    useEffect(() => {
        const handleScroll = () => {
            const position = 120;
            setvisible(window.scrollY >= position);
        }

        window.addEventListener('scroll', handleScroll)
    }, [])


    function handleFlight() {
        console.log("innerwidth", window.innerWidth);
        if (window.innerWidth < 640) {
            navigate("/searchFlight");
        }
    }

    return (
        <div className='w-screen justify-center flex bg-black'>

            <div className="w-full bg-[rgb(242,242,242)] max-w-[1600px]  ">
                <div
                    style={{
                        backgroundImage: `url(${url})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        height: "700px",

                    }}

                >

                    <Header handleModal={handleModal} />
                    {visible && <div className='fixed top-0 z-30 hidden sm:block'><CommonNavbar handleModal={handleModal} /></div>}
                    <div className="relative mb-2 ">
                        <Nav handleFlight={handleFlight} />
                        <div className='hidden w-full sm:top-[55px] sm:block absolute'>
                            <Flight />
                        </div>
                    </div>

                </div>

                <div className='mt-2 px-6 flex justify-center w-full'>
                    <img className='h-[40px] ' src='https://platforms.makemytrip.com/contents/66b7f04f-b0a5-404f-86f6-c543b7f08c46' />
                </div>

                <div className='w-full flex justify-center mt-4 '>
                    <div className='flex justify-between gap-6 p-10 bg-white shadow-lg rounded-lg'>
                        <div className='flex gap-4 flex-1'>
                            <img src={phn} className='w-[50px] h-[60px] rounded-lg' />
                            <div >
                                <h1 className='font-black flex gap-10'>

                                    Download App Now !
                                </h1>
                                <p className='text-gray-500 text-md'>Use code WELCOMEMMT and get FLAT 12% OFF*  on your first domestic flight booking</p>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-4 justify-end flex-1'>
                            <div>
                                <div className='bg-[url("https://imgak.mmtcdn.com/pwa_v3/pwa_mmt_ui_assets/app-sprite.webp")] w-[149px] h-[44px] mb-4 ' style={{ backgroundPosition: "-3px -55px", backgroundSize: "250px 250px", objectFit: "contain" }}></div>
                                <div className='bg-[url("https://imgak.mmtcdn.com/pwa_v3/pwa_mmt_ui_assets/app-sprite.webp")] w-[152px] h-[50px] ' style={{ backgroundPosition: "0px 0px", backgroundSize: "250px 250px", objectFit: "contain" }}></div></div>
                            <div ><img src={qr} className='h-[100px] w-[100px]' /></div>
                        </div>
                    </div>
                </div>
                <Offers />
                <Footer />
            </div>
        </div>
    )
}

export default Home