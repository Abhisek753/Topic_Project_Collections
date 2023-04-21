import React, { createContext } from "react";

//Creating context
export const ThemeContext=React.createContext()

export default function ThemeContextProvider({children}){
    const [theme,setTheme]=React.useState("dark")

    const toggleTheme=()=>{
        setTheme(theme==="dark"?"light":"dark")
    }
    return <ThemeContext.Provider value={{theme:theme,toggleTheme:toggleTheme}}>
        {children}
        </ThemeContext.Provider>
}












