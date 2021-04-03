import { Icon } from 'native-base'
import React from 'react'
import { View, Text ,Image,TouchableOpacity, TextInput} from 'react-native'
import style from './Style'



//Cores
const corPrimaria = '#2CBF88'
const corSecudaria = '#313131'
const corTerciaria = '#efefef'

export default function SignUpTelefone({navigation}) 
{
    return (
        <View style={style.container}>
            <View style={style.wraper}>
                <View style={{width:'80%'}}>
                <Text numberOfLines={2} style={style.txtInfoNumero}>
                    Entra com o seu número
                </Text>
                <Text numberOfLines={2} style={style.txtInfoNumero}>
                     de telefone
                </Text>
                </View>
                <View style={style.dataContainer}>
                    <TouchableOpacity style={style.btnDD}>
                        <Image source={require('./../../assets/img/bandeira.png')}
                            style={{width:30,height:30,borderRadius:15}}/>
                        <Text> + 244</Text>
                        <Icon name='caret-down' type='FontAwesome' style={style.caretIcon}/>
                    </TouchableOpacity>
                    
                    <TextInput placeholder='Seu numero' textContentType={'telephoneNumber'}
                        keyboardType={'number-pad'}
                        style={style.txtNumero}/>
                </View>
                
                <TouchableOpacity activeOpacity={0.6} style={style.btn} onPress={()=> navigation.navigate('verify')}>
                    <Text style={style.txtBtn}>Verificar número</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



