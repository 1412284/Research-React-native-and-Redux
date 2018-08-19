import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import {connect} from 'react-redux';
import Word from './Word';
import Filter from './Filter';

class Main extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'yellow', flex: 1, alignSelf: 'stretch', justifyContent: 'center' }}>
                <View style={{ flex: 10 }}>
                    <FlatList 
                        data={this.props.arrWords}
                        renderItem={({ item }) => <Word myWord={item} />}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Filter/>
                </View>
            </View>
        );
    }
}

function mapStoreToProps(state){
    return{

        arrWords: state.arrWords,
    };
}
export default connect(mapStoreToProps)(Main)
