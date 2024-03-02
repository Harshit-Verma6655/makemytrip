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
    const [flights, setflights] = useState();
    let [src, setSrc] = useState();
    let [srcName, setSrcName] = useState();
    let [dest, setDest] = useState();
    let [destName, setDestName] = useState();
    let [day, setday] = useState();
    let navigate = useNavigate();
    const setDay = (date) => {
        console.log("date", date);
        setday(date);
    }
    const setsrc = (airport) => {
        console.log("airport", airport);
        setSrc(airport)
    }
    const srcCityName = (name) => {
        setSrcName(name);
        return name;
    }

    const destCityName = (name) => {
        setDestName(name);
        console.log("airportname", name);
        return name;
    }

    const setdest = (airport) => {
        setDest(airport);
    }
    const SearchFlights = (src, dest, day, filter = {}) => {
        //
        setSrc(src);
        setDay(day);
        setDest(dest);

        if (src && dest) {
            let dateObj = new Date(day);
            flightsAvailable(dateObj.getDay(), src, dest, filter).then((data) => {
                console.log("dat1", data);

                setflights(data.data.flights);
                console.log(data.data);

            })
        }

    };


    const handleBookNow = (detail) => {
        detail.day = day;
        detail.srcName = srcName;
        detail.destName = destName;
        localStorage.setItem('flight', JSON.stringify(detail));
        navigate("/FlightDetail");
    }
    const getFlight = () => {
        let flight = JSON.parse(localStorage.getItem('flight'));
        return flight;
    }
    return (
        <FlightContext.Provider value={{
            flights, setflights,
            day, setDay, src, setsrc, dest, setdest, SearchFlights,
            handleBookNow, getFlight, destCityName, srcCityName
        }}>
            {children}
        </FlightContext.Provider>
    )
}

export default FlightContextProvider