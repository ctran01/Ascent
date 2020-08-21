import React,{useContext} from "react";
import {View, Text, StyleSheet} from 'react-native'
import {Button} from 'react-native-elements';
import {Context as AreaContext} from '../context/AreaContext'
import { SafeAreaView } from "react-native-safe-area-context";
const FollowedScreen = () => {
    const{ getArea }= useContext(AreaContext)

    return (
        <SafeAreaView>
            
            <Button buttonStyle={{backgroundColor:"#1359c4"}} style={styles.button} title={"Test"} onPress={getArea}/>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button:{
        width: 300,
        borderRadius:15,
        paddingBottom: 15,
        
    }
})
export default FollowedScreen;