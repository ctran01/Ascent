import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'
const ItemListItem = ({item}) => {
  return (
    <View style={styles.container}>
      {item.image_url ? <Image style={styles.image} source={{uri: item.image_url}}/> : <Image style={styles.image} source={require('../images/placeholderImage.jpeg')}/>}
      <Text style={{fontWeight:"bold" , color:"white"}}>{item.name}</Text>
      <Text style={{color:"white"}}>Created By {item.User.username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginLeft: 15
  },
  image:{
    width: 250,
    height:200,
    borderRadius:4,
    marginBottom: 5
},
})


export default ItemListItem;