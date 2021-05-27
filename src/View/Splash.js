import { useNavigation } from '@react-navigation/core'
import React,{useEffect} from 'react'
import { StyleSheet,Image, View ,StatusBar} from 'react-native'



const corPrimaria = '#2CBF88'
const corSecudaria = '#313131'
const corTerciaria = '#efefef'
const Splash = () => 
{
    const navigation = useNavigation()
    useEffect(() =>
    {
        setTimeout(() => {
            navigation.navigate('sign')
        }, 3000);
    }, [])
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
