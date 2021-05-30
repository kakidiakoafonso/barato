import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


//Screen Imports
import Detail from './View/Detail/Detail'
import Sign from './View/Sign/Sign'
import SignUpTelefone from './View/SignUpTelefone/SignUpTelefone'
import Splash from './View/Splash'
import Verify from './View/Verify/Verify'
import Enderecos from './View/Enderecos/Enderecos';
import MapaView from './View/Mapa/MapaView';
import LoginEmailView from './View/LoginComEmail/LoginEmailView';





//Contexts
import ContextUsuario from './data/Contexts/ContextUsuario';
import GlobalConfigContext from './data/Contexts/GlobalConfigContext';

const Stack = createStackNavigator()

export default function SignUpRoute() 
{
  return (
    <ContextUsuario>
      <GlobalConfigContext>
                    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='loginEmail'>
                          <Stack.Screen name='splash' component={Splash} />
                          <Stack.Screen name='sign' component={Sign}  />
                          <Stack.Screen name='mapa' component={MapaView}  />
                          <Stack.Screen name='loginEmail' component={LoginEmailView}  />
                          <Stack.Screen name='verify' component={Verify} />
                          <Stack.Screen name='signuptelefone' component={SignUpTelefone} />
                          <Stack.Screen name='enderecos' component={Enderecos} />
                          <Stack.Screen name='detail' component={Detail}/>
                    </Stack.Navigator>
        </GlobalConfigContext>
    </ContextUsuario>
  );
}





