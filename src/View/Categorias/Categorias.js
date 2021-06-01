import { Icon } from 'native-base'
import React,{useEffect,useState,useContext} from 'react'
import { View, Text, TextInput,ActivityIndicator} from 'react-native'
import CategoriaCard from '../Components/CategoriaCard'
import styles from './Style'



//Context
import { Produtos } from "../../data/Contexts/ContextProdutos";
import { UserContext} from "../../data/Contexts/ContextUsuario";


export default function Categorias() 
{
    const {getCategorias,categorias,PesquisaCategoria} = useContext(Produtos)  
    const {token,getUserInfo} = useContext(UserContext)  
    useEffect(()=>{getCategorias(setloading)},[]) 

    const [loading, setloading] = useState(true)
    useEffect(()=> getUserInfo(token),[])
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View >
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.txtPara}>Entrega para {token}</Text>
                        <Icon name='down' type='AntDesign'style={styles.down}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Icon name="map-marker-outline" type='MaterialCommunityIcons' style={styles.posicao}/>
                        <Text style={styles.txtLocalizacaoAtual}>Kilamba, Luanda</Text>
                    </View>
                </View>
                <View style={styles.inputWraper}>
                    <TextInput placeholder={"Pesquisar"} 
                    
                    onChangeText={texto=> PesquisaCategoria(texto)}
                        style={{width:'80%'}}
                        placeholderTextColor={'#ccc'}/>
                    <Icon name="search-outline" type='Ionicons' style={styles.iconSearch}/>
                </View>
            </View>
        
        <View style={{flex:1}}>
            <View style={{marginBottom:10,marginTop:10}}>
                <Text style={styles.txtCategorias}>Categorias</Text>
            </View>
            <View style={styles.categoriasWraper}>
               {
                   loading ? 
                   <View style={{width:'100%',height:'60%',alignItems:'center',justifyContent:'center'}}>
                            <ActivityIndicator size="large" color="#00ff00"/>
                   </View>
                   
                   : categorias.map((dados,key)=>(
                    <CategoriaCard key={key}  data={dados}/>
                   ))
               }
            </View>
        </View>
        </View>
    )
}

