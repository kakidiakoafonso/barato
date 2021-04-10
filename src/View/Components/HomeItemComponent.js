import React,{useState,useEffect} from 'react'
import { View, Text,TextInput, ScrollView,Image, TouchableOpacity,TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Icon} from 'native-base'



const verde = '#2cbf88'
const  cinzaClaro = '#efefef'
const  preto = '#323232'
const  amarelo= '#c3e952'
const  cinzaEscuro= '#cecece'

export default function HomeItemComponent({item}) 
{
    const [adicionado, setadicionado] = useState(false)
    useEffect(() => 
    {

    },[])

    return (
        <View 
            activeOpacity={0.8}  style={{width:165,height:150,borderWidth:1,marginHorizontal:5,padding:5,
            borderColor:'#efefef',elevation:1.4,marginTop:10,borderRadius:5}}>
            <View style={{height:'82%',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                <Image source={{uri:item.img}} 
                    style={{width:'50%',height:'80%',borderRadius:8}}/>
                <View style={{width:'30%',height:'80%',marginLeft:5}}>
                    <Text style={{fontSize:12,color:'#000',fontWeight:'bold'}}>{item.preco} Kz</Text>
                    <Text style={{fontSize:11,color:'#000',marginTop:3}}>
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
        <TouchableOpacity activeOpacity={0.4} style={{borderColor:verde,borderWidth:1,height:'18%',borderRadius:10,
            justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:verde}}>Adicionar</Text>
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
                <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>1</Text>
                <TouchableOpacity>
                    <Icon name='plus' type='AntDesign' style={{fontSize:20,marginRight:5, color:'white'}}/>
                </TouchableOpacity>
            </View>
    )
}