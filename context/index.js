import React,{useState,createContext} from "react"

export const Context = createContext()

export const ContextProvider = ({children}) =>{
    const [username,setUsername] = useState("")
    const [secret,setSecret] = useState("")
    console.log(username);
    const value = {
        username,
        setUsername,
        secret,
        setSecret
    }
    return <Context.Provider value={value}>{children}</Context.Provider>
}