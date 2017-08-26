//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import {connect} from 'react-redux'
import {CardSection} from './common'
import * as actions from '../actions'

// create a component
class ListItem extends Component {
    render() {
        const {titleStyle} = styles
        const {id, tittle} = this.props.library
        console.log(this.props)
        return (
            <TouchableWithoutFeedback onPress = {() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{this.props.library.title}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        paddingLeft: 15,
    },
});
//make this component available to the app
export default connect(null, actions)(ListItem);
