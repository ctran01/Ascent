import React, { useContext, useEffect, useState, useRef } from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Image} from 'react-native';
import MapView , {PROVIDER_GOOGLE, Marker, Circle, Callout} from 'react-native-maps';
import apiServer from '../api/apiServer'
import {Context as RouteContext} from '../context/RouteContext'
import {requestPermissionsAsync, watchPositionAsync,Accuracy} from 'expo-location'

const Map = ({navigation}) => {

  const{state,getRoutes}= useContext(RouteContext)
  const[err,setErr] = useState(null)
  const[currentLocation, setCurrentLocation] = useState({coords:{latitude: 29.74026722, longitude:-95.4825714}})
  


  

  const askPermission = async()=>{
    try{
      await requestPermissionsAsync();
      // await watchPositionAsync({
      //   accuracy: Accuracy.BestForNavigation,
      //   timeInterval:1000,
      //   distanceInterval: 10
      // }, (location)=>{
      //   setCurrentLocation(location)
      // })
    }catch(err){
      setErr(err)
    }
  }

  useEffect(()=>{
    askPermission();
    getRoutes()
  },[])
  
  if(!currentLocation){
    return <ActivityIndicator size ="large" style={{marginTop:200}}/>
  }

  const circleRef = useRef(null)
  return (
    <View>
      
      {/* {err ? <Text>Location services have been disabled</Text>: null} */}
      <MapView style={{height:"100%"}}
      onma
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        ...currentLocation.coords,
        // latitude: 30.2509,
        // longitude: -97.7969,
        latitudeDelta: 3,
        longitudeDelta: 3
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 3,
        longitudeDelta: 3
      }}
      >
        <Circle
          ref={circleRef}
          center={currentLocation.coords}
          radius={5000}
          onLayout={() => (circleRef.current.setNativeProps({
            strokeColor: "blue",
            fillColor: "blue",
          }))}
        />

        {state.map(item =>{
          return(
            <Marker
              key={item.id}
              coordinate={{
                latitude: parseFloat(item.latitude),
                longitude: parseFloat(item.longitude)
              }}
            >
              <Callout onPress={()=>navigation.navigate('RouteDetail', {id:item.id, title:item.name})}>
                  <View>
                    <Text>Route: {item.name}</Text>
                    <Text>Grade: {item.grade}</Text>
                  </View>
              </Callout>
            </Marker>)}
        )}
      </MapView>
    </View>
  );
}

const styles=StyleSheet.create({
  image:{
    height:50,
    width:50
  }
})

Map.navigationOptions = ({navigation}) => {
  
  return {
    title: "Search" ,
    headerTitleStyle: {color: 'white'},
    headerBackTitleVisible: false,
    headerStyle: {backgroundColor: 'black', }
  };
};
export default Map;