import {StyleSheet} from 'react-native'
import { Dimensions} from 'react-native'


const { width ,height} = Dimensions.get('screen')
const corPrimaria = '#2CBF88'
const corSecudaria = '#313131'
const corTerciaria = '#efefef'


const verde = '#2cbf88'
const  cinzaClaro = '#efefef'
const  preto = '#323232'
const  amarelo= '#c3e952'
const  cinzaEscuro= '#cecece'


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
    height: height * 0.20,
    borderBottomRightRadius:30, 
    borderBottomLeftRadius:30,
    elevation:5,
    justifyContent:'space-evenly',
    alignItems:'center'
},
inputWraper:
{
    backgroundColor:'white',
    width:'88%', height:46,
    borderRadius:12,
    flexDirection:'row',
    justifyContent:'center',alignItems:'center'
},
iconSearch:{color:corPrimaria},
iconUser:{color:'white'},




})


export default styles;