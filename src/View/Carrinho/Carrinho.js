import { Header,Left,Button,Icon,Body,Title,Right } from 'native-base'
import React,{useState,useContext,useEffect} from 'react'
import { View, Image,Text,TouchableOpacity, ScrollView } from 'react-native'
import style from './Style'

//SVG
import IconVoltar from '../../assets/svg/arrow-left-short.svg'
import CarrinhoVazio from '../../assets/svg/Grupo 484.svg'
import DeleteIcon from '../../assets/svg/delete.svg'
import CarinhoItens from '../Components/CarinhoItens'
import { useNavigation } from '@react-navigation/core'
import {Carrinho as CarrinhoContexto} from '../../data/Contexts/ContextCarrinho'

export default function Carrinho({navigation}) 
{
    const {carrinhoDados} = useContext(CarrinhoContexto)
    const [carrinhoVazio, setcarrinhoVazio] = useState(true)
    useEffect(() => 
    {
        console.log("Qtdade disponivel " + carrinhoDados.length)
        if(carrinhoDados.length!==0) setcarrinhoVazio(false)
        else setcarrinhoVazio(true)
    })
    useEffect(() => 
    {
        console.log("Qtdade disponivel " + carrinhoDados.length)
        if(carrinhoDados.length!==0) setcarrinhoVazio(false)
        else setcarrinhoVazio(true)
    },[carrinhoDados])
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
                carrinhoVazio ? <CarrinhoVazioComponent/> : <CarrinhoComponent  carrinho={carrinhoDados}/>
            }

            
            
        </View>
    )
}






const CarrinhoComponent =({carrinho})=>
{
    const nav = useNavigation()
    return(
        <View  style={{flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
                {
                    carrinho.map((i,key)=>
                    (
                        <CarinhoItens key={key} data={i}/>
                    ))
                }
            </ScrollView>
            
                <TouchableOpacity activeOpacity={0.8} style={style.btnVericar} onPress={()=>nav.navigate('encomenda')}>
                    <Text style={style.btnVericarTxt}>Verificar</Text>
                </TouchableOpacity>
            
        </View>
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