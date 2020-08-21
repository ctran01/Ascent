import React,{useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native'
import RouteForm from '../../components/RouteForm'
import {Context as RouteContext} from '../../context/RouteContext';

const CreateRouteScreen = ({navigation}) => {

  const{addRoute} = useContext(RouteContext)


  return (
    <View>
      <RouteForm 
        submitButtonText={"Add Route"}
        onSubmit={(name,description,grade,type,latitude,longitude)=>addRoute(name,description,grade,type,latitude,longitude, ()=>navigation.navigate('Home'), ()=>alert("Route Saved!"))}
        ></RouteForm>
    </View>
  );
}

export default CreateRouteScreen;