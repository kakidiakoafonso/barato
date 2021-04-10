import { Header,Left,Button,Icon,Body,Title,Right } from 'native-base'
import React,{useState} from 'react'
import { View, Image,Text,TouchableOpacity, ScrollView } from 'react-native'
import style from './Style'

//SVG
import IconVoltar from '../../assets/svg/arrow-left-short.svg'
import CarrinhoVazio from '../../assets/svg/Grupo 484.svg'
import DeleteIcon from '../../assets/svg/delete.svg'
import CarinhoItens from '../Components/CarinhoItens'

export default function Carrinho({navigation}) 
{
    const [carrinhoVazio, setcarrinhoVazio] = useState(false)
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
                    <Title>Carrinho</Title>
                </Body>
            </Header>
            {
                carrinhoVazio? <CarrinhoVazioComponent/> : <CarrinhoComponent/>
            }
        </View>
    )
}






const CarrinhoComponent =()=>
{
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
            <CarinhoItens/>
            <CarinhoItens/>
            <CarinhoItens/>
            <CarinhoItens/>
        </ScrollView>
    )
}






const CarrinhoVazioComponent = ()=>
{
    return(
        <View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                <View style={style.svgContainer}>
                    <CarrinhoVazio width={100} height={150} />
                </View>
                <View style={{width:200,alignItems:'center',marginTop:20}}>
                    <Text style={style.txtNenum}>Nenhum item</Text>
                    <Text style={style.txtadd}>Adicionado</Text>
                </View>
            </View>
    )
}