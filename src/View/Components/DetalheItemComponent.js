import React,{useState,useEffect} from 'react'
import { View, Text,TextInput, ScrollView,Image, TouchableOpacity,TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Icon} from 'native-base'



const verde = '#2cbf88'
const  cinzaClaro = '#efefef'
const  preto = '#323232'
const  amarelo= '#c3e952'
const  cinzaEscuro= '#cecece'
const item = {id:1,nome:'Coca Cola',quantidade:10,descricao:'Coca Cola Fresca',preco:350,img:'https://araujo.vteximg.com.br/arquivos/ids/4042618-1000-1000/07894900010015.jpg?v=637436775975100000'}




export default function DetalheItemComponent() 
{
    const [adicionado, setadicionado] = useState(false)
    useEffect(() => 
    {

    },[])

    return (
        <View 
            activeOpacity={0.8}  style={{width:110,height:130,borderWidth:1,marginHorizontal:5,padding:5,
            borderColor:'#efefef',elevation:1.4,marginTop:10,borderRadius:5,backgroundColor:'#fff'}}>
            <View style={{height:'82%',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                <Image source={{uri:item.img}} 
                    style={{width:'50%',height:'80%',borderRadius:8}}/>
                <View style={{width:'30%',height:'80%',marginLeft:5}}>
                    <Text style={{fontSize:12,color:'#000',fontFamily:'Montserrat-Bold'}}>{item.preco} Kz</Text>
                    <Text style={{fontSize:11,color:'#000',marginTop:3,fontFamily:'Montserrat-Regular'}}>
                        {item.nome}
                    </Text>
                </View>
            </View>
            {adicionado ? <Adicionado/> :<Adicionar/>}
        </View>
    )
}


const Adicionar = () =>
{
    return(
        <TouchableOpacity activeOpacity={0.4} style={{borderColor:verde,borderWidth:1,height:'15%',borderRadius:10,
            justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:verde,fontFamily:'Montserrat-Regular',fontSize:12}}>Adicionar</Text>
            </TouchableOpacity>
    )
}


const Adicionado = () =>
{
    return(
        <View style={{backgroundColor:verde,height:'18%',borderRadius:10,flexDirection:'row',
            justifyContent:'space-between',alignItems:'center'}}>
                <TouchableOpacity>
                    <Icon name='plus' type='AntDesign' style={{fontSize:20,marginLeft:5, color:'white'}}/>
                </TouchableOpacity>
                <Text style={{color:'white',fontSize:18,fontFamily:'Montserrat-Bold'}}>1</Text>
                <TouchableOpacity>
                    <Icon name='plus' type='AntDesign' style={{fontSize:20,marginRight:5, color:'white'}}/>
                </TouchableOpacity>
            </View>
    )
}