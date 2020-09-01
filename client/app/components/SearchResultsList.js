import React from 'react';
import { View,Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const SearchResultsList = ({results,navigation}) => {
  return (
    <View>
      {results.length === 0 ? <Text>No items found</Text> : null}
      <FlatList
      vertical={true}
      data={results}
      keyExtractor={(result)=> result.id.toString()}
      renderItem={({item})=>{
        return(
          <Text>{item.name}</Text>
        ) 
      }}/>
    </View>    
  );
}

export default SearchResultsList;