import { createContext, useContext, useState } from "react";

const StateContext = createContext();

let initialState = {
    value: "something"
}

export const  AppState = ({ children }) => {
    const [colapseAside, setColapseAside] = useState(false);
    const [themeMode, setThemeMode] = useState(localStorage.getItem("theme"));
    const [openSetting, setOpenSettings] = useState(false);
    console.log(themeMode);

    const setMode = (theme) => {
        let mode = localStorage.setItem("theme",theme);
        setThemeMode(localStorage.getItem("theme")); 
    }

    return (
        <StateContext.Provider
            value={{
                initialState,
                colapseAside,
                setColapseAside,
                themeMode, setMode,
                openSetting, setOpenSettings,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useAppContext = () => useContext(StateContext);