import React, { useState, useContext } from "react";
import { moviesApi} from "./API";

const UserContext = React.createContext();

const nameArr = {
    age: 18,
    name: "Jake",
    favorite: {
        0 : "Kimchi",
        1 : "sushi",
        2 : "reame"
    }
}
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name : "Unknown",
        loggedIn: false,
        nowPlaying: null,
        upcoming: null,
        popular: null,
        loading: false,
        error : false
    })

    async function logUserIn() {
            const {
                data: {results: nowPlaying}
            } = await moviesApi.nowPlaying();
            
            const {
                data: {results: upcoming}
            } = await moviesApi.upcoming();
            
            const {
                data: {results: popular}
            } = await moviesApi.popular();

            setUser({
                ...user,
                loggedIn : true,
                nowPlaying,
                upcoming,
                popular,
                name : "Jake"
            })
    }

    return(
    <UserContext.Provider value={{user, fn: {logUserIn}}}>
        {children}
    </UserContext.Provider>
    );
};

export const useUser = () => {
    const {user} = useContext(UserContext);
    return user;

}

export const useFns = () => {
    const {fn} = useContext(UserContext);
    return fn;
}
export default UserContextProvider;