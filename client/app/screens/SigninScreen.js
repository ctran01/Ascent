import React,{useState, useContext} from 'react';
import {View, StyleSheet, SafeAreaView,ImageBackground,Image,TouchableOpacity, Button} from 'react-native';
import {Text, Input, Button as SignInButton} from 'react-native-elements'
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
    <ImageBackground style={styles.background} source={require("../images/background2.jpg")}>
    <SafeAreaView>
      <Image style={styles.image} source={require('../images/logo3.png')}></Image>
      <View style={{ backgroundColor:"rgba(132, 153, 186,0.2)"}}>

          <Spacer>
            
            <Text h3>Sign In</Text>
          </Spacer>
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
          <SignInButton buttonStyle={{backgroundColor:"#1359c4"}}title={"Sign In"} onPress={()=> signin({email,password})} />
          </Spacer>
        <NavigationEvents 
          //  onWillFocus={()=>{}} Right before navigating to screen
          //  onDidFocus ={()=>{}} Right when you navigate to screen
          onWillBlur={clearErrorMessage} //Right when you leave a screen
          onWillFocus={clearErrorMessage}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Spacer>
            <Text style={styles.signInText}>Don't have an account? Register here</Text>
          </Spacer>
        </TouchableOpacity>
        <Spacer/>
      </View>
      <SignInButton buttonStyle={{backgroundColor:"transparent"}}style={styles.modal} titleStyle={{color:"white"}}title="About Us" onPress={toggleModal}/>
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
    width:400,
    height:130,
    marginLeft:20,
    marginTop: 20
  },
  errorMessage:{
    color: "red",
    fontSize: 16,
    marginLeft: 15
  },
  signInText:{
    color: "blue"
  },
  modal:{
    width:100,
    height: 40,
    marginLeft:160,
    marginTop:30,
    
  }

})
export default SigninScreen;