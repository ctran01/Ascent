import React,{useState, useEffect, useContext} from 'react';
import {View, SafeAreaView, StyleSheet, ImageBackground, TouchableOpactity,Keyboard} from 'react-native'
import {Input, Button, Text} from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';
import apiServer from '../api/apiServer'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';


const RouteForm = ({initialValues,submitButtonText,onSubmit}) =>{
  
  const [name, setName] = useState(initialValues.name)
  const [description, setDescription] = useState(initialValues.description)
  const [grade,setGrade] =useState(initialValues.grade)
  const [type,setType] =useState(initialValues.type)
  const [latitude,setLatitude] =useState(initialValues.latitude)
  const [longitude,setLongitude] =useState(initialValues.longitude)
  const [areaIds,setAreaIds] =useState([])
  const [selectedArea, setSelectedArea] = useState(initialValues.areaid)
  const [error,setError] = useState('')
  
  const getAreaIds = async()=>{
    try{
      let res = await apiServer.get(`/area/`)
      setAreaIds(res.data.areas)
    }catch(err){
    console.log(err)
    }
  }

  useEffect(()=>{
    getAreaIds()
  },[])

console.log(selectedArea)

  const validate =(num)=>{
    if(typeof(num) !== 'number'){
      setError('Needs to be a Number')
    }
  }

  return(
      <SafeAreaView>
        {/* <Text h3>Add a route</Text> */}
        <Input 
        label="Name"        
        placeholderTextColor="black"
        value={name}
        onChangeText={setName}
        autoCorrect={false}
        inputContainerStyle={styles.inputContainter}
        inputStyle={styles.input}
        labelStyle={styles.label}
        selectionColor={"white"}
        />
        <Input 
        label="Grade"
        placeholderTextColor="black"
        value={grade}
        onChangeText={setGrade}
        autoCorrect={false}
        inputContainerStyle={styles.inputContainter}
        inputStyle={styles.input}
        labelStyle={styles.label}
        selectionColor={"white"}
        />
        
          
            <Text style={{fontSize:16, color: "white", fontWeight:"bold", marginLeft:10,marginBottom:10}}>Type</Text>
            <DropDownPicker items={[
              {label: 'Sport', value: 'Sport'},
              {label: 'Boulder', value: 'Boulder'},
              {label: 'Trad', value: 'Trad'}
            ]}
            defaultValue={initialValues.type}
            containerStyle={{height:40, width: 120, marginLeft:10,marginBottom:10}}
            placeholder="Select type"
            onChangeItem={(item)=>{setType(item.value)}}
            />
          
          
            
          
        
        <View style={{flexDirection:"row"}}>
          <View>
            <Input 
            label="Latitude"        
            placeholderTextColor="black"
            value={latitude}
            onChangeText={setLatitude}
            autoCorrect={false}
            inputContainerStyle={{borderWidth: 1,borderColor:"white", width:100}}
            inputStyle={styles.input}
            labelStyle={styles.label}
            selectionColor={"white"}
            />
          </View>
          <View style={{marginLeft:20}}>
            <Input 
            label="Longitude"        
            placeholderTextColor="black"
            value={longitude}
            onChangeText={setLongitude}
            autoCorrect={false}
            inputContainerStyle={{borderWidth: 1,borderColor:"white", width:100}}
            inputStyle={{color:"white"}}
            labelStyle={styles.label} 
            selectionColor={"white"}
            />
          </View>
        </View>

        <Text style={{fontSize:16, color: "white", fontWeight:"bold", marginLeft:10, marginBottom:10}}>Area</Text>
            <DropDownPicker items={ areaIds.map(area=> ({label:area.name, value:area.id}))}
            // defaultValue={selectedArea}
            containerStyle={{height:40, width: 140, marginLeft:10,marginBottom:10}}
            placeholder="Select type"
            onChangeItem={(item)=>{setSelectedArea(item.value)}}
          />
        
        <Input 
        label="Description"
        placeholder={"Enter Description Here"}
        placeholderTextColor="white"
        value={description}
        onChangeText={setDescription}
        autoCorrect={false}
        inputContainerStyle={{ borderBottomWidth:0, borderColor: "black" }}
        inputStyle={styles.input}
        labelStyle={styles.label} 
        multiline={true}
        onSubmitEditing={()=>Keyboard.dismiss()}
        selectionColor={"white"}
        />

        {/* Add Area later */}
        <Button style={{marginTop:40, width: 200, left:100,}} buttonStyle={{ backgroundColor:"#1359c4"}} title={submitButtonText} onPress={()=> {onSubmit(name,grade,type,selectedArea,latitude,longitude,description)}}/>

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
    
  }
})

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