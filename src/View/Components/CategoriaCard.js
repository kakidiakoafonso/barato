import React from 'react'
import { TouchableOpacity,View, Text ,Image,StyleSheet,Dimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native';


export default function CategoriaCard({data}) 
{
    const navigation = useNavigation()
    const img = 'https://araujo.vteximg.com.br/arquivos/ids/4042618-1000-1000/07894900010015.jpg?v=637436775975100000'
    return (
            <TouchableOpacity
                onPress={()=>navigation.navigate('tab',
                {
                    screen:'home',
                    params:{categoria:data.categorieName}
                }
                    )}
                activeOpacity={0.5} style={styles.categoriaInfo}>
                <Image source={{uri:img}} style={{width:50,height:50,borderRadius:5}}/>
                <Text style={styles.txt}>
                    {data.categorieName}
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
    marginLeft:5,
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
