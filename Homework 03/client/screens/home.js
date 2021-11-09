import { ActivityIndicator, View, Text,FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect} from 'react';
import { globalStyles } from '../styles/global';


export default function PlayersScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPlayers = async () => {
    try {
     const response = await fetch('https://nameless-mesa-98723.herokuapp.com/scores/3/');
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
        <Text style={globalStyles.title}> Player 3's Games </Text>
        {isLoading ? <ActivityIndicator/> : (
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                        <Text style={globalStyles.title}>{item.gameid} </Text>
                    </TouchableOpacity> 
                )}
            />
        )}
      </View>
  );
}

