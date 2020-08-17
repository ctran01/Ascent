import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Button title={"To Search Screen"} onPress={()=>navigation.navigate('Search')}/>
            <Button title={"To Map"} onPress={()=>navigation.navigate('Map')}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;