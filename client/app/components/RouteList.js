import React from 'react';
import { Text, View ,StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import ItemListItem from './ItemListItem'
const RouteList = ({items,navigation}) => {
  return (
    <View >
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>{
          return(
            // <TouchableOpacity onPress={()=>navigation.navigate('')}>
              <ItemListItem item={item}/>

            // </TouchableOpacity>
          )
        }}
        />

    </View>
  
  );
}


const styles = StyleSheet.create({})
export default RouteList;