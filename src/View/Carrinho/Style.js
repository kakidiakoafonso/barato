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
        fontFamily:'Montserrat-Bold',fontSize:20
    },
    txtadd:
    {
        fontSize:16,fontFamily:'Montserrat-Regular'
    },
    svgContainer:
    {
        backgroundColor:'rgba(44, 191, 136, 0.8)',
        width:150,alignItems:'center',
        justifyContent:'center',
        borderRadius:100
    },
    //Carrinho com itens
    
    //Vericar
    btnVericar:
    {
        backgroundColor:verde,width:200,height:40,
        alignItems:'center',justifyContent:'center',
        borderRadius:20,marginBottom:5,
    },
    btnVericarTxt:
    {fontFamily:'Montserrat-Bold',color:'white'}
})

export default style;