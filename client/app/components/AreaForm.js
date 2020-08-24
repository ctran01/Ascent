import React,{useState} from 'react';
import {View, SafeAreaView, StyleSheet, ImageBackground, TouchableOpactity, Keyboard} from 'react-native'
import {Input, Button, Text} from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons'; 
import Spacer from './Spacer';

const AreaForm = ({initialValues,onSubmit,submitButtonText}) =>{
  const [name, setName] = useState(initialValues.name)
  const [description, setDescription] = useState(initialValues.description)
  
  
  
  return(
      <SafeAreaView>
        {/* <Text h3>Add an area</Text> */}
        <Input 
          label="Name of Area"
          
          placeholderTextColor="white"
          value={name}
          onChangeText={setName}
          autoCorrect={false}
          inputContainerStyle={styles.inputContainter}
          inputStyle={styles.input}
          labelStyle={styles.label}
        />
        <View style={{height:200}}>
        <Input 
          label="Description"
          placeholder={"Enter Description Here"}
          placeholderTextColor="white"
          value={description}
          onChangeText={setDescription}
          autoCorrect={false}
          inputContainerStyle={{ borderBottomWidth:0, borderColor: "black" }}
          labelStyle={styles.label}
          inputStyle={styles.input}
          multiline={true}
          numberOfLines={10}
          onSubmitEditing={()=>Keyboard.dismiss()}
        />
        </View>
        
        <Button style={{marginTop:100,width: 200, left:100}} title={submitButtonText} buttonStyle={{ backgroundColor:"#1359c4"}} onPress={()=> {onSubmit(name,description)}}/>
      </SafeAreaView>
    )


}

const styles=StyleSheet.create({
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

AreaForm.defaultProps={
  initialValues:{
    name: '',
    description: ''
  }
}

export default AreaForm