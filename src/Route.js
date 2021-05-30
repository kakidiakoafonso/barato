import React,{useContext,useState} from 'react'
import Logar from './Rota.SignUp'
import Logado from './LogadoRoute'
import {UserContext} from './data/Contexts/ContextUsuario'
import { View ,Text,Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

export default function Route() 
{
  const {logado, setlogado} = useContext(UserContext)
  //setTimeout(()=>{setlogado(true)},5000)
  return (
    <NavigationContainer>
          {logado ?  <Logado/> : <Logar/>}
    </NavigationContainer>     
  )
}
