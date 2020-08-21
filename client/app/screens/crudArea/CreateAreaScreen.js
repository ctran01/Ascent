import React, {useContext} from 'react';
import { View,Text, StyleSheet, Image, ImageBackground} from 'react-native';
import AreaForm from '../../components/AreaForm'
import {Context as AreaContext} from '../../context/AreaContext'
const CreateAreaScreen = ({navigation}) => {
  const {addArea} = useContext(AreaContext);

  return (
    <ImageBackground style={{flex:1}}source={require('../../images/blue-light.jpg')}>
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

export default CreateAreaScreen;