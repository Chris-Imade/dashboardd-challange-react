import { createContext, useContext, useState } from "react";

const StateContext = createContext();

let initialState = {
    value: "something"
}

export const  AppState = ({ children }) => {
    const [colapseAside, setColapseAside] = useState(false);
    const [themeMode, setThemeMode] = useState();
    console.log(themeMode);

    const setMode = () => {

    }

    return (
        <StateContext.Provider
            value={{
                initialState,
                colapseAside,
                setColapseAside,
                themeMode, setThemeMode,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useAppContext = () => useContext(StateContext);