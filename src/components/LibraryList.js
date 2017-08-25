//import liraries
import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import ListItem from './ListItem'

// create a component
class LibraryList extends Component {
    
    componentDidMount(){
        const ds = new ListView.DataSource({
            rowHasChanged:(r1,r2) => r1 !== r2
        })
        this.dataSource = ds.cloneWithRows(this.props.libraries)
    }
    renderRow(library){
        return <ListItem library={library}/>
    }
    render() {
        return(
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        libraries: state.libraries
    }
}

export default connect(mapStateToProps)(LibraryList);
