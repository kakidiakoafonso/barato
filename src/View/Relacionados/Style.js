import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native'

const {width,height} = Dimensions.get('screen')

const verde = '#2cbf88'
const  cinzaClaro = '#efefef'
const  preto = '#323232'
const  amarelo= '#c3e952'
const  cinzaEscuro= '#cecece'

const styles = StyleSheet.create(
{
    container:{flex:1,backgroundColor:'#fff'},
    containerWraper:{flex:1,paddingHorizontal:10,marginTop:15},
    txtView:
    {
        width:180,
            
    },
    txtEdite:
    {
        
        //fontFamily:'Montserrat-Regular', 
        fontSize:15,
        fontWeight:'bold'  
    },
    inputContainerView:
    {
        backgroundColor:'#efefef',
        borderRadius:10,justifyContent:'center',
        height:45,alignItems:'center',
        paddingHorizontal:5,
        marginTop:5
    },
    txtInput:
    {
        width:'90%',
        fontSize:14,
        color:'#000'

    }
    ,
    inputIcon:
    {
        justifyContent:'space-between',
        flexDirection:'row',alignItems:'center'
        
    },
    infoItens:
    {
        marginTop:20
    },
    txtinfoItens:
    {
        color:'#000'
    },
    btnSalvar:
    {
        backgroundColor:verde,
        width:'85%',height:42,
        borderRadius:25,alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',marginBottom:20
    },
    txtSalvar:
    {
        color:cinzaClaro,
        fontSize:18,
        fontWeight:'bold'
    },
    //Modal
    Modal:
    {
    flex:1,alignItems:'center',
    justifyContent:'center',backgroundColor:'rgba(0,0,0, 0.6)'
    },
    modalWraper:
    {
        width:'90%',height:150,
        backgroundColor:'#fff',
        borderRadius:10,alignItems:'center',
        justifyContent:'space-evenly'
    },
    iconSuceso:
    {
        position:'absolute',
        top:-30
    },
    txtInformacoesAlterada:
    {
        fontWeight:'bold',
        fontSize:16
    }
})

export default styles;