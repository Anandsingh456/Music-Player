/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HOME from './screens/HOME';
import MUSIC from './screens/MUSIC';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HOME"
          component={HOME}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MUSIC"
          component={MUSIC}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
