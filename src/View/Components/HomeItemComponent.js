import React,{useState,useEffect,useContext} from 'react'
import { View, Text,TextInput, ScrollView,Image, TouchableOpacity} from 'react-native'
import { Icon} from 'native-base'

//Context
import {Produtos} from '../../data/Contexts/ContextProdutos'
import {Carrinho} from '../../data/Contexts/ContextCarrinho'


const verde = '#2cbf88'
const  cinzaClaro = '#efefef'
const  preto = '#323232'
const  amarelo= '#c3e952'
const  cinzaEscuro= '#cecece'

export default function HomeItemComponent({item}) 
{
    const [adicionado, setadicionado] = useState(false)
    //const {ola} = useContext(Produtos)
    const 
    {
        adicionarNoCarrinho,carrinhoDados,estaNocarinho, removeNocarrinho
    } = useContext(Carrinho)


    useEffect(() => 
    {
        setadicionado(estaNocarinho(item))
    },[carrinhoDados])

    return (
        <View 
            activeOpacity={0.8}  style={{width:110,height:150,borderWidth:1,marginHorizontal:5,padding:5,
            borderColor:'#efefef',elevation:1.4,marginTop:10,borderRadius:5}}>
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
            {adicionado ? <Adicionado remover={removeNocarrinho} item={item}/> :<Adicionar add={adicionarNoCarrinho}  item={item} />}
        </View>
    )
}


const Adicionar = ({add,item}) =>
{
    return(
        <TouchableOpacity activeOpacity={0.4} style={{borderColor:verde,borderWidth:1,height:'18%',
        borderRadius:10, justifyContent:'center',alignItems:'center'}}
        onPress={()=>add(item)}>
                <Text style={{color:verde,fontFamily:'Montserrat-Regular'}}>Adicionar</Text>
            </TouchableOpacity>
    )
}


const Adicionado = ({item, remover}) =>
{
    return(
        <View style={{backgroundColor:verde,height:'15%',borderRadius:10,flexDirection:'row',
            justifyContent:'space-between',alignItems:'center'}}>
                <TouchableOpacity onPress={()=> remover()}>
                    <Icon name='minus' type='AntDesign' style={{fontSize:20,marginLeft:5, color:'white'}}/>
                </TouchableOpacity>
                <Text style={{color:'white',fontSize:15,fontFamily:'Montserrat-Bold'}}>1</Text>
                <TouchableOpacity>
                    <Icon name='plus' type='AntDesign' style={{fontSize:20,marginRight:5, color:'white'}}/>
                </TouchableOpacity>
            </View>
    )
}