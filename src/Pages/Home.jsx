import React from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Flight from '../components/Flight';
import url from '../../assets/bg2.jpg';
import Offers from '../components/Offers';
import Footer from '../components/Footer';
function Home() {
    return (
        <div className='w-screen justify-center flex bg-black'>
            <div className="w-screeen bg-[rgb(242,242,242)] max-w-[1600px]  ">
                <div
                    style={{
                        backgroundImage: `url(${url})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        height: "750px",
                        width: "100%",
                    }}

                >
                    <Header />
                    <div className="relative  ">
                        <Nav />
                        <div className='hidden w-full sm:top-[55px] sm:block absolute'>
                            <Flight />
                        </div>
                    </div>

                </div>
                <div className='sm:hidden'><Flight /></div>

                <Offers />
                <Footer />
            </div>
        </div>
    )
}

export default Home