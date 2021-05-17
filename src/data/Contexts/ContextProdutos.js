import React,{createContext,useState,useEffect} from 'react'
import { View, Text } from 'react-native'

export const Produtos = createContext()
export default function ContextProdutos({children}) 
{
    
    const ola = () => console.log("Ola mundo")
    return (
        <Produtos.Provider value={{ola}}>
            {children}
        </Produtos.Provider>
    )
}
