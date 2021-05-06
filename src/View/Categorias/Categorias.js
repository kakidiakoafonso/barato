import { Icon } from 'native-base'
import React,{useEffect,useState} from 'react'
import { View, Text, TextInput,ActivityIndicator} from 'react-native'
import CategoriaCard from '../Components/CategoriaCard'
import styles from './Style'


//SVG's
import Frutas from '../../assets/svg/healthy-food.svg'
import Pestisco from '../../assets/svg/Grupo 280.svg'
import Condimento from '../../assets/svg/condimentos.svg'
import Alcool from '../../assets/svg/Grupo 259.svg'
import Bebidas from '../../assets/svg/Grupo 258.svg'

import Padaria from '../../assets/svg/Grupo 264.svg'
import Cha from '../../assets/svg/Grupo 293.svg'
import Lacticios from '../../assets/svg/Grupo 263.svg'
import Bioseguranca from '../../assets/svg/Caminho 170.svg'
import Higiene from '../../assets/svg/artigos-de-higiene-pessoal.svg'


//Dados
import CategoriaData ,{prodList} from '../../data/API'
import axios from 'axios'


const categorias = [1,2,3,4,5,6,7,8,9,10,11,12]
export default function Categorias() 
{
    const [categorias, setcategorias] = useState([])
    useEffect(() =>
    {
        getData()
    },[])

    async function getData() 
    {
        axios.get("https://baratoserver.herokuapp.com/api/v1/categories").
        then((resposta)=>
        {
            //console.log(resposta.data)
            setcategorias(resposta.data)
        }).catch((erro)=>
        {
            console.log(erro)
        })

    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View >
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.txtPara}>Entrega para</Text>
                        <Icon name='down' type='AntDesign'style={styles.down}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Icon name="map-marker-outline" type='MaterialCommunityIcons' style={styles.posicao}/>
                        <Text style={styles.txtLocalizacaoAtual}>Kilamba, Luanda</Text>
                    </View>
                </View>
                <View style={styles.inputWraper}>
                    <TextInput placeholder={"Pesquisar"}
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
                 categorias.map((dados, key)=>(
                    <CategoriaCard key={key}  data={dados}/>
                   ))
               }

            </View>
        </View>
        </View>
    )
}

