/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
import {Header} from './components/common'
import LibraryList from './components/LibraryList'

const App = () =>{
    return (
        // use Provider create store for use object in reducers all components
        <Provider store={createStore(reducers)}> 
            <View style={{flex:1}}>
                <Header headerText="Tech Stack"/>
                <LibraryList/>
            </View>
        </Provider>
    );
}

export default App


AppRegistry.registerComponent('TechStackRedux', () => App);
