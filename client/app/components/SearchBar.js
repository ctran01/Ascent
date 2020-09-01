import React from 'react';
import { Feather } from '@expo/vector-icons'; 
import {View, TextInput, StyleSheet} from 'react-native';
import {SearchBar as Searchbar} from 'react-native-elements'
const SearchBar = ({searchTerm, setSearchTerm, onTermSubmit, searchFilter}) => {
    return (
        // <View style={styles.backgroundStyle}>
        //     <Feather name="search" size={24} color="black" style={styles.iconStyle} />
        //     <TextInput placeholder={"Search"}
        //      style={styles.inputStyle}
        //      value={searchTerm}
        //      onChangeText={setSearchTerm}
        //     //  autoCapitalize="none"
        //     //  autoCorrect={false}
        //     //onEndEditing searches 
        //      onEndEditing={onTermSubmit} />
        // </View>
        <Searchbar
            value={searchTerm}
            onChangeText={setSearchTerm}
            onEndEditing={onTermSubmit}
            lightTheme
            placeholder={"Search"}
            placeholderTextColor={"black"}
            inputStyle={{color:"black"}}
            searchIcon={{color:"black"}}
            autoCapitalize="none"
            autoCorrect={false}
        />
    );
}


const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle:{
        fontSize: 18,
        flex: 1
    },
    iconStyle:{
        alignSelf: 'center',
        marginRight: 15
    }
})
export default SearchBar;