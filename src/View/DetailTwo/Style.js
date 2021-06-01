import {StyleSheet} from 'react-native'
const corPrimaria = '#2CBF88'
const corSecudaria = '#313131'
const corTerciaria = '#efefef'
const styles = StyleSheet.create({
    container:
    {
        backgroundColor:corPrimaria,
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
    },
    imageContainer:
    {
        justifyContent:'flex-end',width:'100%',
        height:'55%',
        alignItems:'center',
    },
    contentView:
    {
        width:'100%',height:300,backgroundColor:'white',
        borderTopLeftRadius:50,borderTopRightRadius:50,
        justifyContent:'center',alignItems:'center',
    },
    detailInput:
    {
        width:300,height:40,
        backgroundColor:'#EFEFEF',
        borderRadius:10,
        paddingLeft:15

    },
    inputContainer:{height:100,justifyContent:'space-between'
    ,alignItems:'center'
        },
    txtConfirmar:
    {
        color:corPrimaria,
        fontWeight:'bold'
    }
    

})
export default styles