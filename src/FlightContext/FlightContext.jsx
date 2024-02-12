/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react'
import { flightsAvailable } from '../APIs/flightSearch';
import { useNavigate, useParams } from 'react-router-dom';

const FlightContext = createContext();
export const useFlightContext = () => {
    return useContext(FlightContext);
}


function FlightContextProvider({ children }) {

    let { query } = useParams();


    const [flights, setflights] = useState();


    let [src, setSrc] = useState();
    let [dest, setDest] = useState();
    let [day, setday] = useState();
    // let navigate = useNavigate();


    const setDay = (date) => {

        console.log("date", date);
        setday(date);
    }
    const setsrc = (airport) => {
        console.log("airport", airport);
        setSrc(airport)
    }
    const setdest = (airport) => {
        setDest(airport);
    }
    const SearchFlights = (filter = {}) => {
        //

        console.log("query", query);
        if (src && dest) {
            let dateObj = new Date(day);




            flightsAvailable(dateObj.getDay(), src, dest, filter).then((data) => {
                console.log("dat1", data);

                setflights(data.data.flights);
                console.log(data.data);

            })
        }

    };
    return (
        <FlightContext.Provider value={{
            flights, setflights,
            day, setDay, src, setsrc, dest, setdest, SearchFlights
        }}>
            {children}
        </FlightContext.Provider>
    )
}

export default FlightContextProvider