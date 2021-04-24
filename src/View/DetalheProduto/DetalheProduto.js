import React from 'react'
import { View, Text ,Image,TouchableOpacity} from 'react-native'
import { Header,Left,Button,Icon,Body,Title,Right } from 'native-base'
import style from './Style'

//SVG
import IconVoltar from '../../assets/svg/arrow-left-short.svg'
import IconCarrinho from '../../assets/svg/Grupo 484.svg'

export default function DetalheProduto({navigation}) {
    return (
        <View style={style.container}>
            <Header style={{backgroundColor:'#2cbf88'}}>
                <Left>
                    <TouchableOpacity  onPress={()=> navigation.goBack()}
                        style={{width:50}}>
                        <IconVoltar widht={50} height={50} />
                    </TouchableOpacity>
                </Left>
                <Right>
                    <IconCarrinho widht={50} height={50}/>
                </Right>
            </Header>
        
        <View style={style.wrapper}>
            <View style={{width:'100%',height:200,alignItems:'center'}}>
                <Image source={{uri:'https://onisafra.com/manaus/wp-content/uploads/2020/03/abacate-01.jpg'}}
                style={{width:200,height:200}}/>
            </View>

            <View style={style.bottom}>
                <View>
                    <Text></Text>
                </View>
                <View></View>
                <View></View>
            </View>
        </View>
        </View>
    )
}
