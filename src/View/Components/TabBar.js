import React,{useState} from 'react'
import { StyleSheet, View ,Text,TouchableOpacity} from 'react-native'


//SVGS
import Home from '../../assets/svg/house.svg'
import Carrinho from '../../assets/svg/Grupo 368.svg'
import Favoritos from '../../assets/svg/suit-heart.svg'
import Perfil from '../../assets/svg/person.svg'
import { Icon } from 'native-base'

export default function TabBar({state, navigation}) 
{
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
                    
                    />
                ))
            }

        </View>
    )
}


const Tab =({Icone,Icone2, activo, onPress,titulo})=>
{
    return(
        <TouchableOpacity  style={{alignItems:'center'}}
        onPress={()=> onPress()}>
             { activo? <Icone2/>:<Icone/>}
             <Text>{titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})


//