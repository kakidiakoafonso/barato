import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


//Cores
const verde = '#2cbf88'
const  cinzaClaro = '#efefef'
const  preto = '#323232'
const  amarelo= '#c3e952'
const  cinzaEscuro= '#cecece'

const Logout = ({modalToggle}) => {
    return (
        <View style={{width:'85%',height:140,backgroundColor:'#fff',borderRadius:15,alignItems:'center',justifyContent:'space-around'}}>
            
                <Text numberOfLines={2} style={{width:'60%',textAlign:'center',fontSize:16}}>Tem certeza que deseja sair dessa conta?</Text>
                
                <View style={{justifyContent:'space-between',flexDirection:'row',width:'90%'}}>
                    <TouchableOpacity  onPress={()=> modalToggle()}>
                    <Text style={{color:preto,fontWeight:'bold'}}>VOLTAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{color:verde,fontWeight:'bold'}}>SAIR</Text>
                    </TouchableOpacity>
                </View>
            
        </View>
    )
}

export default Logout

const styles = StyleSheet.create({})
