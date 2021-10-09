import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=anthony%20horrowitz');
      const json = await response.json();
      setData(json.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
            {'\n'}Title: {item.volumeInfo.title}
            {'\n'}Author: {item.volumeInfo.authors}
            {'\n'}Publication Date: {item.volumeInfo.publishedDate}
            </Text>
          )}
        />
      )}
    </View>
  );
};