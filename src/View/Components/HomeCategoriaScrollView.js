import React from 'react'
import { View, Text ,Image,TouchableOpacity} from 'react-native'


const verde = '#2cbf88'
const  cinzaClaro = '#efefef'
const  preto = '#323232'
const  amarelo= '#c3e952'
const  cinzaEscuro= '#cecece'

export default function HomeCategoriaScrollView({img, titulo}) 
{
    return (
        <TouchableOpacity activeOpacity={0.6} style={{margin:2,width:100,alignItems:'center',justifyContent:'center'}}>
            <Image source={{uri: img}} style={{width:60,height:60,borderRadius:5}}/>
            <Text style={{fontSize:12,fontWeight:'800',color:preto,marginTop:3,fontFamily:'Montserrat-Regular'}}>{titulo}</Text>
        </TouchableOpacity>
    )
}
