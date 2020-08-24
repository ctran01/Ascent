import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView , {PROVIDER_GOOGLE} from 'react-native-maps';

const Map = () => {
  return (
    <View>
      <Text>Map</Text>
      <MapView style={{height:300}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 30.2509,
        longitude: -97.7969,
        latitudeDelta: 0.3,
        longitudeDelta: 0.3
      }}/>
    </View>
  );
}

const styles=StyleSheet.create({

})
export default Map;