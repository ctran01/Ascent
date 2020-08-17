import React, {useState, useContext} from 'react';
import {View, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import {Text, Input, Button} from 'react-native-elements'
import {NavigationEvents} from 'react-navigation'
import Spacer from '../components/Spacer'
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import {Context as UserContext} from '../context/UserContext'
import ReferralContainer from '../components/ReferralContainer';



const SignupScreen = ({navigation}) => {
  const {state,signup, clearErrorMessage} = useContext(UserContext)
  const[username,setUsername] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  
  return (
    <ImageBackground style={styles.background} source={require("../images/background2.jpg")}>
    <SafeAreaView>
      <Spacer>
        <Text h3>Sign Up for Ascent</Text>
      </Spacer>
      <Input placeholder={"  Username"}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
        leftIcon={<MaterialIcons name="person-outline" size={24} color="black" />} />
      <Spacer />
      <Input
        placeholder={"  Email"}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        leftIcon={<MaterialIcons name="email" size={24} color="black" />} />
      <Spacer />
      <Input placeholder={"  Password"}
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        leftIcon={<FontAwesome name="lock" size={24} color="black" />}
       // passwordRules
       />
     {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text>: null}
      <Spacer>
       <Button title={"Sign Up"} onPress={()=> signup({username,email,password})} />
      </Spacer>
    <NavigationEvents 
      //  onWillFocus={()=>{}} Right before navigating to screen
      //  onDidFocus ={()=>{}} Right when you navigate to screen
      onWillBlur={clearErrorMessage} //Right when you leave a screen
      onWillFocus={clearErrorMessage}
    />
    </SafeAreaView>
    <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
      <Spacer>
        <Text style={styles.signInText}>Already have an account? Sign in here</Text>
      </Spacer>
    </TouchableOpacity>
    <Spacer/>
    <ReferralContainer/>
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

  errorMessage:{
    color: "red",
    fontSize: 16,
    marginLeft: 15
  },
  signInText:{
    color: "blue"
  },

})
export default SignupScreen;