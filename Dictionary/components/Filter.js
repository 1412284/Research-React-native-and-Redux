import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
export default class Filter extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity >
                    <Text>SHOW ALL</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>MEMORIZED</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text>NEED PRACTICE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#583C3C', 
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around' 
    },
    buttonText: { color: 'white' }
});
