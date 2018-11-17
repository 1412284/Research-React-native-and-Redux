import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import {connect} from 'react-redux';
import Word from './Word';
import Filter from './Filter';
import Header from './Header';
import Form from './Form';

class Main extends Component {
    getWordList(){
        const { myFilter, myWords } = this.props;
        if (myFilter === 'MEMORIZED') return myWords.filter(e => e.memorized);
        if (myFilter === 'NEED_PRACTICE') return myWords.filter(e => !e.memorized);
        return myWords;
    }
    render() {
        return (
            <View style={{ backgroundColor: 'yellow', flex: 1, alignSelf: 'stretch', justifyContent: 'center' }}>
              <Header />
                <View style={{ flex: 10 }}>
                {this.props.myIsAdding ? <Form /> : null }
                    <FlatList 
                        data={this.getWordList()}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <Word myWord={item} />}
                        
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

        myWords: state.arrWords,
        myFilter: state.filterStatus,
        myIsAdding:state.isAdding
    };
}
export default connect(mapStoreToProps)(Main)
