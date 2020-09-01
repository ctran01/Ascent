import React, {useState} from 'react'
import ReferralContainer from '../components/ReferralContainer'
import {View, StyleSheet, Button} from 'react-native';
import {Text, Input, Button as SignInButton} from 'react-native-elements'
import Modal from 'react-native-modal'

const AboutUs = ({toggleModal,isModalVisable}) => {

  return (
    <View>

      <Modal isVisible={isModalVisable} animationIn={"slideInUp"}>
        <View>
          <ReferralContainer/>
          <SignInButton buttonStyle={{backgroundColor:"transparent"}} style={{ width:100, height:40, marginLeft:130, marginTop: 40}} titleStyle={{color:"white"}} title="Close" onPress={toggleModal}/>
        </View>

      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal:{
    width:100,
    height: 40,
    marginLeft:160,
    marginTop:30,
    
  }
})

export default AboutUs;