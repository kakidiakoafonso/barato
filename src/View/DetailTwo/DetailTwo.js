import React,{useEffect}  from 'react'
import { View,Image,Text,TouchableOpacity, TextInput,KeyboardAvoidingView} from 'react-native'
import { Divider } from 'react-native-elements'
import Dao from '../../data/BackEnd/Dao'
import styles from './Style'





const corPrimaria = '#2CBF88'

export default function DetailTwo({navigation,route}) 
{
    //const {email} = route.params

    const cli = (email)=>{Dao.newUserAdd(email)}

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
               
                <Image source={require('./../../assets/img/logo.png')} 
                style={styles.logo}/>
            </View>
            <KeyboardAvoidingView behavior='padding' style={styles.contentView}>
                <View style={{height:'55%',width:300,justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text>Detalhes pessoais</Text>
                        <TouchableOpacity onPress={()=> cli("emailghhhh")}>
                            <Text style={styles.txtConfirmar}>CONFIRMAR</Text>
                        </TouchableOpacity>
                    </View>
                    <Divider style={{width:'100%',height:1,marginBottom:10,marginTop:10}}/>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Nome completo" style={styles.detailInput}/>
                        <TextInput placeholder="Telefone" style={styles.detailInput}/>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}
