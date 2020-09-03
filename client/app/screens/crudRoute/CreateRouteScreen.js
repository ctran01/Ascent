import React,{useContext} from 'react';
import {Text, View, StyleSheet, ScrollView, ImageBackground} from 'react-native'
import RouteForm from '../../components/RouteForm'
import {Context as RouteContext} from '../../context/RouteContext';
import Spacer from '../../components/Spacer';

const CreateRouteScreen = ({navigation}) => {

  const{addRoute} = useContext(RouteContext)


  return (
    <ImageBackground style={{flex:1}}source={require('../../images/blue-light.jpg')}>
      <Spacer/>
      <View>
        <RouteForm 
          submitButtonText={"Add Route"}
          onSubmit={
            (name,description,grade,type,areaid,latitude,longitude)=>{
              addRoute(name,description,grade,type,areaid,latitude,longitude, ()=>navigation.navigate('Home'), ()=>alert("Route Added!"))}}
          ></RouteForm>
      </View>
    </ImageBackground>
  );
}

CreateRouteScreen.navigationOptions = ({navigation}) => {
  
  return {
    title: "Add a route" ,
    headerTitleStyle: {color: 'white'},
    headerBackTitleVisible: false,
    headerStyle: {backgroundColor: 'black', }
  };
};
export default CreateRouteScreen;