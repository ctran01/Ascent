import React, {useState, useContext, useEffect} from 'react';
import {View, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import {Text, Input, Button} from 'react-native-elements'
import {NavigationEvents} from 'react-navigation'
import Spacer from '../components/Spacer'
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import {Context as UserContext} from '../context/UserContext'
import ReferralContainer from '../components/ReferralContainer';
import AboutUs from '../components/AboutUs';


const SignupScreen = ({navigation}) => {
  const {state,signup, clearErrorMessage, tryLocalSignin} = useContext(UserContext)
  const[username,setUsername] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[isModalVisable,setModalVisable] = useState(false)

  const toggleModal = () =>{
    setModalVisable(!isModalVisable)
  }

  return (
    <ImageBackground style={styles.background} source={require("../images/Signinbackground.jpg")}>
    <SafeAreaView>
      <Spacer></Spacer>
      <Spacer/>
      <Spacer>
        <Text h3 style={{fontWeight:"bold"}}>Sign Up</Text>
      </Spacer>
      <Input placeholder={"  Username"}
        placeholderTextColor="black"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
        inputContainerStyle={{ borderColor: "black" }}
        leftIcon={<MaterialIcons name="person-outline" size={24} color="black" />} />
      <Spacer />
      <Input
        placeholder={"  Email"}
        placeholderTextColor="black"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        inputContainerStyle={{ borderColor: "black" }}
        leftIcon={<MaterialIcons name="email" size={24} color="black" />} />
      <Spacer />
      <Input placeholder={"  Password"}
        placeholderTextColor="black"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        inputContainerStyle={{ borderColor: "black" }}
        leftIcon={<FontAwesome name="lock" size={24} color="black" />}
       // passwordRules
       />
     {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text>: null}
      <Spacer>
       <Button style={styles.button} title={"Create Account"} buttonStyle={{backgroundColor:"#1359c4"}} onPress={ ()=> signup({username,email,password})} />
      </Spacer>
    <NavigationEvents 
      //  onWillFocus={()=>{}} Right before navigating to screen
      //  onDidFocus ={()=>{}} Right when you navigate to screen
      onWillBlur={clearErrorMessage} //Right when you leave a screen
      onWillFocus={clearErrorMessage}
    />
    
    <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
      <Spacer>
        <Text style={styles.signInText}>Already have an account? Sign In</Text>
      </Spacer>
    </TouchableOpacity>
    
    
      

      <Image style={styles.image} source={require('../images/Ascent-logo-tagline.png')}></Image>
      <Button buttonStyle={{backgroundColor:"transparent"}}style={styles.modal} titleStyle={{color:"white"}}title="About Us" onPress={toggleModal}/>
      <AboutUs toggleModal={toggleModal} isModalVisable={isModalVisable}/>
    </SafeAreaView>
    </ImageBackground>
  );
}


SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};


const styles=StyleSheet.create({
  background:{
    flex:1
  },
  image:{
    width:350,
    height:140,
    marginLeft:30,
    marginTop: 60
  },
  errorMessage:{
    color: "red",
    fontSize: 16,
    marginLeft: 15
  },
  signInText:{
    color: "black",
    marginLeft:80
  },
  modal:{
    width:100,
    height: 40,
    marginLeft:160,
    marginTop:30,
    
  },
  button:{
    width:350,
    marginLeft:20,
    marginTop:10,
  },

})
export default SignupScreen;