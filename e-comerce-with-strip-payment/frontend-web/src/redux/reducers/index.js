import {combineReducers} from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import product from "./porductReducer";
import category from './categoryReducer'
import cart from './cartReducer'

export default combineReducers({
 auth,
 alert,
 product,
 category,
 cart
})
