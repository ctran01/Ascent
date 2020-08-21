import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, AsyncStorage} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ItemList from '../components/ItemList';
import Spacer from '../components/Spacer';
import apiServer from '../api/apiServer'


const YourRouteScreen = () => {

  const [areas, setAreas] = useState([])
  const [routes,setRoutes] = useState([])
  

  const getAreas = async()=>{
    const id = await AsyncStorage.getItem('userid')
    const res = await apiServer.get(`/area/user/${id}`)
    setAreas(res.data.areas)
  }

  const getRoutes = async()=>{
    const id = await AsyncStorage.getItem('userid')
    const res = await apiServer.get(`/route/user/${id}`)
    setRoutes(res.data.routes)
  }
  useEffect(()=>{
    getAreas();
    getRoutes
  },[])

  return (
    <SafeAreaView>
      <Text>Your Areas</Text>
      <ScrollView>
        <Text>{areas.length}</Text>
      </ScrollView>
      <Spacer/>
      <Text>Your Routes</Text>
      <ScrollView>
        <ItemList></ItemList>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({}
  )
export default YourRouteScreen;