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
    wraper:
    {
        width:'100%',height:'45%',
        alignSelf:'flex-end',
        justifyContent:'space-evenly',
        alignItems:'center'

    },
    txtSlogan:
    {
        fontSize:20,fontWeight:'bold',
        color:corTerciaria
    },
    btnInscreverSe:
    {
        width:250,height:45,
        borderColor:corTerciaria,
        borderWidth:2,
        borderRadius:20,
        justifyContent:'center',alignItems:'center'
    },
    btnNavegar:
    {
        width:250,height:45,
        justifyContent:'center',alignItems:'center'
    },
    txtNavegar:
    {
        fontSize:14,fontWeight:'bold',
        color:corTerciaria
    },
    //Image
    imageContainer:
    {
        justifyContent:'flex-end',width:'100%',
        height:'55%',
        alignItems:'center'
    },


    //Idioma
    btnIdioma:
    {
        backgroundColor:corTerciaria,
        width:70,height:24,borderRadius:8,
        flexDirection:'row',justifyContent:'space-evenly',
        alignItems:'center',
        position:'absolute',
        right:20,top:20
        
    },
    imgBandeira:{width:15,height:15,borderRadius:5},
    txtIdioma:{color:corPrimaria},

    //Modal 1
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView: 
      {
        backgroundColor: "white",
        borderRadius: 8,
        alignItems: "center",
        elevation: 5,
        width:250,height:100,
        justifyContent:'center',
        alignContent:'center'
      },
      txtmodalInfo:
      {
          color:'#000',fontSize:20,
          fontWeight:'bold',
          marginBottom:15
    },
    btnModalOptions:
    {
        width:250,height:45,
        justifyContent:'center',alignItems:'center',
    },
    txtbtnModalOptions:
    {
        color:'#000'
    },
    ///Modal 2
    containerModal2:
    {
        width:'100%',height:'33%',backgroundColor:'white',borderTopLeftRadius:50,borderTopRightRadius:50,
    justifyContent:'center',alignItems:'center'
},
btnSignOpcion:
{
    borderColor:corPrimaria,borderWidth:0.6,
    width:60,height:60,alignItems:'center',justifyContent:'center',
    borderRadius:30
    },
    txtCadastraseCom:
    {
        fontWeight:'bold',
        fontSize:20,
        color:corSecudaria
    },
    iconContainer:
    {
        flexDirection:'row',
        width:200,
        justifyContent:'space-between',
        margin:15

    }

})
export default styles