import React,{useState} from 'react';
import {View, SafeAreaView, StyleSheet, ImageBackground, TouchableOpactity} from 'react-native'
import {Input, Button, Text} from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons'; 
import Spacer from './Spacer';

const AreaForm = ({initialValues,onSubmit,submitButtonText}) =>{
  const [name, setName] = useState(initialValues.name)
  const [description, setDescription] = useState(initialValues.description)
  
  
  
  return(
      <SafeAreaView>
        <Text h3>Add an area</Text>
        <Input 
          label="Name of Area"
          placeholder={"Name"}
          placeholderTextColor="black"
          value={name}
          onChangeText={setName}
          autoCorrect={false}
          inputContainerStyle={{ borderColor: "black" }}
          leftIcon={<MaterialIcons name="person-outline" size={24} color="black" />} 
        />
        <View style={{height:200}}>
        <Input 
          label="Description"
          placeholder={"Description"}
          placeholderTextColor="black"
          value={description}
          onChangeText={setDescription}
          autoCorrect={false}
          inputContainerStyle={{ borderBottomWidth:0, borderColor: "black" }}
          multiline={true}
          numberOfLines={10} 
        />
        </View>
        
        <Button style={{marginTop:100}}title={submitButtonText} onPress={()=> {onSubmit(name,description)}}/>
      </SafeAreaView>
    )


}

AreaForm.defaultProps={
  initialValues:{
    name: '',
    description: ''
  }
}

export default AreaForm