import React, { useContext, useState, useEffect } from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native'
import AreaForm from '../../components/AreaForm'
import {Context as AreaContext} from "../../context/AreaContext"
import { createIconSetFromFontello } from 'react-native-vector-icons';
import apiServer from '../../api/apiServer'
const EditAreaScreen = ({navigation}) => {
  
  
  const { state, editArea} = useContext(AreaContext)
  const id = navigation.getParam("id");
  // const [area,setArea] = useState({})
  const area = state.find((area)=> area.id === id);


  // const  getArea = async(id)=>{
  //   const res = await apiServer.get(`/area/${id}`)
  //   try{
  //     setArea(res.data.area)

  //   }catch(err){
  //     console.log(err)
  //   }
  // }


  // useEffect(()=>{
  //   getArea(id)

  // },[])
  // console.log(area, "edit Area state")


  return (
    <ImageBackground style={{flex:1}}source={require('../../images/Signinbackground.jpg')}>

    <View>

      <AreaForm
      initialValues={{name: area.name, description: area.description}}
      submitButtonText={"Confirm Changes"}
      onSubmit={(name,description)=> {
        editArea(id,name,description, ()=> navigation.navigate("Home"), ()=>{alert("Area saved!")})}}
      />
    </View>
    </ImageBackground>
  );
}
EditAreaScreen.navigationOptions = ({navigation}) => {
  const title = navigation.getParam('title')
  return {
    title: "Edit Area" ,
    headerTitleStyle: {color: 'white'},
    headerBackTitleVisible: false,
    headerStyle: {backgroundColor: 'black'}
  };
};

export default EditAreaScreen;