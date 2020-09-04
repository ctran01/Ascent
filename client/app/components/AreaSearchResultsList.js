import React from 'react';
import {View, StyleSheet, ScrollView, FlatList, SectionList, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {Text} from 'react-native-elements'

const AreaSearchResultsList = ({navigation,areaSearchResults}) => {
  return (
    <FlatList
                        data={areaSearchResults}
                        keyExtractor={(result)=> result.id.toString()}
                        renderItem={({item})=>{
                            return(
                                <TouchableOpacity style={{borderBottomWidth:1, backgroundColor:"#bdc6cf"}} onPress={()=> navigation.navigate('AreaDetail',{id:item.id, title: item.name})}>
                                    <View style={{  height:60, flexDirection:"row", }}>
                                        {item.image_url ? <Image style={styles.image} source={{uri: item.image_url}}/> : <Image style={styles.image} source={require('../images/placeholderImage.jpeg')}/>}
                                        <View >
                                            <View style={{paddingTop:5}}>
                                                <Text style={{ fontSize:16,fontWeight:"bold",}}> 
                                                    {/* width:140 */}
                                                    {item.name}
                                                </Text>
                                            </View>
                                            <View>
                                                <Text style={{fontSize:12}}>
                                                    Created by: {item.User.username}
                                                </Text>
                                                <Text>
                                                {item.Routes.length} Routes
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ paddingLeft: 4, paddingTop:10}}>
                                            
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

export default AreaSearchResultsList;