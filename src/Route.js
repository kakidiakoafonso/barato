import React from 'react'
import { View, Text } from 'react-native'
import Logar from './Rota.SignUp'
import Logado from './LogadoRoute'

export default function Route() 
{
  return (
         1===1?<Logado/>:<Logar/>
  )
}
