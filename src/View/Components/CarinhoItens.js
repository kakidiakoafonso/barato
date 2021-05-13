import { Header,Left,Button,Icon,Body,Title,Right } from 'native-base'
import React,{useState} from 'react'
import { View, Image,Text,TouchableOpacity} from 'react-native'

//SVG
import IconVoltar from '../../assets/svg/arrow-left-short.svg'
import CarrinhoVazio from '../../assets/svg/Grupo 484.svg'
import DeleteIcon from '../../assets/svg/delete.svg'

export default function CarinhoItens() {
    return (
        <View activeOpacity={0.99} style={{height:150,margin:10,borderRadius:5,
            borderWidth:1,borderColor:'#cecece',elevation:1,
            justifyContent:'center',flexDirection:'row',alignItems:'center'
            }}>
                <TouchableOpacity activeOpacity={0.6}>
                    <Image source={{uri:'https://veja.abril.com.br/wp-content/uploads/2018/11/saide-cerveja-gim-20180225-004.jpg'}}
                    style={{width:100,height:100,borderRadius:10}}/>
                </TouchableOpacity>
                
                <View style={{width:'60%',height:100,justifyContent:'space-between',marginLeft:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <Text style={{color:'#323232',fontFamily:'Montserrat-Regular'}}>Manga</Text>
                            <Text style={{color:'#323232',fontFamily:'Montserrat-Regular'}}>100 KG</Text>
                        </View>
                        <TouchableOpacity>
                            <DeleteIcon width={20} height={20}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row', backgroundColor:'#2cbf88',
                            width:100,justifyContent:'space-evenly',alignItems:'center',
                            height:22,borderRadius:15
                        }}>
                           <TouchableOpacity>
                                <Icon name='minus' type='AntDesign' style={{fontSize:16, color:'white'}}/>
                           </TouchableOpacity>

                            <Text style={{fontSize:14,fontFamily:'Montserrat-Bold',color:'white'}}>1</Text>

                            <TouchableOpacity>
                                <Icon name='plus' type='AntDesign' style={{fontSize:16,color:'white'}}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={{fontFamily:'Montserrat-Regular'}}>100 Kz</Text>
                    </View>
                </View>
        </View>
    )
}
