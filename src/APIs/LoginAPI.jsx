import React from 'react'

async function LoginAPI(userData) {

    let res = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "projectID": "8w8w2xf5s7mz",
        },
        body: JSON.stringify({

            "email": userData.email,
            "password": userData.password,
            "appType": "bookingportals"
        })
    });
    let result = await res.json();

    return result;

}

export default LoginAPI