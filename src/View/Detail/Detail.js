import React  from 'react'
import { View,Image,Text,TouchableOpacity, TextInput,KeyboardAvoidingView} from 'react-native'
import { Divider } from 'react-native-elements'
import styles from './Style'





const corPrimaria = '#2CBF88'

export default function Detail({navigation}) 
{

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
                        <TouchableOpacity >
                            <Text style={styles.txtConfirmar}>CONFIRMAR</Text>
                        </TouchableOpacity>
                    </View>
                    <Divider style={{width:'100%',height:1,marginBottom:10,marginTop:10}}/>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder="Nome completo" style={styles.detailInput}/>
                        <TextInput placeholder="E-mail" style={styles.detailInput}/>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}
