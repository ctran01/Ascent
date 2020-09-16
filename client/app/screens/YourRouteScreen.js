import React, { useEffect, useState, useContext } from 'react';
import {View, StyleSheet, SafeAreaView, AsyncStorage,ImageBackground} from 'react-native';
import{ Text} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Spacer from '../components/Spacer';
import apiServer from '../api/apiServer'
import AreaList from '../components/AreaList';
import RouteList from '../components/RouteList';
import {Context as AreaContext} from '../context/AreaContext'
import {Context as RouteContext} from '../context/RouteContext'


const YourRouteScreen = ({navigation}) => {
  const [areas, setAreas] = useState([])
  const [routes,setRoutes] = useState([])
  
  const {getUserAreas, state: areaState} = useContext(AreaContext)
  const {getUserRoutes, state: routeState} = useContext(RouteContext)
  // const getAreas = async()=>{
  //   const id = await AsyncStorage.getItem('userid')
    
  //   try{
  //     const res = await apiServer.get(`/area/user/${id}`)
  //     setAreas(res.data.areas)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }

  // const getRoutes = async()=>{
  //   const id = await AsyncStorage.getItem('userid')
  //   try{
  //     const res = await apiServer.get(`/route/user/${id}`)
  //     setRoutes(res.data.routes)

  //   }catch(err){
  //     console.log(err)
  //   }
  // }

  useEffect(()=>{
    getUserAreas();
    getUserRoutes();
    const listener = navigation.addListener("didFocus", () => {
      getUserAreas();
      getUserRoutes();
    });

    return () => {
      listener.remove();
    };
    
  },[])

  console.log(areaState, "Area Context State")
  return (
    <ImageBackground style={{flex:1}}source={require('../images/Signinbackground.jpg')}>
    <SafeAreaView>
        <Text h4 style={{marginLeft:15, color: "white", marginTop:15,marginBottom:15, fontWeight:"bold"}}>Your Created Areas</Text>
        <ScrollView>
          <AreaList items={areaState}></AreaList>
        </ScrollView>
        <Spacer/>
        <Text h4 style={{marginLeft:15,marginBottom:15,color:"white", fontWeight:"bold"}}>Your Created Routes</Text>
        <ScrollView>
          <RouteList items={routeState}></RouteList>
        </ScrollView>
      </SafeAreaView>
      </ImageBackground>

  );
}

const styles = StyleSheet.create({}
  )

YourRouteScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default YourRouteScreen;