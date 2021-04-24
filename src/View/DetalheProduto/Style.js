import {StyleSheet} from 'react-native'
import { Dimensions} from 'react-native'

const { width ,height} = Dimensions.get('screen')


const verde = '#2cbf88'
const  cinzaClaro = '#efefef'
const  preto = '#323232'
const  amarelo= '#c3e952'
const  cinzaEscuro= '#cecece'

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        backgroundColor:'white'
    },
    wrapper:
    {
        flex:1,alignItems:'center',
        justifyContent:'space-between'
    },
    bottom:
    {
        width:'96%',height:300,
        backgroundColor:cinzaEscuro,
        borderTopLeftRadius:60,
        borderTopEndRadius:60,
        justifyContent:'space-evenly',
        alignItems:'center'
    }
})
export default styles;