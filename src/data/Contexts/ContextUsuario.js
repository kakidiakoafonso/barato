import React,{createContext,useState,useEffect} from 'react'
import { getUserInfo } from '../API'

export const UserContext = createContext()
export default function ContextUsuario({children}) 
{
    const btn = () => console.warn("Clicou")
    const [userInfo, setuserInfo] = useState([])

    useEffect(() => 
    {
        getUserInfo()
    })

    return (
        <UserContext.Provider value={{btn:btn,setuserInfo:setuserInfo}}>
            {children}
        </UserContext.Provider>
    )
}
