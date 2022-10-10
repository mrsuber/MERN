import { getDataAPI, postDataAPI} from '../../utils/fetchData'
import {GLOBALTYPES} from './globalTypes'
export const ORDER_TYPES = {
 
  CHECKOUT:'CHECKOUT',
  GET_ORDER_HISTORY:'GET_ORDER_HISTORY'
}



export const checkout = (data,)=> async (dispatch)=>{

   let datatosend ={
    token:data.token,
    total:data.total,
   }
  try{
    dispatch({type:GLOBALTYPES.ALERT, payload:{loading:true}})
    const res = await postDataAPI('checkout',datatosend,data.authtoken)
       
    dispatch({
      type:ORDER_TYPES.CHECKOUT,
      payload:res.data
    })

    dispatch({type:GLOBALTYPES.ALERT, payload:{loading:false}})
    dispatch({
      type:GLOBALTYPES.ALERT,
      payload:{
        success:res.data.msg
      }
    })
  }catch(err){
    dispatch({
      type:GLOBALTYPES.ALERT,
      payload:{
        error:err.response.data.msg
      }
    })

  }
}

export const getOrderHistory = (data)=> async (dispatch)=>{
   
  try{
    dispatch({type:GLOBALTYPES.ALERT, payload:{loading:true}})
    const res = await getDataAPI('orderHistory',data.token)
       console.log(res)
    dispatch({
      type:ORDER_TYPES.GET_ORDER_HISTORY,
      payload:res.data
    })

    dispatch({type:GLOBALTYPES.ALERT, payload:{loading:false}})
    dispatch({
      type:GLOBALTYPES.ALERT,
      payload:{
        success:res.data.msg
      }
    })
  }catch(err){
    dispatch({
      type:GLOBALTYPES.ALERT,
      payload:{
        error:err.response.data.msg
      }
    })

  }
}