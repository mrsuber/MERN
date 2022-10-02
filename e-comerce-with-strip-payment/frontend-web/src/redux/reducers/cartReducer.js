import {GLOBALTYPES} from '../actions/globalTypes'
import {CART_TYPES} from '../actions/cartAction'
const initialState = {
  cartItems:null
}

const cartReducer = (state = initialState, action)=>{
  switch (action.type) {

      case CART_TYPES.ADD_TO_CART:
        return {
          cartItems:action.payload.data
        }
      
      case CART_TYPES.GET_CART_ITEM:
        return {
          // ...state,
          cartItems:action.payload.data
        }
    default:
    return state;

  }
}

export default cartReducer
