import React from 'react';
import {Button as ReferralButton, Icon as ReferralIcon, Text as ReferralText} from 'native-base'
import {View,Linking, StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome,FontAwesome5 } from '@expo/vector-icons'; 

const ReferralContainer = () => {
  return (
    <View style={styles.referralContainer}>
      <ReferralButton iconLeft style={{backgroundColor:"transparent"}}onPress={()=>{Linking.openURL('https://github.com')}}>
        <ReferralIcon><FontAwesome5 name="github" size={24} color="white" /></ReferralIcon>
        <ReferralText>Github</ReferralText>
      </ReferralButton> 
      <ReferralButton iconLeft style={{backgroundColor:"transparent"}}onPress={()=>{Linking.openURL('https://linkedin.com')}}>
        <ReferralIcon><FontAwesome5 name="linkedin" size={24} color="white" /></ReferralIcon>
        <ReferralText>LinkedIn</ReferralText>
      </ReferralButton>
      <ReferralButton iconLeft style={{backgroundColor:"transparent"}}onPress={()=>{Linking.openURL('https://google.com')}}>
        <ReferralIcon><MaterialIcons name="person" size={24} color="white" /></ReferralIcon>
        <ReferralText>Portfolio</ReferralText>
      </ReferralButton>
    </View>
  );
}
const styles=StyleSheet.create({
  referralContainer:{
    flexDirection: 'row',
    justifyContent:"space-between"
  }
})

export default ReferralContainer;