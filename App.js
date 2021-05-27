import React from 'react'
import { View, Text } from 'react-native'
import auth from '@react-native-firebase/auth';
import { TouchableOpacity } from 'react-native';
import Autenticacao from './src/data/BackEnd/Autenticacao';
export default function App() 
{
  
  const Clicar = async () =>
  { 
    Autenticacao.AutententicarComEmailESenha("A","A")
  }
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <TouchableOpacity onPress={()=>Clicar()}>
          <Text>Click</Text>
      </TouchableOpacity>
    </View>
  )
}
