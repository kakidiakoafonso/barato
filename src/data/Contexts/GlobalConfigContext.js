import React,{createContext} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Configuracoes = createContext()
export default function GlobalConfigContext({children}) 
{ 
    const setToken = async (token) =>
    {
        try {
          await AsyncStorage.setItem('@storage_token', token)
          console.log("Funciona")
        } catch (e) {
          // saving error
          console.log(e)
        }
      }



    return (
        <Configuracoes.Provider value={{setToken}}>
            {children}
        </Configuracoes.Provider>
    )
}
