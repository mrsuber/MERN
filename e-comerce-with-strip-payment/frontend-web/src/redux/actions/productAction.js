import {postDataAPI} from '../../utils/fetchData'
import {GLOBALTYPES} from './globalTypes'
export const PRODUCT_TYPES = {
  LOADING:'LOADING',
  GET_PRODUCT_LIST:'GET_PRODUCT_LIST',
  GET_PRODUCT_LIST_MORE:'GET_PRODUCT_LIST_MORE'
}



export const getproducts = (query)=> async (dispatch)=>{
  try{
    dispatch({type:GLOBALTYPES.ALERT, payload:{loading:true}})
    const res = await postDataAPI('products',query)
      
    if(query.loadMore){
      dispatch({
        type:PRODUCT_TYPES.GET_PRODUCT_LIST_MORE,
        payload:res.data
      })
    }else{
      dispatch({
        type:PRODUCT_TYPES.GET_PRODUCT_LIST,
        payload:res.data
      })
    }
    dispatch({type:GLOBALTYPES.ALERT, payload:{loading:false}})
   
  }catch(err){
    dispatch({
      type:GLOBALTYPES.ALERT,
      payload:{
        error:err.response.data.msg
      }
    })

  }
}
