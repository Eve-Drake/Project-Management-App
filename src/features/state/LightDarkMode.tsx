import { createContext, ReactNode, useState } from "react";

interface Props {
    children?: ReactNode
}

export interface LightDarkModeInterface {
    darkMode: boolean,
    switchDarkMode: (darkMode: boolean) => void,
}

const LightDarkModeContext = createContext<LightDarkModeInterface|null>(null);

export function CategoriesProvider({ children }: Props){
    const [darkMode, setDarkMode] =useState(false)
    
    const switchDarkMode = () =>{
        setDarkMode(!darkMode)
    }

    return(
        <LightDarkModeContext.Provider value={{darkMode, switchDarkMode}}>
            {children}
        </LightDarkModeContext.Provider>
    )
}

export default LightDarkModeContext