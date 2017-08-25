//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {CardSection} from './common'

// create a component
class ListItem extends Component {
    render() {
        return (
            <CardSection>
                <Text>{this.props.library.title}</Text>
            </CardSection>
        );
    }
}
//make this component available to the app
export default ListItem;
