import React,{createContext,useEffect,useState} from 'react'
import Dao from '../BackEnd/Dao'

export const UserContext = createContext()
export default function ContextUsuario({children}) 
{
    const [logado, setlogado] = useState(false)
    const [user, setuser] = useState([])
    const [token, settoken] = useState('')
    const getUserInfo = () => Dao.getUserInfo(setuser)
    const updateUser = (nome,email,tel,setModal) => Dao.updateUser(nome,email,tel,setModal,getUserInfo())
    
    return (
        <UserContext.Provider value={{user,getUserInfo,updateUser,settoken,token}}>
            {children}
        </UserContext.Provider>
    )
}
