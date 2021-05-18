import React,{useContext} from 'react'
import { View, Text ,Image,TouchableOpacity, ScrollView} from 'react-native'
import { Header,Left,Button,Icon,Body,Title,Right,Badge } from 'native-base'
import style from './Style'

//SVG
import IconVoltar from '../../assets/svg/arrow-left-short.svg'
import IconAvancar from '../../assets/svg/arrow-left-short.svg'
import IconCarrinho from '../../assets/svg/Grupo 484.svg'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import DetalheItemComponent from '../Components/DetalheItemComponent'

//Contexts
import {Carrinho as CarrinhoInfos} from '../../data/Contexts/ContextCarrinho'

export default function DetalheProduto({navigation}) 
{
    const {carrinhoDados} = useContext(CarrinhoInfos)
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
                    <View>
                        <IconCarrinho widht={50} height={50}/>
                        <Badge style={{position:'absolute',width:20,height:20,
                            backgroundColor:'#a7ce39',bottom:20,left:8}}>
                            <Text>{carrinhoDados.length}</Text>
                        </Badge>
                    </View>
                </Right>
            </Header>
        
        <View style={style.wrapper}>
            <View style={{width:'100%',height:200,alignItems:'center'}}>
                <Image source={{uri:'https://onisafra.com/manaus/wp-content/uploads/2020/03/abacate-01.jpg'}}
                style={{width:200,height:200}}/>
            </View>

            <View style={style.bottom}>
                <View style={{height:'25%',width:'100%',alignItems:'center',justifyContent:'flex-end'}}>
                   <View style={{width:'85%',height:'85%',justifyContent:'space-between',
                    flexDirection:'row'}}>
                        <View>
                            <Text style={style.TextNome}>Abacate</Text>
                            <Text style={style.TextDescricao}>100 KG</Text>
                            <Text style={style.TextPreco}>100 KZ</Text>
                        </View>
                        <Icon name='heart' style={{color:'red'}}/>
                   </View>
                </View>


                <Divider style={{height:2,backgroundColor:'white',width:'90%',marginTop:5}}/>


                <View style={{height:'55%',width:'100%',alignItems:'center'}}>
                    <View style={{width:'90%',height:'100%',justifyContent:'space-between',
                        flexDirection:'column'}}>
                        <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',
                            marginTop:5}}>
                            <Text style={style.txtProdutosRelacionados}>Produtos relacionados</Text>
                            <TouchableOpacity onPress={()=>navigation.navigate('produtosrelacionados')}
                                style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={style.txtMaisProdutos}>Ver mais</Text>
                                <Icon name='right' type='AntDesign' style={{color:'#2cbf88',fontSize:18}}/>
                            </TouchableOpacity>
                        </View>
                        
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <DetalheItemComponent/>
                            <DetalheItemComponent/>
                            <DetalheItemComponent/>
                        </ScrollView>
                        </View>

                        <Divider style={{height:2,backgroundColor:'white',width:'90%'}}/>
                </View>
                <View style={{height:'20%',width:'100%',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={style.btnView}>
                                <TouchableOpacity style={style.btnControllerLefth}>
                                    <Icon name='minus' type='AntDesign' style={{fontSize:20,marginRight:5, color:'#000'}}/>
                                </TouchableOpacity>
                                <Text style={style.txtQuantidade}>0</Text>
                                <TouchableOpacity style={style.btnControllerRight}>
                                    <Icon name='plus' type='AntDesign' style={{fontSize:20,marginRight:5, color:'#000'}}/>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity activeOpacity={0.6} style={style.btnCompra} onPress={()=>navigation.navigate('encomenda')}>
                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                    <IconCarrinho widht={15} height={15}/>
                                    <Text style={style.txtCompra}>Comprar</Text>
                                </View>
                                <Text style={style.txtPrecoVenda}>200 KZ</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        </View>
    )
}
