import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//Screen Imports
import Categorias from './View/Categorias/Categorias'
import Detail from './View/Detail/Detail'
import Sign from './View/Sign/Sign'
import SignUpTelefone from './View/SignUpTelefone/SignUpTelefone'
import Splash from './View/Splash'
import Verify from './View/Verify/Verify'
import Home from './View/Home/Home';
import Carrinho from './View/Carrinho/Carrinho';
import Favoritos from './View/Favoritos/Favoritos';
import Perfil from './View/Perfil/Perfil';
import DetalheProduto from './View/DetalheProduto/DetalheProduto';
import Encomenda from './View/Encomenda/Encomenda';
import InformacoesPessoais from './View/InfromacoesPessoais/InformacoesPessoais';

//Components
import TabBar from './View/Components/TabBar';

//Cores 
const corPrimaria = '#2CBF88'
const corSecudaria = '#313131'
const corTerciaria = '#efefef'


//SVG
import CarrinhoIcon from './assets/svg/Grupo 481.svg'
import CarrinhoIcon2 from './assets/svg/Grupo 368.svg'
import HomeIcon from './assets/svg/house-1.svg'
import HomeIcon2 from './assets/svg//house.svg'
import FavoritoIcon2 from './assets/svg/suit-heart.svg'
import FavoritoIcon from './assets/svg/suit-heart-1.svg'
import PerfilIcon2 from './assets/svg/person.svg'
import PerfilIcon from './assets/svg/person-1.svg'



//Contexts
import ContextUsuario from './data/Contexts/ContextUsuario';
import ContextProdutos from './data/Contexts/ContextProdutos';
import ContextCarrinho from './data/Contexts/ContextCarrinho';
import ProdutosRelacionados from './View/Relacionados/ProdutosRelacionados';
import Enderecos from './View/Enderecos/Enderecos';
import MapaView from './View/Mapa/MapaView';

const Stack = createStackNavigator()

export default function SignInRoute() 
{
  return (
    <ContextUsuario>
      <ContextProdutos>
        <ContextCarrinho>
                    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='tab'>
                          <Stack.Screen name={'categorias'} component={Categorias} options={{headerShown:false}}/>
                          <Stack.Screen  name='detail' component={Detail} />
                          <Stack.Screen  name='detailProduto' component={DetalheProduto} />
                          <Stack.Screen name='verify' component={Verify} />
                          <Stack.Screen name='signuptelefone' component={SignUpTelefone} />
                          <Stack.Screen name='enderecos' component={Enderecos} />
                          <Stack.Screen name='encomenda' component={Encomenda}/>
                          <Stack.Screen name='informacoespessoais' component={InformacoesPessoais}/>
                          <Stack.Screen name='produtosrelacionados' component={ProdutosRelacionados}/>
                          <Stack.Screen name={'tab'} component={TabRoute} options={{headerShown:false}}/>
                    </Stack.Navigator>
        </ContextCarrinho>
    </ContextProdutos>
    </ContextUsuario>
  );
}


const Tab = createBottomTabNavigator();
const TabRoute = () =>{
    return (
    <Tab.Navigator tabBar={(props)=><TabBar {...props}/>} initialRouteName='perfil' >
        <Tab.Screen name="home" component={Home} 
            initialParams={{titulo:'Home',icon: ()=> <HomeIcon width={30} height={30}/>, icon2: ()=> <HomeIcon2 width={30} height={30} />}} />
        <Tab.Screen name="carrinho" component={Carrinho} 
            initialParams={{titulo:'Carrinho',icon: ()=> <CarrinhoIcon width={30} height={30}/>,icon2: ()=> <CarrinhoIcon2 width={30} height={30}/>}}/>
        <Tab.Screen name='favoritos' component={Favoritos} 
            initialParams={{titulo:'Favoritos',icon: ()=> <FavoritoIcon width={30} height={30}/>,icon2: ()=> <FavoritoIcon2 width={30} height={30}/>}}/>
        <Tab.Screen name='perfil' component={Perfil}  
            initialParams={{titulo:'Perfil',icon: ()=> <PerfilIcon width={30} height={30}/>,icon2: ()=> <PerfilIcon2 width={30} height={30}/>}}/>
    </Tab.Navigator>
)}



