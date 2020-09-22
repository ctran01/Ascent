import React,{useContext, useState} from "react";
import {View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ImageBackground} from 'react-native'
import {Text, Button } from 'react-native-elements'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Spacer from '../components/Spacer';
import ReferralContainer from '../components/ReferralContainer'
import AboutUs from '../components/AboutUs'
import { AntDesign } from '@expo/vector-icons'; 

const HomeScreen = ({navigation}) => {

    const[isModalVisable,setModalVisable] = useState(false)
    const toggleModal = () =>{
        setModalVisable(!isModalVisable)
      }
//"rgba(132, 153, 186,0.2)" Black tint color
    return (
        <ImageBackground style={{flex:1}}source={require('../images/Signinbackground.jpg')}>
            <View style={{backgroundColor:"rgba(52, 55, 60,0.2)", height:290}}>
                    <Image style={styles.image} source={require('../images/Ascent-logo-tagline.png')}></Image>
            </View>
            <SafeAreaView >
                
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
                        <ImageBackground style={styles.imageButton} imageStyle={{borderRadius: 15}}source={require('../images/search1.jpg')}>
                            <FontAwesome5 name="search" size={24} color="black" />
                            <View>
                                <Text style={styles.buttonText}>  Search Areas</Text>
                                <Text style={styles.buttonText} >      {'&'} Routes</Text>
                            </View>
                            
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{ navigation.navigate('Map')}}>
                        <ImageBackground style={styles.imageButton} imageStyle={{borderRadius: 15}}source={require('../images/maps.png')}>
                            <FontAwesome5 name="map" size={24} color="black" />
                            <Text style={styles.buttonText}>  Near Me</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <Spacer/>
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>navigation.navigate('CreateArea')}>
                        {/* <Image style={{width:70,height:50}}source={require('../images/area-icon.png')}></Image> */}
                        <Foundation name="mountains" size={45} color="white" />
                        <Text style={{color:"white", alignSelf:"center"}}>Create</Text>
                        <Text style={{color:"white", marginLeft:5}}>Area</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('CreateRoute')}>
                        {/* <Image style={{width:60,height:60}}source={require('../images/add-route-icon.png')}></Image> */}
                        <MaterialCommunityIcons name="map-marker-plus" size={45} color="white" />
                        <Text style={{color:"white", alignSelf:"center",marginTop:5}}>Create</Text>
                        <Text style={{color:"white"}}>Routes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Followed')}>
                        {/* <Image style={{width:60,height:60}}source={require('../images/favorite-icon.png')}></Image> */}
                        <AntDesign name="staro" style={{marginLeft:5}} size={45} color="white" />
                        <Text style={{color:"white", alignSelf:"center"}}>Followed</Text>
                        <Text style={{color:"white", marginLeft:5}}>Routes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('YourRoute')}>
                        <FontAwesome5 name="route" size={45} color="white" />
                        {/* <Image style={{width:60,height:60}} source={require('../images/route-solid.svg')}></Image> */}
                        <Text style={{color:"white", marginLeft:5, marginTop:6}}>Your</Text>
                        <Text style={{color:"white"}}>Routes</Text>
                    </TouchableOpacity>
                    
                    {/* <View style={{flexDirection:"column", alignItems:"center"}}>
                        
                        <Button icon={<Foundation name="mountains" size={24} color="white" />} buttonStyle={styles.button} style={{paddingBottom: 15}} title={"Create Area"} titleStyle={{paddingLeft:10}} onPress={()=>navigation.navigate('CreateArea')}/>
                        <Button icon={<FontAwesome5 name="tree" size={24} color="white" />}buttonStyle={styles.button} style={{paddingBottom: 15}} title={"Create Route"} titleStyle={{paddingLeft:10}} onPress={()=>navigation.navigate('CreateRoute')}/>
                    </View>
                
                    <View style={{flexDirection:"column", alignItems:"center"}}>
                        <Button icon={<FontAwesome5 name="route" size={24} color="white" />} buttonStyle={styles.button} style={{paddingBottom: 15}} title={"Your Routes"} titleStyle={{paddingLeft:10}} onPress={()=>navigation.navigate('YourRoute')}/>
                        <Button icon={<MaterialCommunityIcons name="campfire" size={24} color="white" />}buttonStyle={styles.button} style={{paddingBottom: 15}} title={"Followed Routes"} titleStyle={{paddingLeft:10}} onPress={()=>navigation.navigate('Followed')}/>
                    </View> */}
                </View>
                <Spacer/>
                
                <Button buttonStyle={{backgroundColor:"transparent", marginTop:100,marginLeft:320}} style={styles.modal} titleStyle={{color:"black", fontSize:16, fontWeight:"bold"}}title="About Us" onPress={toggleModal}/>
               
                <AboutUs toggleModal={toggleModal} isModalVisable={isModalVisable}/>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image:{
        height: 120,
        width: 310,
        marginLeft: 50,
        marginTop:130
    },
    container:{
        flexDirection:"row", 
        justifyContent:"space-around",
        marginTop:60
    },
    imageButton:{
        height: 200, 
        width: 175,
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
        // width:100,
        // height: 40,
        // marginLeft:320,
        // marginBottom:100,
        // borderColor:"red",
        // borderWidth:10,
        
      }

})

HomeScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

export default HomeScreen;