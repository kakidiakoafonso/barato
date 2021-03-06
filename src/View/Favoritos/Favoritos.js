import React, { useEffect ,useContext} from 'react'
import { View, Text ,Image,TouchableOpacity} from 'react-native'
import { Header,Left,Button,Icon,Body,Title,Right } from 'native-base'
import style from './Style'


//SVG
import IconVoltar from '../../assets/svg/arrow-left-short.svg'
import FavoritoItem from './FavoritoItem'

//Context
import { Produtos } from "../../data/Contexts/ContextProdutos";


export default function Favoritos({navigation}) 
{
    const {setFavoritos,favoritos} = useContext(Produtos)
    useEffect(()=> setFavoritos(),[])
    return (
        <View style={style.container}>
            <Header style={{backgroundColor:'#2cbf88'}}>
                <Left>
                    <TouchableOpacity  onPress={()=> navigation.goBack()}
                        style={{width:50}}>
                        <IconVoltar widht={50} height={50} />
                    </TouchableOpacity>
                </Left>
                <Body style={{marginLeft:50}}>
                    <Title>Favoritos</Title>
                </Body>
            </Header>
        
            <FavoritoItem/>
            
            <TouchableOpacity  onPress={()=> setFavoritos()}
                        style={{width:50,marginTop:20}}>
                        <Text>Click</Text>
            </TouchableOpacity>
    
        </View>
    )
}
