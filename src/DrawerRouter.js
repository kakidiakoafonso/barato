import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//Screen Imports
import Categorias from './View/Categorias/Categorias'
import Detail from './View/Detail/Detail'
import Sign from './View/Sign/Sign'
import SignUpTelefone from './View/SignUpTelefone/SignUpTelefone'
import Splash from './View/Splash'
import Verify from './View/Verify/Verify'

//Cores 
const corPrimaria = '#2CBF88'
const corSecudaria = '#313131'
const corTerciaria = '#efefef'

const Drawer = createDrawerNavigator();

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
    <Tab.Navigator>
        <Tab.Screen name="categorias" component={Categorias} />
        <Tab.Screen name='splash' component={Splash} />
        <Tab.Screen name='sign' component={Sign}  />
        <Tab.Screen  name='detail' component={Detail} />
        <Tab.Screen name='verify' component={Verify} />
        <Tab.Screen name='signuptelefone' component={SignUpTelefone} />
    </Tab.Navigator>
)}



const DrawerRoute = () =>{
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