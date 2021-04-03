import {StyleSheet} from 'react-native'


//Cores 
const corPrimaria = '#2CBF88'
const corSecudaria = '#313131'
const corTerciaria = '#efefef'

const styles = StyleSheet.create({
container:
{
    flex:1,
    justifyContent:'flex-start',
    backgroundColor:'white',

},
wraper:
{
    width:'80%',height:300,
   justifyContent:'space-evenly',
    
},
txtCodigo:
{
    fontSize:18, fontWeight:'bold',
    marginBottom:5
},
txtInfoTexto:
{
    color:"#A8A8A8", fontSize:14
},
txtNumero:
{
    color:corSecudaria, fontSize:18,
    fontWeight:'bold'
},
btn:
{
    backgroundColor:corPrimaria,
    width:'100%',height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:12,
    alignSelf:'center'
},
txtBtn:
{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
},
itens:
{
    flexDirection:'row'
},
txtItens:
{
    backgroundColor:'#ccc',width:40,
    height:40,
    borderRadius:10,
    textAlign:'center',
    margin:5
},
txtRenviar:
{
    color:corPrimaria,
    fontWeight:'bold',marginLeft:5
}
})

export default styles;