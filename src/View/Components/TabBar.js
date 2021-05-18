import React,{useState,useContext} from 'react'
import { StyleSheet, View ,Text,TouchableOpacity} from 'react-native'
import { Badge, Icon } from 'native-base'

//SVGS
import Home from '../../assets/svg/house.svg'
import Carrinho from '../../assets/svg/Grupo 368.svg'
import Favoritos from '../../assets/svg/suit-heart.svg'
import Perfil from '../../assets/svg/person.svg'

//Contexts
import {Carrinho as CarrinhoInfos} from '../../data/Contexts/ContextCarrinho'


export default function TabBar({state, navigation}) 
{
    const {carrinhoDados} = useContext(CarrinhoInfos)
    const {routes} = state
    const [selecionado, setselecionado] = useState('home')
    const renderizaAtual = ( tabAtual) => tabAtual=== selecionado
    const clickTab = (tabAtual,index)=> 
    {
        if(state.index !== index)
        {
            console.log(tabAtual)
            setselecionado(tabAtual)
            navigation.navigate(tabAtual)
            console.log(state.index)
        }
    }
    return (
        <View style={{flexDirection:'row',justifyContent:'space-evenly',
        borderTopWidth:1,height:60,alignItems:'center',borderTopColor:'#cecece',width:'100%'}}>

            {
                routes.map(route=>(
                    <Tab key={route.key} 
                    Icone={route.params.icon} 
                    Icone2={route.params.icon2} 
                    titulo={route.params.titulo} 
                    activo={renderizaAtual(route.name)}
                    onPress={()=> clickTab(route.name)}
                    qtdade={carrinhoDados.length}
                    
                    />
                ))
            }

        </View>
    )
}


const Tab =({Icone,Icone2, activo, onPress,titulo,qtdade})=>
{
    return(
        <TouchableOpacity  style={{alignItems:'center'}}
        onPress={()=> onPress()}>
             { activo? 
             <View>
                 <Icone2/>
                 <Badge style={{position:'absolute',width:20,height:20,
                    backgroundColor:'#a7ce39',bottom:20,left:8}}>
                     <Text>{qtdade}</Text>
                </Badge>
             </View>
             :
             <Icone/>}
             <Text style={{fontFamily:'Montserrat-Regular'}}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})


//