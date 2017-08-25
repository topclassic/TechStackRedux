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
        <Provider store={createStore(reducers)}>
            <View>
                <Header headerText="Tech Stack"/>
                <LibraryList/>
            </View>
        </Provider>
    );
}

export default App


AppRegistry.registerComponent('TechStackRedux', () => App);
