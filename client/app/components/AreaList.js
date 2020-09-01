import React,{useState} from 'react';
import { Text, View ,StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import ItemListItem from './ItemListItem'
import {withNavigation} from 'react-navigation';




const AreaList = ({items,navigation,}) => {
  console.log(items,"arealist")
  return (
    <View >
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={items}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>{
          return(
            <TouchableOpacity onPress={()=>navigation.navigate('AreaDetail', {id:item.id,title:item.name})}>
              <ItemListItem item={item}/>
            </TouchableOpacity>
          )
        }}
        />

    </View>
  
  );
}


const styles = StyleSheet.create({})
export default withNavigation(AreaList);