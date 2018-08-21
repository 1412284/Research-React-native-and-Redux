import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Platform, StatusBar, StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './components/HomeScreen';
import PostScreen from './components/PostScreen';
import PostCommentsScreen from './components/PostCommentsScreen';
import {Home,Post,PostComments} from './screenNames';
const AppNavigator = new StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: '#StoryOfDev'
    }
  },
  Post: {
    screen: PostScreen,
    navigationOptions: {
      title: '#StoryOfDev'
    }
  },
  PostComments: {
    screen: PostCommentsScreen,
    navigationOptions: {
      title: '#ChuyenCuaDev'
    }
  }
});

export default AppNavigator;