import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'
import LocationIcon from "../../assets/svg/Grupo 647.svg";
import DeleteIcon from '../../assets/svg/delete.svg'
import style from "./Style";
import {Icon } from 'native-base';
import { useNavigation } from '@react-navigation/core';
import { ScrollView } from 'react-native';

export default function Enderecos() 
{
    const navigation = useNavigation()
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <View style={style.header}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icon name='left' type='AntDesign' style={style.icon}/>
                </TouchableOpacity>
                
            </View>
            <Text style={style.TxtEnderecos}>Endereços</Text>
            <ScrollView style={{backgroundColor:'#fff',flex:1}}>

                <View style={style.itemContainer}>
                    <View style={style.itemWrapper}>
                        <LocationIcon width={40} height={40}/>
                        <View style={{marginLeft:20}}>
                            <Text style={style.txtprimeiro}>Kilamba, Luanda</Text>
                            <Text style={style.txtSegundo}>Bloco 1, Ap 12</Text>
                            <Text style={style.txtTerceiro}>945176405</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={style.btnDelete}>
                        <DeleteIcon width={30} height={30}/>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
            <TouchableOpacity activeOpacity={0.6} style={style.btnAdd}>
                    <Icon name='plus' type='AntDesign' style={style.addIcon}/>
            </TouchableOpacity>
        </View>
    )
}
