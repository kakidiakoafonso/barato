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


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <TabRoute/>
    </NavigationContainer>
  );
}


const Tab = createBottomTabNavigator();
const TabRoute = () =>{
    return (
    <Tab.Navigator tabBar={(props)=><TabBar {...props}/>} >
        <Tab.Screen name="home" component={Home} 
            initialParams={{titulo:'Home',icon: ()=> <HomeIcon width={20} height={20}/>, icon2: ()=> <HomeIcon2 width={20} height={20} />}} />
        <Tab.Screen name="carrinho" component={Carrinho} 
            initialParams={{titulo:'Carrinho',icon: ()=> <CarrinhoIcon width={20} height={20}/>,icon2: ()=> <CarrinhoIcon2 width={20} height={20}/>}}/>
        <Tab.Screen name='favoritos' component={Favoritos} 
            initialParams={{titulo:'Favoritos',icon: ()=> <FavoritoIcon width={20} height={20}/>,icon2: ()=> <FavoritoIcon2 width={20} height={20}/>}}/>
        <Tab.Screen name='perfil' component={Perfil}  
            initialParams={{titulo:'Perfil',icon: ()=> <PerfilIcon width={20} height={20}/>,icon2: ()=> <PerfilIcon2 width={20} height={20}/>}}/>
        {/*<Tab.Screen name="categorias" component={Categorias} /> */}
    </Tab.Navigator>
)}



const StackRoute = () =>{
    return (
        <Drawer.Navigator >
        <Drawer.Screen name="categorias" component={TabRoute} />
        <Drawer.Screen name='splash' component={Splash} />
        <Drawer.Screen name='sign' component={Sign}  />
        <Drawer.Screen  name='detail' component={Detail} />
        <Drawer.Screen name='verify' component={Verify} />
        <Drawer.Screen name='signuptelefone' component={SignUpTelefone} />
        </Drawer.Navigator>
)}