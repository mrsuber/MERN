import {combineReducers} from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import product from "./porductReducer";
import category from './categoryReducer'

export default combineReducers({
 auth,
 alert,
 product,
 category
})
