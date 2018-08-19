import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import ChangeColor from './ChangeColor';
class ControllerComponent extends Component {

    onDownKey() {
        this.props.dispatch({type:'DOWN'});
    };
    render() {
        return (
            <View style={stylesController.controller}>
                <Text style={stylesController.controllName}> Controller Component </Text>
               < ChangeColor/>
                <View style={stylesController.ButtonContainer}>
                    <TouchableOpacity style={stylesController.button}
                    onPress ={() =>{
                    this.props.dispatch({type:'UP'});
                    }}>
                        <Text style={stylesController.buttonText}> +</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesController.button}
                    onPress ={this.onDownKey.bind(this)}>
                        <Text style={stylesController.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default connect()(ControllerComponent);

const stylesController = StyleSheet.create({
    controller: {
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'yellow',
        alignSelf:'stretch',
        margin: 20
    },
    controllName:{
        fontSize:20,
        marginBottom:10,

    },
    ButtonContainer:{
        flexDirection:'row',
        alignItems:'center',

    },
    button:{
        backgroundColor:'black',
        paddingHorizontal: 50,
        paddingVertical: 25,
        margin:10,
        borderRadius: 5

    },
    buttonText:{
        color:'white',
        fontSize:40
    },

});