import React,{useContext, useEffect} from "react";
import {View, Text, StyleSheet, ScrollView, ImageBackground} from 'react-native'
import {Button} from 'react-native-elements';
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
        const listener = navigation.addListener("didFocus", () => {
            getFollowedAreas()
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
                    {/* <RouteList items={routeState}></RouteList> */}
                </ScrollView>
           </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    button:{
        width: 300,
        borderRadius:15,
        paddingBottom: 15,
        
    }
})
export default FollowedScreen;