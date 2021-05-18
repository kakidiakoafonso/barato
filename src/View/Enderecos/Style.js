import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native'

const {width,height} = Dimensions.get('screen')

const verde = '#2cbf88'
const  cinzaClaro = '#efefef'
const  preto = '#323232'
const  amarelo= '#c3e952'
const  cinzaEscuro= '#cecece'

const styles = StyleSheet.create({
    itemContainer:
    {
        width:'90%',height:90,
        elevation:1,
        alignSelf:'center',
        marginTop:20,marginBottom:5,
        borderRadius:10,justifyContent:'space-between',
        flexDirection:'row'
    },
    TxtEnderecos:
    {
        marginLeft:'5%',
        fontSize:20
    },
    itemWrapper:
    {
        width:'88%',flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:15
    },
    btnDelete:
    {
        marginTop:15,marginRight:25
    },
    txtprimeiro:{fontWeight:'bold',fontSize:16},
    txtSegundo:{color:'#000',fontSize:14},
    txtTerceiro:{color:'#000',fontSize:14},
    header:
    {
        height:50,
        justifyContent:'center',
    },
    icon:
    {
        fontSize:40
    },
    btnAdd:
    {
        backgroundColor:verde,width:55,height:55,
        borderRadius:30,
        position:'absolute',
        bottom:10, right:10,
        alignItems:'center',justifyContent:'center'
    },
    addIcon:
    {
        color:'#fff',
        fontSize:35
    }
})

export default styles;