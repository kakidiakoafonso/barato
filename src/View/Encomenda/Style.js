import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native'

const {width,height} = Dimensions.get('screen')

const verde = '#2cbf88'
const  cinzaClaro = '#efefef'
const  preto = '#323232'
const  amarelo= '#c3e952'
const  cinzaEscuro= '#cecece'

const styles = StyleSheet.create({
    txtEncomenda:
    {
        marginLeft:15,
        color:'#000',
        fontFamily:'Montserrat-Regular'
    },
    counterContainerView:
    {
        borderColor:'#000',height:150,
        width:'90%',alignSelf:'center',marginTop:10,
        borderRadius:15,elevation:1.3
    },
    countItemView:
    {
        flex:1,justifyContent:'space-between'
    },
    txtCountLef:{marginLeft:10,marginTop:10},
    txtCountRight:{marginRight:10,marginTop:10},
    txtTotal:{color:verde, fontFamily:'Montserrat-Bold'},
    ///Localizacao
    LocalizacaoContainerView:
    {
        height:85,
        width:'90%',alignSelf:'center',marginTop:10,justifyContent:'space-between'
    },
    btnLocation:
    {
        backgroundColor:cinzaClaro,width:'70%',height:45,
        borderRadius:10,justifyContent:'space-evenly',
        alignItems:'center',paddingVertical:10,
        flexDirection:'row'
    },

    //Pagamento
    pagamentoView:
    {
        borderColor:'#000',height:60,
        width:'90%',alignSelf:'center',justifyContent:"center",alignItems:'center'
    },
    checkboxSelecionado:
    {
        borderRadius:10,
        backgroundColor:verde,
        borderColor:verde
    },
    checkboxNaoSelecionado:
    {
        borderRadius:10,
        borderColor:verde
    },
    //Encomenda
    btnEncomenda:
    {
        width:200, backgroundColor:verde,height:45,
        justifyContent:'center',alignItems:'center',
        borderRadius:20,flexDirection:'row'
    },
    precoView:
    {
        backgroundColor:cinzaClaro,
        height:40,width:85,alignItems:'center',paddingHorizontal:5,
        justifyContent:'space-around',
        flexDirection:'row'
    },
    iconeIr:{color:'#fff',marginLeft:5},
    //Modal
    modalContainer:
    {
        flex:1,
        backgroundColor:'rgba(0,0,0, 0.6)',
        alignItems:'center',justifyContent:'center'
    },
    modalWrapper:{
        width:'85%',height:180,
        backgroundColor:'#fff',borderRadius:10,
        justifyContent:'center',alignItems:'center'
    },
    infos:
    {
        width:'80%',height:'95%',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    txtInfoAviso:
    {
        fontSize:16,textAlign:'center',
        fontWeight:'bold'
    },
    txtDetalhe:{textAlign:'center'},
    ModalSucessIconView:
    {
        position:'absolute',
        top:-33
    },
})

export default styles;