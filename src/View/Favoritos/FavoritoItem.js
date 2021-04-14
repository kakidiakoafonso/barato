import React from 'react'
import { View, Text ,Image,TouchableOpacity} from 'react-native'
import { Icon } from 'native-base'

import Coracao from '../../assets/svg/suit-heart-fill.svg'

export default function FavoritoItem() {
    return (
        <View style={{flexDirection:'row', height:100, width:'95%',alignItems:'center',alignSelf:'center'
            ,borderRadius:10,elevation:1,marginTop:15,paddingHorizontal:10}}>
                <Image source={{uri:'https://veja.abril.com.br/wp-content/uploads/2018/11/saide-cerveja-gim-20180225-004.jpg'}}
                    style={{width:80,height:80,borderRadius:10}}/>
                <View style={{width:'75%'}}>
                    <View style={{height:'45%',flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{justifyContent:'space-between',marginTop:10,marginLeft:10}}>
                            <Text>Manga</Text>
                            <Text>100 KG</Text>
                        </View>
                        <TouchableOpacity>
                            <Coracao width={20} height={20}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:'45%',justifyContent:'space-between',alignItems:'flex-end',flexDirection:'row'}}>
                        <TouchableOpacity activeOpacity={0.5} style={{borderColor:'#2cbf88',borderWidth:1,width:120,alignItems:'center',
                            height:25,justifyContent:'center',borderRadius:13,marginLeft:10}}>
                            <Text style={{color:'#2cbf88'}}>Adicionar</Text>
                        </TouchableOpacity>
                        <Text style={{fontWeight:'bold'}}>100 KZ</Text>
                    </View>
                </View>
        </View>
    )
}
