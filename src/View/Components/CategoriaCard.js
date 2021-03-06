import React from 'react'
import { TouchableOpacity,View, Text ,Image,StyleSheet,Dimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native';


export default function CategoriaCard({data}) 
{
    const navigation = useNavigation()
    return (
            <TouchableOpacity
                onPress={()=>navigation.navigate('tab',
                {
                    screen:'home',
                    params:{categoria:data.name}
                }
                    )}
                activeOpacity={0.5} style={styles.categoriaInfo}>
                <Image source={{uri:data.image}} style={{width:50,height:50,borderRadius:5}}/>
                <Text style={styles.txt}>
                    {data.name}
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
