import React,{useState} from 'react'
import { View, Text,TextInput } from 'react-native'
import style from './Style'
import Autenticacao from '../../data/BackEnd/Autenticacao'
import { TouchableOpacity } from 'react-native'

export default function LoginEmailView() 
{
    const [email, setemail] = useState("")
    const [senha, setsenha] = useState("")
    const logar= () => 
    {
        const password = senha
        const Email = email
        Autenticacao.AutententicarComEmailESenha(Email,password)
    }
    return (
        <View style={style.container}>
            <View style={style.wrapper}>
                <TextInput style={style.inputs} onChangeText={e=> setemail(e)}/>
                <TextInput style={style.inputs} onChangeText={e=> setsenha(e)}/>
                <TouchableOpacity onPress={()=>logar()}>
                    <Text>Clicar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
