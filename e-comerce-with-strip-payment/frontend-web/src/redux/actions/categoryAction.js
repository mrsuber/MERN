import { getDataAPI, postDataAPI} from '../../utils/fetchData'
import {GLOBALTYPES} from './globalTypes'
export const CATEGORY_TYPES = {
  LOADING:'LOADING',
  GET_CATEGORY_LIST:'GET_CATEGORY_LIST'
}



export const getCategoryList = ()=> async (dispatch)=>{
  try{
    dispatch({type:GLOBALTYPES.ALERT, payload:{loading:true}})
    const res = await getDataAPI('categories')
    dispatch({
      type:CATEGORY_TYPES.GET_CATEGORY_LIST,
      payload:res.data
    }) 
    
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
