import React,{useContext, useEffect} from "react";
import {View, StyleSheet, ScrollView, ImageBackground} from 'react-native'
import {Text} from 'react-native-elements';
import {Context as AreaContext} from '../context/AreaContext'
import {Context as RouteContext} from '../context/RouteContext'
import { SafeAreaView } from "react-native-safe-area-context";
import AreaList from "../components/AreaList";
import Spacer from "../components/Spacer";
import RouteList from "../components/RouteList";

const FollowedScreen = ({navigation}) => {
    const{ getFollowedAreas, state: areaState }= useContext(AreaContext)
    const {getFollowedRoutes, state: routeState} = useContext(RouteContext)


    // console.log(routeState, "route")
    // console.log(areaState, "area")

    useEffect(()=>{
        getFollowedAreas()
        getFollowedRoutes()
        const listener = navigation.addListener("didFocus", () => {
            getFollowedAreas()
            getFollowedRoutes()
        })
        return () => {
            listener.remove();
          };
    },[]) 

    console.log(areaState,"Area State Follow Screen")

    return (
        <ImageBackground style={{flex:1}}source={require('../images/blue-light.jpg')}>
            <SafeAreaView> 
            <Text h4 style={{marginLeft:15, color: "white", marginTop:15,marginBottom:15, fontWeight:"bold"}}>Followed Areas</Text>
                <ScrollView>
                    <AreaList items={areaState}></AreaList>
                </ScrollView>
                <Spacer/>
            <Text h4 style={{marginLeft:15,marginBottom:15,color:"white", fontWeight:"bold"}}>Followed Routes</Text>    
                <ScrollView>
                    <RouteList items={routeState}></RouteList>
                </ScrollView>
           </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

})

FollowedScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

export default FollowedScreen;