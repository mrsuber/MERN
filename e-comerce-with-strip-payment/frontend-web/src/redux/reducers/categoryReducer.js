import {CATEGORY_TYPES} from '../actions/categoryAction'
const initialState = {
  loading:false,
  categories:[],
}

const categoryReducer = (state = initialState, action)=>{
  switch (action.type) {
    case CATEGORY_TYPES.LOADING:
      return {
        ...state,
        loading:action.payload
      }
      case CATEGORY_TYPES.GET_CATEGORY_LIST:
        return {
          ...state,
          categories:action.payload.data
        }
     
    default:
    return state;

  }
}

export default categoryReducer
