
import React, { useState } from 'react';
import { Button, View, Text,FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
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

      <View style={{ flex: 1, padding: 20}}>
            {/* Get rid of that ugly button and, instead, display our list of movies. */}
            <FlatList data={reviews} renderItem={({ item })=> (
                <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                    <Text>{ item.title }</Text>
                </TouchableOpacity>
            )} />
        </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
    return (
      <View style={{ flex: 1, padding: 20}}>
          {/* Display the fields of the received movie object. */}
          <Text>{ route.params.title }</Text>
          <Text>{ route.params.rating }</Text>
          <Text>{ route.params.description }</Text>
      </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options = {{title: 'Overview'}}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;