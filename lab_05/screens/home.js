import { Button, View, Text,FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from '../styles/global';

export default function HomeScreen({ navigation }) {
    /* Hardcode a "database"/list of movies. */
    const [reviews, setReviews] = useState([
      { title: "Sharknado", rating: 3.3, key: '1',
          description: "A Shark Tornado."},
      { title: "Sharknado 2: The Second One", rating: 4.1, key: '2',
          description: 'The second shark tornado.'},
      { title: "Sharknado: Feeding Frenzy", rating: 3.7, key: '3',
          description: 'The sharks return as a tornado for a feeding frenzy.'},
  ]);
  
    
    return (
  
        <View style={globalStyles.container}>
              {/* Get rid of that ugly button and, instead, display our list of movies. */}
              <FlatList data={reviews} renderItem={({ item })=> (
                  <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                      <Text style = {globalStyles.title}>{ item.title }</Text>
                  </TouchableOpacity>
              )} />
          </View>
    );
  }