import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './login'
import HomeTomato from './HomeTomato'
import Drawermain from './drawermain'

const Main = createStackNavigator()

const Mainstack = () => {
    return (
        <NavigationContainer>
            <Main.Navigator initialRouteName='Login'>
                <Main.Screen name='Login' component={Login} />
                <Main.Screen name='HomeTomato' component={HomeTomato} />
                {/* <Main.Screen name='Drawermain' component={Drawermain} /> */}
            </Main.Navigator>
        </NavigationContainer>
    )
}

export default Mainstack