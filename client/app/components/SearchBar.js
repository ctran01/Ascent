import React from 'react';
import { Feather } from '@expo/vector-icons'; 
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = ({searchTerm, onSearch, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" size={24} color="black" style={styles.iconStyle} />
            <TextInput placeholder={"Search"}
             style={styles.inputStyle}
             value={searchTerm}
             onChangeText={onSearch}
            //  autoCapitalize="none"
            //  autoCorrect={false}
             onEndEditing={onTermSubmit} />
        </View>
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