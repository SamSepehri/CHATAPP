import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, ScrollView } from 'react-native';
import Chat from './components/Chat';
import Start from './components/Start';
import 'react-native-gesture-handler';

// import react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Create the navigator
const Stack = createStackNavigator();

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Start'>
          <Stack.Screen name='Start' component={Start} />
          <Stack.Screen name='Chat' component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}