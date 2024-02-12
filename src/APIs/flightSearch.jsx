import React from 'react'
import { json } from 'react-router-dom';
let obj = {
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
    0: "Sun"
}

export async function airportSearch(city) {
    let res = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/airport?search={"city":"${city}"}`, {
        headers: {
            "projectID": "8w8w2xf5s7mz",
        }
    });
    let result = await res.json();
    // console.log(result, "airports");
    return result;


}

export async function flightsAvailable(day, src, dest, filter = {}) {
    let filterString = JSON.stringify(filter);

    day = obj[day];
    let res = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${src.iata_code}","destination":"${dest.iata_code}"}&day=${day}&filter=${filterString}`, {
        headers: {
            "projectID": "8w8w2xf5s7mz",
        }
    });
    let result = await res.json();
    console.log(result, "results");
    return result;


}

