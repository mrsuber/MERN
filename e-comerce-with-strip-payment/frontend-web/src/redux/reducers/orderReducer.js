import { ORDER_TYPES } from "../actions/orderAction";

const initialState = {
  order:null,
  orderHistory:null
}

const orderReducer = (state=initialState, action) => {

    switch (action.type) {
  
        case ORDER_TYPES.CHECKOUT:
          return {
            order:action.payload.data
          }
        case ORDER_TYPES.GET_ORDER_HISTORY:
          return {
            order:action.payload.data
          }
      default:
      return state;
  
    }
  }

export default orderReducer
