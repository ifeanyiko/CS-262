import React, { useState } from 'react';
import { Button, View, Text,FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function DetailsScreen({ route, navigation }) {
    /* 2. Get the param */
      return (
        <View style={{ flex: 1, padding: 20}}>
            {/* Display the fields of the received movie object. */}
            <Text>{ route.params.email }</Text>
            <Text>ID: { route.params.id }</Text>
            <Text>AKA: { route.params.name }</Text>
        </View>
      );
  }