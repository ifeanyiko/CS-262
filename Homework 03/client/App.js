import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayersScreen from "./screens/home";
import DetailsScreen from "./screens/details";
import AboutScreen from './screens/about';
import  Header  from './shared/header';
import React, { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App () {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Players" component = {PlayersScreen} options={({ navigation }) => ({
    headerRight: () => (
        <Header navigation={navigation}/>
    )
})}/>
        <Stack.Screen name ="Details" component = {DetailsScreen} options={({ navigation }) => ({
    headerRight: () => (
        <Header navigation={navigation}/>
    )
})}/>
        <Stack.Screen name= "About" component = {AboutScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


