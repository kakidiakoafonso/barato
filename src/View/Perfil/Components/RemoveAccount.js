import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


//Cores
const verde = '#2cbf88'
const  cinzaClaro = '#efefef'
const  preto = '#323232'
const  amarelo= '#c3e952'
const  cinzaEscuro= '#cecece'
const RemoveAccount = ({modalToggle}) => {
    return (
        <View style={{width:'85%',height:140,backgroundColor:'#fff',borderRadius:15,alignItems:'center',justifyContent:'space-around'}}>
            
                <Text numberOfLines={2} 
                    style={{width:'60%',fontSize:16,textAlign:'center'}}>
                    Tem certeza que deseja remover essa conta?
                </Text>
                
                <View style={{justifyContent:'space-between',flexDirection:'row',width:'90%'}}>
                    <TouchableOpacity onPress={()=> modalToggle()}>
                    <Text style={{color:preto,fontWeight:'bold'}}>NÃO REMOVER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{color:verde,fontWeight:'bold'}}>REMOVER</Text>
                    </TouchableOpacity>
                </View>
            
        </View>
    )
}

export default RemoveAccount

const styles = StyleSheet.create({})
