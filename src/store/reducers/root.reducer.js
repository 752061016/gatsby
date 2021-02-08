// src/store/reducers/root.reducer.js
import { combineReducers } from 'redux'
import linkReducer from './link.reducer'

export default combineReducers ({
    linkReducer
})