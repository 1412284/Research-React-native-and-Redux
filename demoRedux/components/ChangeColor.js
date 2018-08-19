import React, { Component } from 'react';
import {Text, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'

class ChangeColor extends Component {
    render() {
        return (
        <TouchableOpacity onPress={()=>{
            this.props.dispatch({type:'CHANGE_COLOR'});
        }

        }>
            <Text>Change Color</Text>
        </TouchableOpacity>
        );
     }
}

export default connect()(ChangeColor)
