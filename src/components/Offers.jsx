import React, { useEffect, useState } from 'react'
import OfferCard from './OfferCard'
import { OfferAPI } from '../APIs/OfferAPI'
function Offers() {
    const [offers, setOffers] = useState();
    const [filter, setfilter] = useState();
    const [active, setactive] = useState("ALL");

    useEffect(() => {
        OfferAPI(filter).then((data) => {
            console.log("offers", data.data.offers);
            setOffers(data.data.offers);
        })


    }, [filter])

    return (
        <div className='overflow-scroll px-4 my-16 bg-white scroll-hide '>
            <div className='flex justify-between my-2 px-2'><span className='text-xl font-bold'>OFFERS</span><span className='text-blue-600 font-semibold'>View All</span></div>
            <div className='overflow-scroll w-full scroll-hide'>
                <ul className='flex px-2 cursor-pointer gap-6 w-full overflow-scroll scroll-hide bg-white p-4 rounded-lg'>
                    <li className={`  ${active == "ALL" ? "border-blue-600  border-b-2 text-blue-600" : ""} font-bold `}
                        onClick={() => {
                            setactive("ALL")
                            setfilter({ "type": "ALL" });
                        }}

                    >Trendings</li>
                    <li className={`  ${active == "FLIGHTS" ? "border-blue-600  border-b-2 text-blue-600" : ""} font-bold `} onClick={() => {
                        setactive("FLIGHTS")
                        setfilter({ "type": "FLIGHTS" });
                    }}>Flights</li>
                    <li className={` ${active == "HOTELS" ? "border-blue-600  border-b-2 text-blue-600" : ""} font-bold `}
                        onClick={() => {
                            setactive("HOTELS")
                            setfilter({ "type": "HOTELS" });
                        }}
                    >Hotels</li>
                    <li className={`  ${active == "VILLAS" ? "border-blue-600  border-b-2 text-blue-600" : ""} font-bold `}
                        onClick={() => {
                            setactive("VILLAS")
                            setfilter({ "type": "VILLAS" });
                        }}
                    >Villas&Apts</li>
                    <li className={`  ${active == "CABS" ? "border-blue-600  border-b-2 text-blue-600" : ""} font-bold `}
                        onClick={() => {
                            setactive("CABS")
                            setfilter({ "type": "CABS" });
                        }}
                    >Cabs</li>
                    <li className='  font-bold '>Holidays</li>
                    <li className={` ${active == "RAILS" ? "border-blue-600 text-blue-600  border-b-2" : ""} font-bold `}
                        onClick={() => {
                            setactive("RAILS")
                            setfilter({ "type": "RAILS" });
                        }}

                    >Rails</li>
                </ul>
                <hr />
            </div>
            <div className='py-4 px-2 flex  overflow-scroll gap-2 scroll-hide ' >
                {offers?.map((obj, index) => {
                    return <OfferCard obj={obj} key={index} />
                })}

            </div>


        </div>
    )
}

export default Offers