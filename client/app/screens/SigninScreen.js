import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SigninScreen = ({navigation}) => {
  return (
    <View>
      <Text>SigninScreen</Text>
      <Button title={"To Signup"} onPress={()=> navigation.navigate('Signup')} />
      <Button title={"To Home"} onPress={()=> navigation.navigate('Home')} />
    </View>
  );
}

const styles=StyleSheet.create({

})
export default SigninScreen;