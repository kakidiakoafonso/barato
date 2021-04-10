import React from 'react'
import { View, Text,TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Icon} from 'native-base'
import styles from './Style'

export default function Home() 
{
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.logoIcon}>
                    <Text style={{fontSize:30, color:'white',fontWeight:'bold'}}>Barato</Text>
                    <Icon name="user" type='FontAwesome5' style={styles.iconUser}/>
                </View>
                <View style={styles.inputWraper}>
                    <TextInput placeholder={"Pesquisar"}
                        style={{width:'80%'}}
                        placeholderTextColor={'#ccc'}/>
                    <Icon name="search-outline" type='Ionicons' style={styles.iconSearch}/>
                </View>
            </View>
        
        <View style={{flex:1}}>
            <ScrollView></ScrollView>
        </View>
        </View>
    )
}
