import React from 'react';
import { Text, View ,StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import ItemListItem from './ItemListItem'
import {withNavigation} from 'react-navigation'
const RouteList = ({items,navigation}) => {
  return (
    <View >
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={items.sort((a,b)=> a.name.localeCompare(b.name))}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>{
          return(
            <TouchableOpacity onPress={()=>navigation.navigate('RouteDetail', {id:item.id, title:item.name})}>
              <ItemListItem item={item}/>

             </TouchableOpacity>
          )
        }}
        />

    </View>
  
  );
}


const styles = StyleSheet.create({})
export default withNavigation(RouteList);