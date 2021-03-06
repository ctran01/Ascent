import React,{useContext} from 'react';
import {Text, View, StyleSheet,ImageBackground} from 'react-native'
import RouteForm from '../../components/RouteForm'
import {Context as RouteContext} from '../../context/RouteContext'
import AreaForm from '../../components/AreaForm';
const EditRouteScreen = ({navigation}) => {

  const {state, editRoute} = useContext(RouteContext)
  console.log(state)
  const id = navigation.getParam("id");
  const route = state.find((route)=> route.id === id)
  return (
    <ImageBackground style={{flex:1}}source={require('../../images/Signinbackground.jpg')}>

    <View>
      <RouteForm 
      initialValues={{name: route.name, grade: route.grade, type: route.type, areaid: route.area_id, latitude: route.latitude, longitude: route.longitude, description: route.description}}
      submitButtonText={"Confirm Changes"}
      onSubmit={(name,grade,type,areaid,latitude,longitude,description)=>{
        editRoute(id,name,grade,type,areaid,latitude,longitude,description, ()=> navigation.navigate('Home'), ()=>{alert("Route saved!")}, ()=>{alert("Something went wrong. Try again!")})}}
      />
        </View>
    </ImageBackground>
  );
}

EditRouteScreen.navigationOptions = ({navigation}) => {
  const title = navigation.getParam('title')
  return {
    title: "Edit Route" ,
    headerTitleStyle: {color: 'white'},
    headerBackTitleVisible: false,
    headerStyle: {backgroundColor: 'black'}
  };
};
export default EditRouteScreen;