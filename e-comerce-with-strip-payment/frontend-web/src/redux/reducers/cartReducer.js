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
      case CART_TYPES.UPDATE_CART_ITEM:
        return {
          cartItems:action.payload.data
        }
      case CART_TYPES.REMOVE_CART_ITEM:
        return {
          cartItems:action.payload.data
        }

      case CART_TYPES.GET_CART_ITEM:
        return {
       
          cartItems:action.payload.data
        }
      case CART_TYPES.CLEAR_CART_ITEM:
      return {
        
        cartItems:action.payload
      }
    default:
    return state;

  }
}

export default cartReducer
