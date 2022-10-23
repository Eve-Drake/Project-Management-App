import { createContext, ReactNode, useState } from "react";

interface Props {
    children?: ReactNode
}

export interface LightDarkModeInterface {
    darkMode: boolean,
}

const LightDarkModeContext = createContext<LightDarkModeInterface|null>(null);

export function CategoriesProvider({ children }: Props){
    const [darkMode, setDarkMode] =useState(false)
    
    const switchDarkmode = () =>{
        setDarkMode(!darkMode)
    }

    return(
        <LightDarkModeContext.Provider value={{darkMode}}>
            {children}
        </LightDarkModeContext.Provider>
    )
}

export default LightDarkModeContext