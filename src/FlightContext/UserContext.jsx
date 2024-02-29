/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState, } from "react";

const userContext = createContext();


export function useUserContext() {
    return useContext(userContext);
}

function UserContextProvider({ children }) {
    const [logged, setLogged] = useState(false);
    const [userdetail, setuserdetail] = useState();
    function user() {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user?.token) {
            setLogged(true);
            setuserdetail(user);
        } else {
            setLogged(false);
        }


    }
    useEffect(() => {

        user();
    }, []);
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
            value={{ logged, setUser, removeUser, userdetail }}
        >


            {children}
        </userContext.Provider>


    </>
}

export default UserContextProvider;