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
        width:'96%',height:320,
        backgroundColor:cinzaClaro,
        borderTopLeftRadius:50,
        borderTopEndRadius:50,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    TextNome:
    {
        fontFamily:'Montserrat-Bold',
        fontSize:18
    },
    TextDescricao:
    {
        fontFamily:'Montserrat-Regular'
    },
    TextPreco:
    {
        fontFamily:'Montserrat-Bold',
        color:verde,marginTop:5
    },
    txtProdutosRelacionados:
    {
        fontFamily:'Montserrat-Bold',
    },
    txtMaisProdutos:
    {
        color:verde,
        fontFamily:'Montserrat-Bold',
    },
    btnView:
    {
        backgroundColor:cinzaEscuro,
        height:30,width:100,borderRadius:15,
        flexDirection:'row',justifyContent:'space-between',
        alignItems:'center'
    },
    btnControllerLefth:{marginLeft:5},
    btnControllerRight:{marginRight:5},
    txtQuantidade:{fontFamily:'Montserrat-Bold',fontSize:20},
    btnCompra:
    {
        backgroundColor:verde,
        height:35,width:180,borderRadius:15,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    txtCompra:
    {
        fontFamily:'Montserrat-Bold',color:'#fff',
        fontSize:13
    },
    txtPrecoVenda:
    {
        fontFamily:'Montserrat-Bold',color:'#fff',
        fontSize:13
    }
})
export default styles;