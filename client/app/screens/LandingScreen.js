import React,{useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Image } from 'react-native';
import {Button} from 'react-native-elements'
import AboutUs from '../components/AboutUs'
const LandingScreen = ({navigation}) => {

  const[isModalVisable,setModalVisable] = useState(false)

  const toggleModal = () =>{
    setModalVisable(!isModalVisable)
  }

  return (
      <ImageBackground style={{ flex:1 }} source={require('../images/background4.jpg')}>
        <SafeAreaView>
          <Image style={styles.image} source={require('../images/Ascent-logo-tagline.png')}></Image>
          
          <Button style={styles.button} buttonStyle={{borderRadius:10}} title={"Create Account"} onPress={()=> navigation.navigate('Signup')}></Button>
          <Button style={styles.button} buttonStyle={{backgroundColor:"transparent", borderWidth:1, borderColor:"white", borderRadius:10}} title={"Sign In"} onPress={()=> navigation.navigate('Signin')}></Button>
          
          
          <Button buttonStyle={{backgroundColor:"transparent"}}style={styles.modal} titleStyle={{color:"white"}}title="About Us" onPress={toggleModal}/>

          <AboutUs toggleModal={toggleModal} isModalVisable={isModalVisable}/>
        </SafeAreaView>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image:{
    width:400,
    height:150,
    marginLeft:10,
    marginTop: 330
  },
  button:{
    width:350,
    marginLeft:30,
    marginTop:30
  },
  modal:{
    width:100,
    height: 40,
    marginLeft:150,
    marginTop:130,
    
  }
})

LandingScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default LandingScreen;