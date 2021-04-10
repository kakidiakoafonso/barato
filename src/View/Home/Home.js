import React from 'react'
import { View, Text,TextInput, ScrollView,Image, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Icon} from 'native-base'
import styles from './Style'

//Components
import CategoriaCard from '../Components/CategoriaCard'

//Dados
import CategoriaData  from '../../data/API'
import HomeCategoriaScrollView from '../Components/HomeCategoriaScrollView';
import HomeItemComponent from '../Components/HomeItemComponent';
//Dados do Produto
import {produtos} from '../../data/API'


export default function Home({navigation , route}) 
{
    const {categoria} = route.params
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                 <Text style={{fontSize:30, color:'white',fontWeight:'bold'}}>Barato</Text>
                
                <View style={styles.inputWraper}>
                    <TextInput placeholder={"Pesquisar"}
                        style={{width:'80%'}}
                        placeholderTextColor={'#ccc'}/>
                    <Icon name="search-outline" type='Ionicons' style={styles.iconSearch}/>
                </View>
            </View>
        
        <View style={{flex:1}}>
            <View style={{height:120}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        CategoriaData.map((e, key)=>(
                            <HomeCategoriaScrollView key={key} img={e.img} titulo={e.titulo} />
                            
                        ))
                    }
                </ScrollView>
            </View>
            <View style={{flex:1}}>
                <Text style={{fontSize:20}}> {categoria}</Text>
                <View style={{flex:1,marginTop:5,flexDirection:'row',flexWrap:'wrap'}}>
                    {
                        produtos.map((item,i)=>(
                            <HomeItemComponent key={i} item={item}/>
                        ))
                    }
                </View>
            </View>
            

        </View>
        </View>
    )
}


//style={{flex:1,marginTop:5,flexDirection:'row',flexWrap:'wrap'}}

/*


<View style={{flex:1,marginTop:5,flexDirection:'row',flexWrap:'wrap'}}>
                    <HomeItemComponent/>
                    <HomeItemComponent/>
                    <HomeItemComponent/>
                    <HomeItemComponent/>
                </View>


*/