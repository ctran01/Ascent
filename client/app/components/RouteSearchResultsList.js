import React from 'react';
import {View, StyleSheet, ScrollView, FlatList, SectionList, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {Text} from 'react-native-elements'

const RouteSearchResultsList = ({navigation,routeSearchResults}) => {
  return (
    <FlatList
                        data={routeSearchResults}
                        keyExtractor={(result)=> result.id.toString()}
                        renderItem={({item})=>{
                            return(
                                <TouchableOpacity style={{borderBottomWidth:1, backgroundColor:"#bdc6cf"}} onPress={()=> navigation.navigate('RouteDetail', {id:item.id, title:item.name})}>
                                    <View style={{  height:60, flexDirection:"row", justifyContent:"space-between"}}>
                                        {item.image_url ? <Image style={styles.image} source={{uri: item.image_url}}/> : <Image style={styles.image} source={require('../images/placeholderImage.jpeg')}/>}
                                        <View >
                                            <View style={{ paddingTop:5}}>
                                                <Text style={{ fontSize:16,fontWeight:"bold", marginRight:150, width:125}}>
                                                    {item.name}
                                                </Text>
                                                <Text style={{fontSize:10}}>
                                                    {item.Area.name}
                                                </Text>
                                            </View>
                                            <View style={{}} >
                                                <Text style={{fontSize:12,marginTop:7}}>
                                                    Created by: {item.User.username}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ alignItems:"flex-end", width:55,}}>
                                            <Text >
                                                {item.type}
                                            </Text>
                                            <Text style={{marginTop:5}}>
                                                {item.grade}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
  );
}
const styles = StyleSheet.create({
  image:{
      width:80,
      height:60
  }
})
export default RouteSearchResultsList;