import React, { useEffect, useState } from 'react'
import { OfferAPI } from '../APIs/OfferAPI'
function FlightOffers() {
    const [offers, setOffers] = useState();
    useEffect(() => {
        OfferAPI({ "type": "FLIGHTS" }).then((data) => {
            console.log("FLIGHT offers", data.data.offers);
            setOffers(data.data.offers);
        })


    }, [])


    return (
        <div className='z-90 bg-white mb-2  overflow-scroll scroll-hide w-full'>
            <div className='py-4 px-2 flex sm:w-[900px] w-screen overflow-scroll gap-2 scroll-hide ' >
                {offers?.map((obj, index) => {
                    return (
                        <div key={index} className='flex h-[100px] min-w-[280px] p-2 flex-col justify-between bg-white shadow-lg rounded-xl'>
                            <div className='flex  gap-4 mb-4 '>
                                <div className='flex-2' >
                                    <img src={obj?.heroUrl} className='min-w-[50px] w-[100px]  text-white text-bottom h-[80px]  bg-cover  rounded-2xl' />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-xs mb-2 text-gray-700'>
                                        {obj?.pTl}
                                    </p>

                                    <h2 className='text-[10px] text-left text-gray-500'>
                                        {obj?.pTx}
                                    </h2>
                                </div>

                            </div>

                        </div>

                    )
                })}

            </div>


        </div>
    )
}

export default FlightOffers