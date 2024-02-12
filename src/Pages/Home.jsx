import React from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Flight from '../components/Flight';
function Home() {
    return (
        <div className="w-screeen">
            <div
                style={{
                    backgroundImage: "url('../../assets/bg2.jpg')",
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