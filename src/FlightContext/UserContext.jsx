/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState, } from "react";
import { json } from "react-router-dom";

const userContext = createContext();


export function useUserContext() {
    return useContext(userContext);
}

function UserContextProvider({ children }) {
    const [logged, setLogged] = useState(false);
    const [userdetail, setuserdetail] = useState();

    let [modal, setmodal] = useState();
    function handleModal(str) {
        // console.log("str", str);
        setmodal(str);
    }
    function user() {
        let user = localStorage.getItem('user');
        if (user)
            user = JSON.parse(user);
        // console.log("user", user);

        if (user?.token) {
            setLogged(true);
            setuserdetail(user);
        } else {
            setLogged(false);
        }


    }

    function setUser(userData) {
        let user = {};
        user = { ...userData };
        if (user.token) {
            setLogged(true);
        }
        localStorage.setItem('user', JSON.stringify(user));
    }
    function removeUser() {

        localStorage.removeItem('user');
        setLogged(false);
    }

    return <>
        <userContext.Provider
            value={{ logged, setUser, removeUser, userdetail, handleModal, modal, user }}
        >


            {children}
        </userContext.Provider>


    </>
}

export default UserContextProvider;