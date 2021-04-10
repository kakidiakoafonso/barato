import React from 'react'
import { TouchableOpacity,View, Text ,Image,StyleSheet,Dimensions} from 'react-native'
import Frutas from '../../assets/svg/healthy-food.svg'
import Pestisco from '../../assets/svg/Grupo 280.svg'
import { useNavigation } from '@react-navigation/native';


export default function CategoriaCard({SVG,titulo,Screen}) 
{
    const navigation = useNavigation()
    return (
            <TouchableOpacity 
                onPress={()=>navigation.navigate('home')}
                activeOpacity={0.5} style={styles.categoriaInfo}>
                <SVG width={50} height={40}/>
                <Text style={styles.txt}>
                    {titulo}
                </Text>
            </TouchableOpacity>
    )
}













const { width ,height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    categoriaInfo:
{
    width:width* 0.27, height:width* 0.27,
    marginBottom:15,
    alignItems:'center',
    borderRadius:10,
    justifyContent:'center',    
    elevation: 0.7,
},
img:
{
    width:'50%',
    height:'40%'
},
txt:
{
    textAlign:'center'
}
})
