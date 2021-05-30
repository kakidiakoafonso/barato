import React,{useState}  from 'react'
import { View,Image,Text,TouchableOpacity, TextInput,KeyboardAvoidingView} from 'react-native'
import { Divider } from 'react-native-elements'
import styles from './Style'

//BackEnd
import Autenticacao from "../../data/BackEnd/Autenticacao";

const corPrimaria = '#2CBF88'

export default function LoginComEmail({navigation}) 
{
    const [email, setemail] = useState('')
    const [senha, setsenha] = useState("")

    const logar= ()=>
    {
        const Senha = senha
        const Email = email
        Autenticacao.AutententicarComEmailESenha(Email,Senha)
        
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
                        <Text>Entre na sua conta</Text>
                        <TouchableOpacity onPress={()=>logar()}>
                            <Text style={styles.txtConfirmar}>ENTRAR</Text>
                        </TouchableOpacity>
                    </View>
                    <Divider style={{width:'100%',height:1,marginBottom:10,marginTop:10}}/>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Email" onChangeText={e=> setemail(e)} style={styles.detailInput}/>
                        <TextInput placeholder="Senha" onChangeText={e=> setsenha(e)} style={styles.detailInput}/>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}
