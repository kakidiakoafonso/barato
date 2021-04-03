import React from 'react'
import { View, Text, TextInput ,TouchableOpacity} from 'react-native'
import styles from './Style'

const values = []
const itens = [1,2,3,4,5,6]
export default function Verify({navigation}) 
{
   
    const atualItem = (valor)=>
    {
        if(valor!=='')
        {
            values.push(valor)
            console.log(values)
        }
    }
    return (
        <View style={styles.container}>
            <View style={{width:'100%',alignItems:'center'}}>
                <View style={styles.wraper}>
                    
                    <View> 
                        <Text style={styles.txtCodigo}>
                            Verifica o código
                        </Text>
                        <Text style={styles.txtInfoTexto}>Digite o código de 6 digitos</Text>
                        <Text style={[styles.txtInfoTexto,{marginBottom:10}]}>que enviamos para 945176405</Text>
                        <Text style={styles.txtNumero}>945176405</Text>
                    </View>
                    <View style={styles.itens}>
                        {
                            itens.map((e,i)=>
                            (<TextInput key={i} style={styles.txtItens}
                                keyboardType='numeric'
                                maxLength={1}
                                onChangeText={(e)=>atualItem(e)}
                            />))
                        }
                    </View>
                    <View style={{justifyContent:'space-between',height:70}}>
                        <TouchableOpacity activeOpacity={0.6} style={styles.btn} onPress={()=> navigation.navigate('detail')}>
                            <Text style={styles.txtBtn}>Enviar</Text>
                        </TouchableOpacity>
                    
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.txtInfoTexto}>
                                Não recebeu código?
                            </Text>
                            <TouchableOpacity activeOpacity={0.6} onPress={()=> navigation.navigate('detail')}>
                            <Text style={styles.txtRenviar}>Reenviar em 50s</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
