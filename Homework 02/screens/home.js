import { ActivityIndicator, View, Text,FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect} from 'react';
import { globalStyles } from '../styles/global';


export default function PlayersScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPlayers = async () => {
    try {
     const response = await fetch('https://cs262-monopoly-service.herokuapp.com/players/');
     const json = await response.json();
     setData(json);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }
  
  useEffect(() => {
    getPlayers();
  }, []);

  return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                        <Text style={globalStyles.title}>{item.email} </Text>
                    </TouchableOpacity> 
                )}
            />
        )}
      </View>
  );
}

