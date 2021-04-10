import React,{useState} from 'react'
import { StyleSheet, View ,TouchableOpacity} from 'react-native'

//SVGS
import Home from '../../assets/svg/house.svg'
import Carrinho from '../../assets/svg/Grupo 368.svg'
import Favoritos from '../../assets/svg/suit-heart.svg'
import Perfil from '../../assets/svg/person.svg'

export default function TabBar({state, navigation}) 
{
    const {routes} = state
    const [selecionado, setselecionado] = useState('home')
   
    return (
        <View style={{flexDirection:'row',justifyContent:'space-evenly',
        borderTopWidth:1,height:60,alignItems:'center',borderTopColor:'#cecece',width:'100%'}}>

            {
                routes.map(route=>(
                    <Tab key={route.key} Icone={Home}/>
                ))
            }

        </View>
    )
}


const Tab =({Icone})=>
{
    return(
        <TouchableOpacity  onPress={()=> console.log("Angolaaaaaaaaas")}>
             <Icone width={40} height={40}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})
