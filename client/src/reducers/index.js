import authUser from './authUser'
import userTimesheets from './mapUser'
import managedUsers from './managedUsers'
import viewSheet from './viewSheet'
import {combineReducers} from 'redux'
import {loadingBarReducer} from 'react-redux-loading-bar'

export default combineReducers({authUser, userTimesheets, managedUsers, viewSheet, loadingBar: loadingBarReducer})
