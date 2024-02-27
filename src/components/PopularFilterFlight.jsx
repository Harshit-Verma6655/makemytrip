/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty */
import React, { useEffect, useState } from 'react'
import { useFlightContext } from '../FlightContext/FlightContext';
import { useParams } from 'react-router-dom';

function PopularFilterFlight() {
    let [nonStop, setnonStop] = useState(false);
    let [oneStop, setoneStop] = useState(false);
    let [maxPrice, setmaxPrice] = useState();
    let [departureTime, setdepartureTime] = useState();
    let [arrivalTime, setarrivalTime] = useState();
    let [filter, setfilter] = useState();
    let { query } = useParams();

    let arr = query.split("-");
    let day = `${arr[2]}-${arr[3]}-${arr[4]}`;
    let src = { iata_code: arr[0] };
    let dest = { iata_code: arr[1] };
    let [departureActive, setdepartureActive] = useState();
    const { SearchFlights } = useFlightContext();

    useEffect(() => {
        handleOnestop();
        // handlleRange();

    }, [nonStop, oneStop, maxPrice, departureTime]);

    const handleOnestop = () => {
        if (nonStop && oneStop) {
            setfilter((prev) => {
                let filter1 = { ...prev, stops: { ...prev?.stops, "$gte": 0, "$lte": 1 } };
                SearchFlights(src, dest, day, filter1);
                return filter1;
            }
            );


        } else if (nonStop && !oneStop) {
            setfilter((prev) => {
                let filter1 = { ...prev, stops: { ...prev?.stops, "$lte": 0 } };
                SearchFlights(src, dest, day, filter1);
                return filter1;
            }
            );


        } else if (!nonStop && oneStop) {
            setfilter((prev) => {
                let filter1 = { ...prev, stops: { ...prev?.stops, "$lte": 1, "$gte": 1 } };
                SearchFlights(src, dest, day, filter1);
                return filter1;
            }
            );


        } else {

            setfilter((prev) => {
                let filter1 = { ...prev, stops: { ...prev?.stops, "$lte": 8, "$gte": 0 } };
                SearchFlights(src, dest, day, filter1);
                return filter1;
            }
            );

        }


    };




    return (
        <div className='sm:w-[295px] w-screen bg-[#041422] text-white sm:text-black  h-fit shadow-xl sm:bg-white'>
            <div className='px-[15px] py-[12px] flex flex-col'>
                <p className='mb-[15px] text-[18px] font-bold'>Popular Filters</p>
                <div className='sm:w-[265px] w-full sm:h-[173px] h-fit mb-6 gap-2 flex sm:flex-col'>
                    <div className='sm:w-[265px] mb-[12px] h-[26px] flex items-center sm:justify-between'>
                        <label className='flex' >
                            <span><input type='checkbox' name='nonstop' className='w-[18px] h-[18px]'
                                onChange={(e) => {
                                    setnonStop(e.target.checked);

                                }}
                            ></input></span>
                            <div className='ml-[10px]'><p>Non Stop</p></div>
                        </label>
                        <span className='ml-[5px] hidden sm:block'>₹ 4,869</span>
                    </div>
                    <div className='sm:w-[265px] mb-[12px] h-[26px] flex items-center sm:justify-between'>
                        <label className='flex'>
                            <span><input type='checkbox'
                                onChange={(e) => setoneStop(e.target.checked)}
                                className='w-[18px] h-[18px]'></input></span>
                            <div className='ml-[10px]'><p>1 Stop</p></div>
                        </label>
                        <span className='ml-[5px] hidden sm:block'>₹ 4,869</span>
                    </div>
                    <div className='sm:w-[265px] mb-[12px] h-[26px] flex items-center sm:justify-between'
                        onClick={() => {

                            setfilter((prev) => {
                                let filter1 = {
                                    ...prev, duration
                                        : { "$lte": 3 }
                                };
                                SearchFlights(src, dest, day, filter1);
                                return filter1;
                            })


                        }}

                    >
                        <label className='flex'>
                            <span><input type='checkbox' className='w-[18px] h-[18px]'></input></span>
                            <div className='ml-[10px]'><p>Duration</p></div>
                        </label>
                        <span className='ml-[5px] hidden sm:block'>   3hrs </span>
                    </div>
                    <div className='sm:w-[265px] mb-[12px] h-[26px] flex items-center sm:justify-between'
                        onClick={() => {
                            setdepartureActive("noon")
                            setfilter((prev) => {
                                setdepartureTime("18:00");
                                let filter1 = {
                                    ...prev, departureTime
                                        : { "$gte": "12:00", "$lte": "18:00" }
                                };
                                SearchFlights(src, dest, day, filter1);
                                return filter1;
                            })

                        }
                        }

                    >
                        <label className='flex'>
                            <span><input type='checkbox' className='w-[18px] h-[18px]'></input></span>
                            <div className='ml-[10px] '><p> Morning</p></div>
                        </label>
                        <span className='ml-[5px] text-xs hidden sm:block '>6AM- 12PM</span>
                    </div>


                    <button className='mb-15px hidden sm:block'
                        onClick={() => {
                            setdepartureActive(null);
                            setfilter((prev) => {
                                let filter1 = {};
                                SearchFlights(src, dest, day, filter1);

                                return filter1;
                            })
                        }}


                    >
                        <span className='text-blue-400 text-sm'>Clear All Filter</span>
                    </button>

                </div>
                <div className='py-[12px] px-[15px] mb-8 hidden sm:block'>
                    <p className='mb-[15px] text-lg font-semibold'>One way Price</p>
                    <div>
                        <div>
                            <div className='my-[20px]'>
                                <input type='range' className='w-full'
                                    min="0" step="5" max="55"
                                    onChange={(e) => {
                                        let base = 2000;
                                        let fact = 20 * e.target.value;
                                        let price = base + fact;
                                        console.log(price);
                                        setmaxPrice(price);
                                        setfilter((prev) => {
                                            let filter1 = { ...prev, ticketPrice: { ...prev?.ticketPrice, "$gte": 0, "$lte": price } };
                                            SearchFlights(src, dest, day, filter1);
                                            return filter1;
                                        });
                                    }}
                                />
                            </div>
                            <div className='flex justify-between'>
                                <span>
                                    ₹2,000
                                </span>
                                <span>
                                    ₹{maxPrice}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-8 hidden sm:block'>
                    <p className='mb-[15px] font-bold'>Stops From Mumbai</p>
                    <div className='w-[265px] mb-[12px] h-[26px] flex items-center justify-between'>
                        <label className='flex' >
                            <span><input type='checkbox' name='nonstop' className='w-[18px] h-[18px]'
                                onChange={(e) => {
                                    setnonStop(e.target.checked);

                                }}
                            ></input></span>
                            <div className='ml-[10px]'><p>Non Stop</p></div>
                        </label>
                        <span className='ml-[5px]'>₹ 4,869</span>
                    </div>
                    <div className='w-[265px] mb-[12px] h-[26px] flex items-center justify-between'>
                        <label className='flex'>
                            <span><input type='checkbox'
                                onChange={(e) => setoneStop(e.target.checked)}
                                className='w-[18px] h-[18px]'></input></span>
                            <div className='ml-[10px]'><p>1 Stop</p></div>
                        </label>
                        <span className='ml-[5px]'>₹ 4,869</span>
                    </div>
                </div>
                <div className='mb-8 hidden sm:block' >

                    <p className='mb-[15px] font-bold '>Departure From Mumbai</p>
                    <div className='flex flex-wrap justify-between'>
                        <div className={`mr-[10px] mb-[12px] border p-[5px] rounded-lg flex flex-col items-center cursor-pointer ${departureActive == "night" ? "bg-[#068eff] text-white" : ""}`}
                            onClick={() => {
                                setdepartureActive("night");
                                setdepartureTime("06:00");
                                setfilter((prev) => {
                                    let filter1 = {
                                        ...prev, departureTime
                                            : { "$gte": "00:00", "$lte": "06:00" }
                                    };
                                    SearchFlights(filter1);
                                    return filter1;
                                })


                            }}
                        >
                            <span><img width={"34px"} height={"34px"} src={`https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/morning_${departureActive == "night" ? "" : "in"}active.png?v=1`} /></span>
                            <div className='text-[7px] font-bold text-center'>
                                Before 6 AM
                            </div>
                        </div>
                        <div className='flex'>
                            <div onClick={() => {
                                setdepartureActive("morning")
                                setfilter((prev) => {
                                    let filter1 = {
                                        ...prev, departureTime
                                            : { "$gte": "06:00", "$lte": "12:00" }
                                    };
                                    SearchFlights(filter1);
                                    return filter1;
                                })

                            }
                            } className={`mr-[10px] mb-[12px] border p-[6px] rounded-lg flex flex-col items-center cursor-pointer ${departureActive == "morning" ? "bg-[#068eff] text-white" : ""}`}>
                                <span><img width={"34px"} height={"34px"} src={`https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/noon_${departureActive == "morning" ? "" : "in"}active.png?v=1`} /></span>
                                <div className='text-[7px] font-bold text-center'>
                                    6 AM - 12 PM
                                </div>
                            </div>


                        </div>
                        <div className='flex cursor-pointer' onClick={() => {
                            setdepartureActive("noon")
                            setfilter((prev) => {
                                setdepartureTime("18:00");
                                let filter1 = {
                                    ...prev, departureTime
                                        : { "$gte": "12:00", "$lte": "18:00" }
                                };
                                SearchFlights(src, dest, day, filter1);
                                return filter1;
                            })

                        }
                        }>
                            <div className={`mr-[10px] mb-[12px] border p-[6px] rounded-lg flex flex-col items-center ${departureActive == "noon" ? "bg-[#068eff] text-white" : ""}`}>
                                <span><img width={"34px"} height={"34px"} src={`	https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/evening_${departureActive == "noon" ? "" : "in"}active.png?v=1`} /></span>
                                <div className='text-[7px] font-bold text-center'>
                                    12 PM - 6 PM
                                </div>
                            </div>


                        </div>
                        <div className='flex cursor-pointer'
                            onClick={() => {
                                setdepartureActive("even")
                                setdepartureTime("00:00");
                                setfilter((prev) => {
                                    let filter1 = {
                                        ...prev, departureTime
                                            : { "$gte": "18:00", "$lte": "00:00" }
                                    };
                                    SearchFlights(src, dest, day, filter1);
                                    return filter1;
                                })

                            }
                            }


                        >
                            <div className={`mr-[10px] mb-[12px] border py-[5px] px-[9px] rounded-lg flex flex-col items-center ${departureActive == "even" ? "bg-[#068eff] text-white" : ""}`}>
                                <span><img width={"34px"} height={"34px"} src={`https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/night_${departureActive == "even" ? "" : "in"}active.png?v=1`} /></span>
                                <div className='text-[7px] font-bold text-center'>
                                    After 6 pM
                                </div>
                            </div>


                        </div>

                    </div>
                    {departureActive && <button className='text-blue-700 text-xs font-bold' onClick={() => {

                        setdepartureActive(null);
                        setfilter((prev) => {
                            let filter1 = {
                                ...prev, departureTime
                                    : { "$gte": "00:00" }
                            };
                            SearchFlights(src, dest, day, filter1);
                            return filter1;
                        })
                    }}>Clear Filter</button>}
                </div>



                <div className='mb-8 hidden sm:block'>
                    <p className='mb-[15px] font-bold'>Arrival at  Mumbai</p>
                    <div className='flex flex-wrap '>
                        <div className='flex'>
                            <div className='mr-[10px] mb-[12px] border p-[6px] rounded-lg flex flex-col items-center cursor-pointer'>
                                <span><img width={"34px"} height={"34px"} src='https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/noon_inactive.png?v=1' /></span>
                                <div className='text-[7px] font-bold text-center'>
                                    6 AM - 12 PM
                                </div>
                            </div>


                        </div>
                        <div className='flex cursor-pointer'>
                            <div className='mr-[10px] mb-[12px] border p-[6px] rounded-lg flex flex-col items-center'>
                                <span><img width={"34px"} height={"34px"} src='	https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/evening_inactive.png?v=1' /></span>
                                <div className='text-[7px] font-bold text-center'>
                                    12 PM - 6 PM
                                </div>
                            </div>


                        </div>
                        <div className='flex cursor-pointer'>
                            <div className='mr-[10px] mb-[12px] border py-[5px] px-[9px] rounded-lg flex flex-col items-center'>
                                <span><img width={"34px"} height={"34px"} src='https://imgak.mmtcdn.com/flights/assets/media/dt/listing/left-filters/night_inactive.png?v=1' /></span>
                                <div className='text-[7px] font-bold text-center'>
                                    After 6 pM
                                </div>
                            </div>


                        </div>




                    </div>

                </div>
                <div className='hidden sm:block'>
                    <p className='mb-[15px] text-[18px] font-bold'>Airlines</p>
                    <div className='w-[265px] mb-[12px] h-[26px] flex items-center justify-between'>
                        <label className='flex'>
                            <span><input type='checkbox' className='w-[18px] h-[18px]'></input></span>
                            <div className='ml-[10px] '><p className='flex items-center '>
                                <span className='mr-2'><img height={"12px"} width={"12px"} src='https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=18' /></span>
                                Air India</p></div>
                        </label>
                        <span className='ml-[5px]'>₹ 4,869</span>
                    </div>
                    <div className='w-[265px] mb-[12px] h-[26px] flex items-center justify-between'>
                        <label className='flex'>
                            <span><input type='checkbox' className='w-[18px] h-[18px]'></input></span>
                            <div className='ml-[10px] '><p className='flex items-center '>
                                <span className='mr-2'><img height={"12px"} width={"12px"} src='https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=18' /></span>
                                Air India</p></div>
                        </label>
                        <span className='ml-[5px]'>₹ 4,869</span>
                    </div>
                    <div className='w-[265px] mb-[12px] h-[26px] flex items-center justify-between'>
                        <label className='flex'>
                            <span><input type='checkbox' className='w-[18px] h-[18px]'></input></span>
                            <div className='ml-[10px] '><p className='flex items-center '>
                                <span className='mr-2'><img height={"12px"} width={"12px"} src='https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=18' /></span>
                                Air India</p></div>
                        </label>
                        <span className='ml-[5px]'>₹ 4,869</span>
                    </div>
                    <div className='w-[265px] mb-[12px] h-[26px] flex items-center justify-between'>
                        <label className='flex'>
                            <span><input type='checkbox' className='w-[18px] h-[18px]'></input></span>
                            <div className='ml-[10px] '><p className='flex items-center '>
                                <span className='mr-2'><img height={"12px"} width={"12px"} src='https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=18' /></span>
                                Air India</p></div>
                        </label>
                        <span className='ml-[5px]'>₹ 4,869</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularFilterFlight