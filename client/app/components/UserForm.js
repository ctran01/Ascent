import React, { useEffect, useState } from 'react';
import { View,Text,SafeAreaView, StyleSheet, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { Input, Button } from 'react-native-elements';
import apiServer from '../api/apiServer'
import * as ImagePicker from 'expo-image-picker';

import Spacer from '../components/Spacer'
const UserForm = ({initialValues}) => {
  const [username, setUsername] = useState(initialValues.username)
  const [email,setEmail]= useState (initialValues.email)
  const [photo, setPhoto] = useState(initialValues.photo)


  const pickImage = async()=>{
    try {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality:1
        })
        if(!result.cancelled){
            setPhoto(result.uri)
        }
        console.log(result)
    }catch(err){
        console.log(err)
    }
}
  const editUser = async(username, email,photo)=>{
    const userid = await AsyncStorage.getItem('userid')
    console.log(username)
    console.log(email)
    console.log(photo)
    try{
        const res = await apiServer.put(`/user/${userid}/update`, {username, email, photo})
        alert('User information updated!')
    }catch(err){
        alert('Try Again!')
    }
    
    
  }

  return (
    <View style={{marginLeft:15}}>
      <Text style={{marginLeft:50, color:"white", fontWeight:"bold"}}>Profile Image</Text>
      <TouchableOpacity  onPress={pickImage}>
        {photo ? null :<View style={{backgroundColor:"rgba(52, 55, 60,0.2)", width:200,height:200, borderRadius:15}}><Text style={{marginTop:80, alignSelf:"center"}}>Click to upload an image</Text></View>}
        {photo && (
          <Image
          source={{uri: photo}}
          style={{width:200, height:200, borderRadius:15}}
          />
          )}
      </TouchableOpacity>
      <Spacer/>
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
        <Button buttonStyle={{backgroundColor:"#1359c4"}} style={styles.button} title={"Confirm Changes"} onPress={()=>{editUser(username,email,photo)}}/> 
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  button:{
    width: 300,
    borderRadius:15,
    paddingBottom: 15,
    marginLeft: 35,
    justifyContent:"center",
    alignItems:"center"
},
  inputContainter:{
    borderWidth: 1 ,
     borderColor:"white"
 },
  input:{
    color:"white"
  },
  label:{
    color:"white",
    paddingBottom:5
  }
})

UserForm.defaultProps={
  initialValues:{
    username: '',
    email: '',
    photo: ''
  }
}

export default UserForm;