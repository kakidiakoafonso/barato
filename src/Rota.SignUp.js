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
import LoginEmailView from './View/LoginComEmail/LoginEmailView';

const Stack = createStackNavigator()

export default function LogadoRoute() 
{
  return (
    <ContextUsuario>
                  <NavigationContainer>
                    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='splash'>
                          <Stack.Screen name='splash' component={Splash} />
                          <Stack.Screen name='sign' component={Sign}  />
                          <Stack.Screen name='mapa' component={MapaView}  />
                          <Stack.Screen name='loginEmail' component={LoginEmailView}  />
                          <Stack.Screen name='verify' component={Verify} />
                          <Stack.Screen name='signuptelefone' component={SignUpTelefone} />
                          <Stack.Screen name='enderecos' component={Enderecos} />
                          <Stack.Screen name='detail' component={Detail}/>
                    </Stack.Navigator>
                  </NavigationContainer>
    </ContextUsuario>
  );
}





