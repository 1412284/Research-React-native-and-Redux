import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import  MainComponent  from './MainComponent'
const defaultState = {value:10, highlight:true};

const reducer = (state = defaultState, action) =>  {
  if (action.type === 'UP') return {value:state.value+1,highlight:state.highlight};
  if (action.type === 'DOWN') return {value:state.value-1,highlight:state.highlight};
  if (action.type === 'CHANGE_COLOR') return {value:state.value,highlight:!state.highlight};
  return state;
};
const store = createStore(reducer);

export default class DemoRedux extends Component {
    render() {
        return (
            <Provider store = {store}>
              <MainComponent/> 
            </Provider>
        
        );
    }
}