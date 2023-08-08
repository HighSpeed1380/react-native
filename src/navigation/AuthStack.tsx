import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Signup from '../views/screens/Signup/Signup';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
    );
}