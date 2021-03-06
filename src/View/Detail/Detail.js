import React,{useState}  from 'react'
import { View,Image,Text,TouchableOpacity, TextInput,KeyboardAvoidingView} from 'react-native'
import { Divider } from 'react-native-elements'
import Autenticacao from '../../data/BackEnd/Autenticacao'
import styles from './Style'





const corPrimaria = '#2CBF88'

export default function Detail({navigation}) 
{
    const [senha, setsenha] = useState('')
    const [email, setemail] = useState('')
    const criarUser = async () => 
    {
        const mail = email
        const pass = senha
        Autenticacao.CriarContaEmailSenha(mail,pass,navigation)
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
                        <Text>Detalhes</Text>
                        <TouchableOpacity onPress={()=> criarUser()}>
                            <Text style={styles.txtConfirmar}>CONFIRMAR</Text>
                        </TouchableOpacity>
                    </View>
                    <Divider style={{width:'100%',height:1,marginBottom:10,marginTop:10}}/>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="E-mail" style={styles.detailInput} onChangeText={(e)=> setemail(e)}/>
                        <TextInput placeholder="Senha" secureTextEntry style={styles.detailInput} onChangeText={(e)=> setsenha(e)}/>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}
