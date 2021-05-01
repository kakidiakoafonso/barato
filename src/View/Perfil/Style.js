import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native'

const {width,height} = Dimensions.get('screen')

const verde = '#2cbf88'
const  cinzaClaro = '#efefef'
const  preto = '#323232'
const  amarelo= '#c3e952'
const  cinzaEscuro= '#cecece'

const styles = StyleSheet.create({
    container:{flex:1},
    headerView:
    {
        backgroundColor:verde,
        height:180,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        alignItems:'center'
    },
    headerViewContacts:
    {
        height:70,backgroundColor:'#fff',
        width:'80%', position:'absolute',
        bottom:-30,borderRadius:10,
        alignSelf:'center',elevation:1,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    headerViewContactsItens:
    {
        marginTop:5,
        width:80,
        alignItems:'center'
    },
    txtHeader:
    {
        fontSize:13,
    },

    //Header Profile
    profileView:
    {
        flexDirection:'row',
        width:'80%',
        alignItems:'center',
    },
    txtProfileView:
    {
        color:'#fff'
    },
    txtProfileViewName:
    {
        fontWeight:'bold'
    },
    perfilView:
    {
        marginTop:5,
        marginBottom:15
    },
    perfilViewTxt:
    {
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    },
    //
    wraper:
    {
        width:'80%',
        alignSelf:'center',
        height:35,
        justifyContent:'flex-end',
        marginTop:15
    },
    wraperItens:
    {
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:3
    },
    txtWraperItens:
    {
        color:preto,
        fontWeight:'bold',
        marginLeft:10
    },
    rightIcon:{fontSize:25},
    ///Footer

    footerView:
    {
        width:'80%',
        alignSelf:'center',
        marginTop:20
    },
    txtFooterMais:{fontWeight:'bold'},
    footerItens:
    {
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:3
    },
    txtFooter:
    {
        color:preto,
        marginLeft:10
    },
    //Modal
    Modal:
    {
    flex:1,alignItems:'center',
    justifyContent:'center',backgroundColor:'rgba(0,0,0, 0.6)'
    }
})

export default styles;