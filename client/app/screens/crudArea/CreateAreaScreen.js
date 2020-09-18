import React, {useContext} from 'react';
import { View,Text, StyleSheet, Image, ImageBackground} from 'react-native';
import AreaForm from '../../components/AreaForm'
import {Context as AreaContext} from '../../context/AreaContext'
import Spacer from '../../components/Spacer';
const CreateAreaScreen = ({navigation}) => {
const {addArea} = useContext(AreaContext);

  return (
    <ImageBackground style={{flex:1}}source={require('../../images/Signinbackground.jpg')}>
    <Spacer/>
      <View>
        <AreaForm submitButtonText={"Add Area"} 
        onSubmit={(name,description)=>{
          addArea(name,description, ()=> navigation.navigate('Home'), ()=>{alert("Area saved!")})}}>
        </AreaForm>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({})

CreateAreaScreen.navigationOptions = ({navigation}) => {
  
  return {
    title: "Add an area" ,
    headerTitleStyle: {color: 'white'},
    headerBackTitleVisible: false,
    headerStyle: {backgroundColor: 'black', }
  };
};
export default CreateAreaScreen;