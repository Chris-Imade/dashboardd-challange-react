import { createContext, useContext, useState } from "react";

const StateContext = createContext();

let initialState = {
    value: "something"
}

export const  AppState = ({ children }) => {
    const [colapseAside, setColapseAside] = useState(false);
    return (
        <StateContext.Provider
            value={{
                initialState,
                colapseAside,
                setColapseAside,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useAppContext = () => useContext(StateContext);