//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import {connect} from 'react-redux'
import {CardSection} from './common'
import * as actions from '../actions'

// create a component
class ListItem extends Component {
    renderDescription(){
        const {library, expanded} = this.props

        if(expanded){
            return(
                <Text>{library.description}</Text>
            )
        }
        // if(library.id === SelectedLibraryId){ //match id to touch in list for show description
            // return(
                // <Text>{library.description}</Text>
        // }
    }
    render() {
        const {titleStyle} = styles
        const {id, tittle} = this.props.library
        console.log(this.props)
        return (
            //Call action in TouchableWithoutFeedback from selectLibrary and send parameter id
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

const mapStateToProps = (state,ownProps) => {
    const expanded = state.SelectedLibraryId === ownProps.library.id //can set logic out of component
    return {expanded}

   // return {
       // SelectedLibraryId: state.SelectedLibraryId //SelectedLibraryId keep in store can mapStateToProps 
   // }
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        paddingLeft: 15,
    },
});
//make this component available to the app
export default connect(mapStateToProps, actions)(ListItem);
