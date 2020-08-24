import React, { useState, useEffect, useContext } from "react";
import {View, StyleSheet, ImageBackground,Image, SafeAreaView, TouchableOpacity,Alert} from 'react-native'
import apiServer from '../../api/apiServer';
import {Text} from 'react-native-elements'
import { ScrollView } from "react-native-gesture-handler";
import Spacer from '../../components/Spacer'
import { FontAwesome5 } from '@expo/vector-icons'; 
import {Context as RouteContext} from '../../context/RouteContext'


const RouteDetailPage = ({navigation}) => {

    const {state, getRoute,deleteRoute} = useContext(RouteContext)
    const id = navigation.getParam('id');
    // const [route,setRoute] = useState(null)

    // const getRoute = async (id)=>{
    //     try{
    //         const res = await apiServer.get(`/route/${id}`)
    //         setRoute(res.data.route)
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    const route = state.find((route)=> route.id === id)

    // useEffect(()=>{
    //     getRoute(id)
    // },[])

    // if(!route){
    //     return null
    // }
    // console.log(route)
    console.log(route)
    return (
        <ImageBackground style={{flex:1}}source={require('../../images/blue-light.jpg')}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    {route.image_url ? <Image style={styles.image} source={{uri: route.image_url}}/> : <Image style={styles.image} source={require('../../images/placeholderImage.jpeg')}/>}
                    <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:5}}>
                        <View>
                            <Text style={styles.text}>
                                Created by: {route.User.username}
                            </Text>
                        </View>
                        <View style={{flexDirection:"row", paddingRight:10}}>
                        <TouchableOpacity onPress={()=> navigation.navigate('EditRoute', {id:navigation.getParam('id')})}>
                                <FontAwesome5 name="edit" size={24} color="white" />
                            </TouchableOpacity>
                            <Spacer/>
                            <TouchableOpacity onPress={()=> Alert.alert("Delete", "Are you sure you want to delete?", [
                                {text: "Yes", onPress: ()=> deleteRoute(route.id, ()=> navigation.navigate('YourRoute'), ()=>{alert("Route deleted!")})},
                                {text: "No", onPress: ()=> null}
                            ])}>
                                <FontAwesome5 name="trash" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={{color:"white"}} h4>Difficulty</Text>
                    </View>
                        <Text style={{color: "white", marginBottom:10, marginLeft:15}}>{route.grade}</Text>
                    <View style={styles.titleContainer}>
                        <Text style={{color:"white"}} h4>Type</Text>
                    </View>
                        <Text style={{color: "white", marginBottom:10, marginLeft:15}}>{route.type}</Text>
            
                    <View style={styles.titleContainer}>
                        <Text style={{color:"white"}} h4>Location</Text>
                    </View>
                    <Text style={{color: "white", marginBottom:10, marginLeft:15}}>
                        Latitude: {route.latitude}
                    </Text>
                    <Text style={{color: "white", marginBottom:10, marginLeft:15}}>
                        Longitude: {route.longitude}
                    </Text>
                    <View style={styles.titleContainer}>
                        <Text style={{color:"white"}} h4>Description</Text>
                    </View>
                    <Text style={{color: "white", marginBottom:10, marginLeft:15}}>
                        {route.description}
                    </Text>
                    <View style={styles.titleContainer}>
                        <Text style={{color:"white"}} h4>Photos</Text>
                    </View>
                    
                </SafeAreaView>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    text:{
        color:"white",
        marginLeft:15,
    },
    image:{
        width:"100%", 
        height:250
    },
    titleContainer:{
        backgroundColor:"black", 
        marginBottom: 10
    }
})


RouteDetailPage.navigationOptions = ({navigation}) => {
    const title = navigation.getParam('title')
    return {
      title: title ,
      headerTitleStyle: {color: 'white'},
      headerBackTitleVisible: false,
      headerStyle: {backgroundColor: 'black'}
    };
  };
export default RouteDetailPage;