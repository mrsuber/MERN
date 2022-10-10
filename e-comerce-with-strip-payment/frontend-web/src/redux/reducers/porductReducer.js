import {PRODUCT_TYPES} from '../actions/productAction'
const initialState = {
  loading:false,
  products:[],
}

const profileReducer = (state = initialState, action)=>{
  switch (action.type) {
    case PRODUCT_TYPES.LOADING:
      return {
        ...state,
        loading:action.payload
      }
      case PRODUCT_TYPES.GET_PRODUCT_LIST:
        return {
          ...state,
          products:action.payload.products
        }
      case PRODUCT_TYPES.GET_PRODUCT_LIST_MORE:
        return {
          ...state,
          products:[...state.products, ...action.payload.products]
        }
    default:
    return state;

  }
}

export default profileReducer
