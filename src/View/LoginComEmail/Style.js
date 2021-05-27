import {StyleSheet} from 'react-native'
import { Dimensions} from 'react-native'

const { width ,height} = Dimensions.get('screen')


const verde = '#2cbf88'
const  cinzaClaro = '#efefef'
const  preto = '#323232'
const  amarelo= '#c3e952'
const  cinzaEscuro= '#cecece'

const style = StyleSheet.create({
    container:
    {
        flex:1,alignItems:'center',
        justifyContent:'center'
    },
    header:
    {
        backgroundColor:verde,
        height:45
    },
    wrapper:
    {
        alignSelf:'center',
        width:'80%', height:200,
        justifyContent:'space-evenly'
    },
    inputs:
    {
        borderWidth:1,
        borderRadius:10
        
    }
})

export default style;