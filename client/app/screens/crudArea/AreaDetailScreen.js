import React, { useState, useEffect, useContext } from "react";
import {View, StyleSheet,Image, FlatList, ImageBackground,TouchableOpacity, Alert } from 'react-native'
import {Text} from 'react-native-elements'
import {SafeAreaView} from 'react-navigation'
import apiServer from '../../api/apiServer'
import { ScrollView,  } from "react-native-gesture-handler";
import RouteList from '../../components/RouteList'
import Spacer from "../../components/Spacer";
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import {Context as AreaContext} from '../../context/AreaContext'

const AreaDetailPage = ({navigation}) => {
    const {state, delArea, followArea} = useContext(AreaContext)
    const id = navigation.getParam('id')
    const [area, setArea] = useState([])
    const [routes,setRoutes] = useState([])

    const getArea = async (id)=>{
        try{
            const res = await apiServer.get(`/area/${id}`)
            setArea(res.data.area)
        }catch(err){
            console.log(err)
        }
    }
    // const area = state.find((area)=> area.id === id)
    

    const getRoutes = async(id)=>{
        try{
          const res = await apiServer.get(`/area/route/${id}`)
          setRoutes(res.data.routes)
    
        }catch(err){
          console.log(err)
        }
      }

    useEffect(()=>{
        getArea(id)
        getRoutes(id)
    },[]);

    if(!area.User){
        return null;
    }

        //if asyncstorage id === area.user_id show delete/edit icons
    console.log(area, "Area Detail state")
    return (
        <ImageBackground style={{flex:1}}source={require('../../images/blue-light.jpg')}>
            <ScrollView
            showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                
                    {area.image_url ? <Image style={styles.image} source={{uri: area.image_url}}/> : <Image style={styles.image} source={require('../../images/placeholderImage.jpeg')}/>}
                    <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:5}}>
                        <View>
                            <Text style={styles.text}>{area.name}</Text>
                            <Text style={styles.text}>Added by {area.User.username}</Text>
                        </View>
                        <View style={{flexDirection:"row", paddingRight:10}}>
                            <TouchableOpacity onPress={()=>{followArea(area.id, ()=> navigation.navigate('YourRoute'), ()=>{alert("Area Followed!")} , ()=>{alert("Area Unfollowed!")} )}}>
                                <FontAwesome name="heart" size={24} color="white" />
                            </TouchableOpacity>
                            <Spacer/>
                            <TouchableOpacity onPress={()=> navigation.navigate('EditArea', {id: navigation.getParam('id')})}>
                                <FontAwesome5 name="edit" size={24} color="white" />
                            </TouchableOpacity>
                            <Spacer/>
                            <TouchableOpacity onPress={()=> Alert.alert("Delete", "Are you sure you want to delete?", [
                                {text: "Yes", onPress: ()=> delArea(area.id , ()=> navigation.navigate('YourRoute'), ()=>{alert("Area deleted!")})},
                                {text: "No", onPress: ()=> null}
                            ])}>
                                <FontAwesome5 name="trash" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.titleContainer}>
                        <Text style={{color:"white"}} h4>Description</Text>
                    </View>
                    {area.description? <Text style={{color: "white", marginBottom:10, marginLeft:15}}>{area.description}</Text>: <Text style={{color: "white", marginBottom:10, marginLeft:15}}>No description</Text>}
                    
                    <View style={styles.titleContainer}>
                        <Text style={{color:"white"}}h4>Routes in {area.name}</Text>
                    </View>
                    <ScrollView>
                        {routes.length === 0 ? <Text style={styles.text}>No routes in area </Text>:<RouteList items={routes}></RouteList>}
                    </ScrollView>
                </SafeAreaView>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    text:{
        color:"white",
        marginLeft:15,
        fontWeight:"bold"
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

AreaDetailPage.navigationOptions = ({navigation}) => {
    const title = navigation.getParam('title')
    return {
      title: title ,
      headerTitleStyle: {color: 'white'},
      headerBackTitleVisible: false,
      headerStyle: {backgroundColor: 'black'}
    };
  };
export default AreaDetailPage;