import React,{useContext, useState} from "react";
import {View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ImageBackground} from 'react-native'
import {Text, Button } from 'react-native-elements'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Spacer from '../components/Spacer';
import ReferralContainer from '../components/ReferralContainer'
import AboutUs from '../components/AboutUs'

const HomeScreen = ({navigation}) => {

    const[isModalVisable,setModalVisable] = useState(false)
    const toggleModal = () =>{
        setModalVisable(!isModalVisable)
      }

    return (
        <ImageBackground style={{flex:1}}source={require('../images/blue-light.jpg')}>
            <SafeAreaView >
                <Image style={styles.image} source={require('../images/logo3.png')}></Image>
                <View style={styles.container}>
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
                <View style={styles.container}>
                    <View style={{flexDirection:"column", alignItems:"center"}}>
                        {/* <TouchableOpacity>
                            <Text>Create Route</Text>
                        </TouchableOpacity> */}
                        <Button icon={<Foundation name="mountains" size={24} color="white" />} buttonStyle={styles.button} style={{paddingBottom: 15}} title={"Create Area"} titleStyle={{paddingLeft:10}} onPress={()=>navigation.navigate('CreateArea')}/>
                        <Button icon={<FontAwesome5 name="tree" size={24} color="white" />}buttonStyle={styles.button} style={{paddingBottom: 15}} title={"Create Route"} titleStyle={{paddingLeft:10}} onPress={()=>navigation.navigate('CreateRoute')}/>
                    </View>
                
                    <View style={{flexDirection:"column", alignItems:"center"}}>
                        <Button icon={<FontAwesome5 name="route" size={24} color="white" />} buttonStyle={styles.button} style={{paddingBottom: 15}} title={"Your Routes"} titleStyle={{paddingLeft:10}} onPress={()=>navigation.navigate('YourRoute')}/>
                        <Button icon={<MaterialCommunityIcons name="campfire" size={24} color="white" />}buttonStyle={styles.button} style={{paddingBottom: 15}} title={"Followed Routes"} titleStyle={{paddingLeft:10}} onPress={()=>navigation.navigate('Followed')}/>
                    </View>
                </View>
                <Spacer/>
                <Button buttonStyle={{backgroundColor:"transparent"}}style={styles.modal} titleStyle={{color:"blue"}}title="About Us" onPress={toggleModal}/>
                <AboutUs toggleModal={toggleModal} isModalVisable={isModalVisable}/>
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
    container:{
        flexDirection:"row", 
        justifyContent:"space-around"
    },
    imageButton:{
        height: 300, 
        width:190,
        // marginLeft:10,
        borderRadius:15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        
    },
    buttonText:{
        fontWeight: "bold"
    },
    button:{
        
        backgroundColor:"#1359c4",
        height:50,
        
        borderWidth:1,
        borderRadius:15,
        width: 190
        
    },
    modal:{
        width:100,
        height: 40,
        marginLeft:160,
        marginTop:60,
        
      }

})

HomeScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

export default HomeScreen;