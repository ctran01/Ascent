import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';


const SearchScreen = () => {
    const [searchTerm,  setSearchTerm] = useState('')
    const [areas, setAreas] = useState([])
    const [routes,setRoutes] = useState([])
    return (
        <View>
            <SearchBar></SearchBar>
            <ScrollView>
                {/* <ResultsList></ResultsList> */}
                
            </ScrollView>
        </View>    
    );
}

export default SearchScreen;