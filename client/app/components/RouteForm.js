import React,{useState} from 'react';
import {View, SafeAreaView, StyleSheet, ImageBackground, TouchableOpactity, Picker} from 'react-native'
import {Input, Button, Text} from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';

const RouteForm = ({initialValues,submitButtonText,onSubmit}) =>{
  const [name, setName] = useState(initialValues.name)
  const [description, setDescription] = useState(initialValues.description)
  const [grade,setGrade] =useState(initialValues.grade)
  const [type,setType] =useState(initialValues.type)
  const [latitude,setLatitude] =useState(initialValues.latitude)
  const [longitude,setLongitude] =useState(initialValues.longitude)
  const [area,setarea] =useState(initialValues.area)

  return(
      <SafeAreaView>
        <Text h3>Add a route</Text>
        <Input 
        label="Name"        
        placeholderTextColor="black"
        value={name}
        onChangeText={setName}
        autoCorrect={false}
        inputContainerStyle={{ borderColor: "black" }}
        />
        <Input 
        label="Grade"
        placeholderTextColor="black"
        value={grade}
        onChangeText={setGrade}
        autoCorrect={false}
        inputContainerStyle={{ borderColor: "black" }} 
        />
        <Text style={{fontSize:16, color: "#86939e", fontWeight:"bold", marginLeft:10,marginBottom:10}}>Type</Text>
        <DropDownPicker items={[
          {label: 'Sport', value: 'sport'},
          {label: 'Boulder', value: 'boulder'}
        ]}
        defaultNull
        containerStyle={{height:40, width: 120, marginLeft:10,marginBottom:10}}
        placeholder="Select type"
        onChangeItem={(item)=>{setType(item.value)}}
        />
        <Input 
        label="Latitude"        
        placeholderTextColor="black"
        value={latitude}
        onChangeText={setLatitude}
        autoCorrect={false}
        inputContainerStyle={{ borderColor: "black" }}
         />
        <Input 
        label="Longitude"        
        placeholderTextColor="black"
        value={longitude}
        onChangeText={setLongitude}
        autoCorrect={false}
        inputContainerStyle={{ borderColor: "black" }} 
        />
        <Input 
        label="Description"
        placeholder={"Enter Description Here"}
        placeholderTextColor="black"
        value={description}
        onChangeText={setDescription}
        autoCorrect={false}
        inputContainerStyle={{ borderBottomWidth:0, borderColor: "black" }}
        multiline={true} 
        />

        {/* Add Area later */}
        <Button style={{marginTop:100}}title={submitButtonText} onPress={()=> {onSubmit(name,description,grade,type,latitude,longitude)}}/>

      </SafeAreaView>
    )


}

RouteForm.defaultProps={
  initialValues:{
    name: '',
    description: '',
    grade: '',
    type: '',
    latitude: '',
    longitude: ''
  }
}

export default RouteForm