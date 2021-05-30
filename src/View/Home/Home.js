import React,{useEffect,useContext,useState} from 'react'
import { View, Text,TextInput, ScrollView,ActivityIndicator } from 'react-native'
import { Icon} from 'native-base'
import styles from './Style'

//Components
import CategoriaCard from '../Components/CategoriaCard'


import HomeCategoriaScrollView from '../Components/HomeCategoriaScrollView';
import HomeItemComponent from '../Components/HomeItemComponent';

//Context
import { Produtos } from "../../data/Contexts/ContextProdutos";

export default function Home({navigation , route}) 
{
    const {categoria} = route.params
    const {produtos, getProdutos,categorias,pesquisarProdutos} = useContext(Produtos)
    useEffect(()=> {getProdutos(setloading)},[])
    const [loading, setloading] = useState(true)
    
    
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                 <Text style={{fontSize:30, color:'white',fontFamily:'Montserrat-Bold'}}>Barato</Text>
                
                <View style={styles.inputWraper}>
                    <TextInput placeholder={"Pesquisar"} onChangeText={(e)=> pesquisarProdutos(setloading,e)}
                        style={{width:'80%',fontFamily:'Montserrat-Regular'}}
                        placeholderTextColor={'#ccc'}/>
                    <Icon name="search-outline" type='Ionicons' style={styles.iconSearch}/>
                </View>
            </View>
        
        <View style={{flex:1}}>
            <View style={{height:120}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        categorias.map((e, key)=>(
                            <HomeCategoriaScrollView key={key} img={e.image} titulo={e.name} />                            
                        ))
                    }
                </ScrollView>
            </View>
            <View style={{flex:1}}>
                <Text style={{fontSize:20,fontFamily:'Montserrat-Regular',textTransform:'capitalize'}}> {categoria}</Text>
                <View style={{flex:1,marginTop:5,flexDirection:'row',flexWrap:'wrap'}}>
                    {
                       loading ? 
                       <View style={{width:'100%',height:'60%',alignItems:'center',justifyContent:'center'}}>
                                <ActivityIndicator size="large" color="#00ff00"/>
                       </View> : produtos.map((item,i)=>(
                            <HomeItemComponent key={i} item={item}/>
                        ))
                    }
                </View>
            </View>
            

        </View>
        </View>
    )
}

