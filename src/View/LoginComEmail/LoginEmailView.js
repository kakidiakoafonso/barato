import React,{useState,useContext}  from 'react'
import { View,Image,Text,TouchableOpacity, TextInput,KeyboardAvoidingView,ToastAndroid} from 'react-native'
import { Divider } from 'react-native-elements'
import styles from './Style'

//BackEnd
import Autenticacao from "../../data/BackEnd/Autenticacao";

const corPrimaria = '#2CBF88'

export default function LoginComEmail({navigation}) 
{

    const [email, setemail] = useState('')
    const [senha, setsenha] = useState("")
    const logar= ( )=>
    {
        const Senha = senha
        const Email = email
        if(Senha.length>0 && Email.length>0)
            Autenticacao.AutententicarComEmailESenha(Email,Senha,navigation)
        else
            {
                ToastAndroid.showWithGravity(
                    "Email ou senha vazia",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                  );
            }
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
               
                <Image source={require('./../../assets/img/logo.png')} 
                style={styles.logo}/>
            </View>
            <KeyboardAvoidingView behavior='padding' style={styles.contentView}>
                <View style={{height:'55%',width:300,justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        
                        <TouchableOpacity onPress={()=>navigation.navigate('sign')}>
                            <Text style={styles.txtConfirmar}>NÃO TENHO CONTA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>logar()}>
                            <Text style={styles.txtConfirmar}>ENTRAR</Text>
                        </TouchableOpacity>
                    </View>
                    <Divider style={{width:'100%',height:1,marginBottom:10,marginTop:10}}/>
                    <KeyboardAvoidingView behavior='height' style={styles.inputContainer}>
                        <TextInput placeholder="Email" onChangeText={e=> setemail(e)} style={styles.detailInput}/>
                        <TextInput placeholder="Senha" onChangeText={e=> setsenha(e)} style={styles.detailInput}/>
                    </KeyboardAvoidingView>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}
