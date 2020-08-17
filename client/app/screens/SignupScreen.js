import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import {NavigationEvents} from 'react-navigation'

const SignupScreen = ({navigation}) => {
  
  const[username,setUsername] = useState('')
  const[firstName,setFirstName] = useState('')
  const[lastName,setLastName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  
  return (
    <View>
      <Text>SignupScreen</Text>
      <Spacer>
        <Text h3>Sign Up for Ascent</Text>
      </Spacer>
      <Input label="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false} />
      <Spacer />
      <Input label="First Name"
        value={firstName}
        onChangeText={setFirstName}
        autoCorrect={false} />
      <Spacer />
      <Input label="Last Name"
        value={lastName}
        onChangeText={setLastName}
        autoCorrect={false} />
      <Spacer />
      <Input label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false} />
      <Spacer />
      <Input label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
       // passwordRules
       />
     {/* {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text>: null} */}
      <Spacer>
       <Button title={"Sign Up"} onPress={()=> signup({username,firstName,lastName,email,password})} />
      </Spacer>
    <NavigationEvents 
       onWillFocus={()=>{}} Right before navigating to screen
       onDidFocus ={()=>{}} Right when you navigate to screen
      onWillBlur={clearErrorMessage} //Right when you leave a screen
      onWillFocus={clearErrorMessage}
    />


      <Button title={"To Signin"} onPress={()=> navigation.navigate('Signin')} />
    </View>
  );
}

const styles=StyleSheet.create({

})
export default SignupScreen;