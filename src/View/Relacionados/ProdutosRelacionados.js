import React,{useContext} from 'react'
import { View, Text,TouchableOpacity,ScrollView } from 'react-native'
import { Body,Title, Header,Left,Right,Badge } from 'native-base'


//SVGs
import IconVoltar from '../../assets/svg/arrow-left-short.svg'
import IconCarrinho from '../../assets/svg/Grupo 484.svg'

//Components
import DetalheItemComponent from '../Components/DetalheItemComponent'

//Contexts
import {Carrinho as CarrinhoInfos} from '../../data/Contexts/ContextCarrinho'

export default function ProdutosRelacionados({navigation}) 
{
    const {carrinhoDados} = useContext(CarrinhoInfos)
    return (
        <View style={{flex:1}}>
            <Header style={{backgroundColor:'#2cbf88'}}>
                <Left children=
                {
                    <TouchableOpacity  onPress={()=> navigation.goBack()}
                        style={{width:50}}>
                        <IconVoltar widht={50} height={50} />
                    </TouchableOpacity>
                }/>
                
                    <View style={{alignSelf:'center',marginHorizontal:'20%'}}>
                        <Title>Produtos Relacionados</Title>
                    </View>
                
                <Right 
                children=
                {
                    <View>
                        <IconCarrinho widht={50} height={50}/>
                        <Badge style={{position:'absolute',width:20,height:20,
                            backgroundColor:'#a7ce39',bottom:20,left:8}}>
                            <Text>{carrinhoDados.length}</Text>
                        </Badge>
                    </View>
                }
                />
            </Header>
        
        <View style={{flex:1,flexDirection:'row'}}>
                <DetalheItemComponent/>
                <DetalheItemComponent/>
                <DetalheItemComponent/>
                <DetalheItemComponent/>
        </View>

        </View>
    )
}
