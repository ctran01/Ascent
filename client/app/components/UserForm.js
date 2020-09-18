import React, { useEffect, useState } from 'react';
import { View,Text,SafeAreaView, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'native-base';
import apiServer from '../api/apiServer'

const UserForm = ({initialValues}) => {
  const [username, setUsername] = useState(initialValues.username)
  const [email,setEmail]= useState (initialValues.email)

  // const editUser = async()=>{
  //   try{
      
  //   }catch(err){
  //     console.log(err)
  //   }

  // }

  return (
    <View>
        <Input 
        label="Username"
        value={username}
        onChangeText={setUsername}
        inputStyle={styles.input}
        labelStyle={styles.label}
        inputContainerStyle={styles.inputContainter}
        />
        <Input 
        label="Email"
        value={email}
        onChangeText={setEmail}
        inputStyle={styles.input}
        labelStyle={styles.label}
        inputContainerStyle={styles.inputContainter}
        />
        {/* <Button buttonStyle={{backgroundColor:"#1359c4"}} style={styles.button} title={"Confirm Changes"} onPress={edit}  */}
    </View>

  );
}

const styles = StyleSheet.create({
  inputContainter:{
    borderWidth: 1 ,
     borderColor:"black"
 },
  input:{
    color:"black"
  },
  label:{
    color:"black",
    paddingBottom:5
  }
})

export default UserForm;