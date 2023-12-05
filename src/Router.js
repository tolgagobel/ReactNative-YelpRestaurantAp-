import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import First from './pages/First';
import Detail from './pages/Detail';

function Router(props) {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{title:"Yelp Restaurant"}}>
                <Stack.Screen name='First' component={First}/>
                <Stack.Screen name='Detail' component={Detail}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;
