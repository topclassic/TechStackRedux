import {combineReducers} from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './selectionReducer'

export default combineReducers({
    libraries: LibraryReducer,  //keep to store
    SelectedLibraryId: SelectionReducer //keep to store
})