//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import {connect} from 'react-redux'
import {CardSection} from './common'
import * as actions from '../actions'

// create a component
class ListItem extends Component {
    renderDescription(){
        const {library, SelectedLibraryId} = this.props

        if(library.id === SelectedLibraryId){ //match id to touch in list for show description
            return(
                <Text>{library.description}</Text>
            )
        }
    }
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
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = state => {
    return {
        SelectedLibraryId: state.SelectedLibraryId
    }
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        paddingLeft: 15,
    },
});
//make this component available to the app
export default connect(mapStateToProps, actions)(ListItem);
