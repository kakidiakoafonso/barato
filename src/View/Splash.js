import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core'
import React,{useEffect,useContext} from 'react'
import { StyleSheet,Image, View ,StatusBar} from 'react-native'
import {UserContext} from '../data/Contexts/ContextUsuario'



const corPrimaria = '#2CBF88'
const corSecudaria = '#313131'
const corTerciaria = '#efefef'
const Splash = () => 
{
    const {settoken} = useContext(UserContext)
    const navigation = useNavigation()
    const getToken = async () => {
        try 
        {
        const value = await AsyncStorage.getItem('@barato_token')
        console.log(value)
        if(value !== null) 
        {
           console.log("Value "+value);
           settoken(value)
           setTimeout(() => {
                navigation.navigate('categorias')
           }, 3000);
        }
        else{
            setTimeout(() => {
                navigation.navigate('loginEmail')
            }, 3000);
        }
        } catch(e) {
        
            setTimeout(() => {
                navigation.navigate('loginEmail')
            }, 3000);
        }
    }
    useEffect(() =>getToken())
    return (
        <View style={styles.container}>
            {/*<StatusBar backgroundColor={corPrimaria}/>*/}
            <Image source={require('../assets/img/logo.png')} style={styles.logo}/>
        </View>
    )
}



export default Splash

const styles = StyleSheet.create({
    container:
    {
        backgroundColor:corPrimaria,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
