import React from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Flight from '../components/Flight';
import url from '../../assets/bg2.jpg';
function Home() {
    return (
        <div className="w-screeen">
            <div
                style={{
                    backgroundImage: `url(${url})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "550px",
                    width: "100vw",
                }}
            >
                <Header />
                <div className="relative">
                    <Nav />
                    <Flight />
                </div>
            </div>
        </div>
    )
}

export default Home