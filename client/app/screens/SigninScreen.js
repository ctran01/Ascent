import React,{useState, useContext} from 'react';
import {View, StyleSheet, SafeAreaView,ImageBackground,Image,TouchableOpacity} from 'react-native';
import {Text, Input, Button} from 'react-native-elements'
import {Context as UserContext} from '../context/UserContext';
import Spacer from '../components/Spacer'
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import {NavigationEvents} from 'react-navigation'
import AboutUs from '../components/AboutUs';

//Button color hex 1359c4
const SigninScreen = ({navigation}) => {
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')

  //replace with context later
  const[isModalVisable,setModalVisable] = useState(false)


  const { state, signin, clearErrorMessage} = useContext(UserContext)

  const toggleModal = () =>{
    setModalVisable(!isModalVisable)
  }

  return (
    <ImageBackground style={styles.background} source={require("../images/Signinbackground.jpg")}>
    <SafeAreaView>
          <Spacer></Spacer>
          <Spacer>
            
            <Text h3 style={{fontWeight:"bold"}}>Hi,</Text>
            <Text h3 style={{fontWeight:"bold"}}>Welcome back!</Text>
          </Spacer>
          <Spacer/>
          
          <Input
            placeholder={"  Email"}
            placeholderTextColor="black"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            inputContainerStyle={{ borderColor: "black" ,}}
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
          <Button style={styles.button} buttonStyle={{backgroundColor:"#1359c4", borderRadius: 10}} title={"Sign In"} onPress={()=> signin({email,password})} />
          </Spacer>
        <NavigationEvents 
          //  onWillFocus={()=>{}} Right before navigating to screen
          //  onDidFocus ={()=>{}} Right when you navigate to screen
          onWillBlur={clearErrorMessage} //Right when you leave a screen
          onWillFocus={clearErrorMessage}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Spacer>
            <Text style={styles.signInText}>Don't have an account? Sign Up</Text>
          </Spacer>
        </TouchableOpacity>
        
        <Button style={{width:150, marginLeft:130}}title={"Demo User"} onPress={()=> signin({email:'demo@email.com',password:'password'})}>
          
        </Button>
      <Image style={styles.image} source={require('../images/Ascent-logo-tagline.png')}></Image>

      <Button buttonStyle={{backgroundColor:"transparent"}}style={styles.modal} titleStyle={{color:"white"}}title="About Us" onPress={toggleModal}/>
      
      <AboutUs toggleModal={toggleModal} isModalVisable={isModalVisable}/>
    </SafeAreaView>
    </ImageBackground>
  );
}

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles=StyleSheet.create({
  background:{
    flex: 1
  },
  image:{
    width:350,
    height:140,
    marginLeft:30,
    marginTop: 70
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
    marginTop:30
  },

})
export default SigninScreen;