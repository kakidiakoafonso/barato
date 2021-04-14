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
        flex:1,
    },

    //Carrinho vazio Style

    txtNenum:
    {
        fontWeight:'bold',fontSize:20
    },
    txtadd:
    {
        fontSize:16
    },
    svgContainer:
    {
        backgroundColor:'rgba(44, 191, 136, 0.8)',
        width:150,alignItems:'center',
        justifyContent:'center',
        borderRadius:100
    },
    //Carrinho com itens
    
})

export default style;