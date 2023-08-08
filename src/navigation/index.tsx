import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

// Stacks
import UserStack from './UserStack';
import AuthStack from './AuthStack';

// Screens
import Category from '../views/screens/Category/Category';
import Chat from '../views/screens/Chat/Chat';
import ServiceProviderProfile from '../views/screens/ServiceProviderProfile/ServiceProviderProfile'
import Success from '../views/screens/Success/Success';
import ReservationFlowStep1 from '../views/screens/ReservationFlowStep1/ReservationFlowStep1';
import ReservationFlowStep2 from '../views/screens/ReservationFlowStep2/ReservationFlowStep2';
import Notifications from '../views/screens/Notifications/Notification';

const Stack = createStackNavigator();

export default function RootNavigation() {

  return  (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name='UserStack' component={UserStack} />
      <Stack.Screen name='AuthStack' component={AuthStack} />
      <Stack.Screen 
      name='Chat' 
      component={Chat} 
      // options={{
      //   headerShown: true,
      //   headerStyle: {
      //     shadowColor: 'transparent', // this covers iOS
      //     elevation: 0, // this covers Android
      //   },
      // }} 
      />
      <Stack.Screen 
      name='Category' 
      component={Category} 
      options={{
        headerShown: true,
        headerStyle: {
          shadowColor: 'transparent', // this covers iOS
          elevation: 0, // this covers Android
        },
      }} 
      />
      <Stack.Screen 
      name='ServiceProviderProfile' 
      component={ServiceProviderProfile} 
      options={{
        headerShown: true,
        headerStyle: {
          shadowColor: 'transparent', // this covers iOS
          elevation: 0, // this covers Android
        },
      }} 
      />
      <Stack.Screen 
      name='ReservationFlowStep1' 
      component={ReservationFlowStep1} 
      options={{
        headerShown: true,
        headerStyle: {
          shadowColor: 'transparent', // this covers iOS
          elevation: 0, // this covers Android
        },
      }} 
      />
      <Stack.Screen 
      name='ReservationFlowStep2' 
      component={ReservationFlowStep2} 
      options={{
        headerShown: true,
        headerStyle: {
          shadowColor: 'transparent', // this covers iOS
          elevation: 0, // this covers Android
        },
      }} 
      />
      <Stack.Screen 
      name='Notifications' 
      component={Notifications} 
      options={{
        headerShown: true,
        headerStyle: {
          shadowColor: 'transparent', // this covers iOS
          elevation: 0, // this covers Android
        },
      }} 
      />
      <Stack.Screen name='Success' component={Success} />
    </Stack.Navigator>
  )

}