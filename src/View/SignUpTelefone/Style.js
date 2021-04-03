import {StyleSheet} from 'react-native'


//Cores 
const corPrimaria = '#2CBF88'
const corSecudaria = '#313131'
const corTerciaria = '#efefef'

const style = StyleSheet.create({
    container:
    {
        flex:1,backgroundColor:'white'
    },
    wraper:
    {
        height:250,
        width:'100%',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    btn:
    {
        backgroundColor:corPrimaria,
        width:'80%',height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12
    },
    txtBtn:
    {
        color:'white',
        fontWeight:'bold',
        fontSize:20,
    },
    txtInfoNumero:
    {
        color:corSecudaria,
        fontWeight:'bold',
        fontSize:20,
    },
    dataContainer:
    {
        width:'80%',height:40,
        backgroundColor:corTerciaria,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center'
    },
    btnDD:
    {
        backgroundColor:'#ccc',
        width:'35%',height:'100%', flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    },
    caretIcon:
    {
        width:20,height:20,
        marginBottom:7,
    },
    txtNumero:
    {
        color:'#000',
        fontSize:16,
        fontWeight:'bold',
        flex:1
    }
})


export default style;