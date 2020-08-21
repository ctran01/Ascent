import React,{useContext} from 'react';
import {Text, View, StyleSheet, ScrollView, ImageBackground} from 'react-native'
import RouteForm from '../../components/RouteForm'
import {Context as RouteContext} from '../../context/RouteContext';

const CreateRouteScreen = ({navigation}) => {

  const{addRoute} = useContext(RouteContext)


  return (
    <ImageBackground style={{flex:1}}source={require('../../images/blue-light.jpg')}>
      <View>
        <RouteForm 
          submitButtonText={"Add Route"}
          onSubmit={(name,description,grade,type,latitude,longitude)=>addRoute(name,description,grade,type,latitude,longitude, ()=>navigation.navigate('Home'), ()=>alert("Route Saved!"))}
          ></RouteForm>
      </View>
    </ImageBackground>
  );
}

export default CreateRouteScreen;