import { createContext, useState } from "react"

const ToggleContext=createContext();

export default function Toggle({children}){
    const [toggle,setToggle]=useState(false)

    function handleToggle(){
        setToggle(prevToggle=>!prevToggle)
    }
    return(
        <ToggleContext.Provider value={{toggle,handleToggle}}>
           {children}
        </ToggleContext.Provider>

    )
}

export {ToggleContext}