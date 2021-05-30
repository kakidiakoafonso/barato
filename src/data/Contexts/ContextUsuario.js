import React,{createContext,useState,useEffect} from 'react'
import { getUserInfo } from '../API'
import Dao from '../BackEnd/Dao'

export const UserContext = createContext()
export default function ContextUsuario({children}) 
{
    const [user, setuser] = useState([])
    const getUserInfo = () => Dao.getUserInfo('setuser')
    return (
        <UserContext.Provider value={{user,getUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}
