import React,{useContext} from "react";
import {View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ImageBackground} from 'react-native'
import {Text, Button } from 'react-native-elements'
import { FontAwesome5 } from '@expo/vector-icons'; 
import Spacer from '../components/Spacer';
import ReferralContainer from '../components/ReferralContainer'

const HomeScreen = ({navigation}) => {
    return (
        <ImageBackground style={{flex:1}}source={require('../images/blue-light.jpg')}>
            <SafeAreaView >
                <Image style={styles.image} source={require('../images/logo3.png')}></Image>
                <View style={{ flexDirection:"row", justifyContent:"space-around"}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
                        <ImageBackground style={styles.imageButton} imageStyle={{borderRadius: 15}}source={require('../images/search.jpg')}>
                            <FontAwesome5 name="search" size={24} color="black" />
                            <Text style={styles.buttonText}>  Search Areas {'&'} Routes</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{ navigation.navigate('Map')}}>
                        <ImageBackground style={styles.imageButton} imageStyle={{borderRadius: 15}}source={require('../images/maps.jpg')}>
                            <FontAwesome5 name="map" size={24} color="black" />
                            <Text style={styles.buttonText}>  Near Me</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <Spacer/>
                <View style={{flexDirection:"column", alignItems:"center"}}>
                    <Button buttonStyle={{backgroundColor:"#1359c4"}} style={styles.button} title={"Create Area"} onPress={()=>navigation.navigate('CreateArea')}/>
                    <Button buttonStyle={{backgroundColor:"#1359c4"}} style={styles.button} title={"Create Route"} onPress={()=>navigation.navigate('CreateRoute')}/>
                    <Button buttonStyle={{backgroundColor:"#1359c4"}} style={styles.button} title={"Your Routes"} onPress={()=>navigation.navigate('Followed')}/>
                    <Button buttonStyle={{backgroundColor:"#1359c4"}} style={styles.button} title={"Followed Routes"} onPress={()=>navigation.navigate('Followed')}/>
                    
                </View>
                <ReferralContainer />
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image:{
        height: 150,
        width: 400,
        marginLeft: 20,
        
    },
    imageButton:{
        height: 300, 
        width:190,
        // marginLeft:10,
        borderRadius:15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    buttonText:{
        fontWeight: "bold"
    },
    button:{
        width: 300,
        borderRadius:15,
        paddingBottom: 15
    }

})

HomeScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

export default HomeScreen;