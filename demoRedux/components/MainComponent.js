import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import  ControllerComponent  from './ControllerComponent';
import {connect } from 'react-redux';
class MainComponent extends Component {
    render() {
        const color = this.props.highlight?'white':'yellow';
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.appName}>DEMO Redux {'\n'} Main Component</Text>
                    <Text style={{ color,fontSize: 40}}>{this.props.value}</Text>
                </View>
                <ControllerComponent/>
            </View>
        );
    }
}
 
export default connect(function(state){
    return {
        value: state.value,
        highlight:state.highlight
    };
})(MainComponent)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        paddingTop: 0,
    },
    header: {
        //backgroundColor: 'blue',
        flex:1,
        justifyContent:'space-around',
        alignItems: 'center',
    },
    appName: {
       // backgroundColor: 'yellow',
        justifyContent:'space-around',
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    value: {
        color: 'yellow',
        fontSize: 40,
    },
});