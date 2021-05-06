import {StyleSheet} from 'react-native'
import { Dimensions} from 'react-native'


const { width ,height} = Dimensions.get('screen')
const corPrimaria = '#2CBF88'
const corSecudaria = '#313131'
const corTerciaria = '#efefef'
const styles = StyleSheet.create({
container:
{
    backgroundColor:'white',
    flex:1,
},


//Header Style
headerContainer:
{
    backgroundColor:corPrimaria,
    height: height * 0.25,
    borderBottomRightRadius:30, 
    borderBottomLeftRadius:30,
    elevation:5,
    justifyContent:'space-evenly',
    alignItems:'center'
},
inputWraper:
{
    backgroundColor:'white',
    width:'88%', height:50,
    borderRadius:12,
    flexDirection:'row',
    justifyContent:'center',alignItems:'center'
},
iconSearch:{color:corPrimaria},
txtLocalizacaoAtual:
{
    fontSize:18,color:'white',
    fontWeight:'bold'
},
txtPara:
{
    fontSize:14,color:'white',
    marginLeft:10
},
posicao:
{
    position:'absolute',
    left:-28, bottom:12,
    color:'white'
},
down:
{
    color:'white',
    fontSize:12,
    marginLeft:5
},


//Body 

txtCategorias:
{
    color:'#000',
    fontSize:19,
    marginLeft:'5%'
},
categoriasWraper:
{
    width:'90%',height:100,
    alignSelf:'center',
    flexDirection:'row',
    flexGrow:3,
    flexWrap:'wrap',
},
})


export default styles;