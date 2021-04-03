import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Icon } from 'native-base'
import React from 'react'
import Detail from './View/Detail/Detail'
import Sign from './View/Sign/Sign'
import SignUpTelefone from './View/SignUpTelefone/SignUpTelefone'
import Splash from './View/Splash'
import Verify from './View/Verify/Verify'

//Cores 
const corPrimaria = '#2CBF88'
const corSecudaria = '#313131'
const corTerciaria = '#efefef'


const Stack = createStackNavigator()
export default function Route() 
{
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name='splash' component={Splash} options={{headerShown:false}}/>
                <Stack.Screen name='sign' component={Sign} options={{headerShown:false}}/>
                <Stack.Screen name='detail' component={Detail} options={{headerShown:false}}/>
                <Stack.Screen name='verify' component={Verify} options={{headerShown:false}}/>
                <Stack.Screen name='signuptelefone' component={SignUpTelefone} 
                options={{headerShown:true,title:'', 
                headerLeft:(props)=>(<Icon name='left' type='AntDesign' 
                    onPress={()=> console.log(props)}
                style={{color:corTerciaria}}/>),
                headerStyle:{backgroundColor:corPrimaria}
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
