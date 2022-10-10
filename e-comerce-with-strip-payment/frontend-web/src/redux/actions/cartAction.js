import { getDataAPI, postDataAPI, putDataAPI} from '../../utils/fetchData'
import {GLOBALTYPES} from './globalTypes'
export const CART_TYPES = {
  LOADING:'LOADING',
  ADD_TO_CART:'ADD_TO_CART',
  UPDATE_CART_ITEM:'UPDATE_CART_ITEM',
  REMOVE_CART_ITEM:'REMOVE_CART_ITEM',
  GET_CART_ITEM:'GET_CART_ITEM',
  CLEAR_CART_ITEM:'CLEAR_CART_ITEM',
  
}

export const addToCart = (data)=> async (dispatch)=>{
   
  try{
    dispatch({type:GLOBALTYPES.ALERT, payload:{loading:true}})
    const res = await postDataAPI('addToCart',data.data,data.token)
       
    dispatch({
      type:CART_TYPES.ADD_TO_CART,
      payload:res.data
    })

    dispatch({
      type:CART_TYPES.GET_CART_ITEM,
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

export const updateCartItem = (data)=> async (dispatch)=>{
   
  try{
    dispatch({type:GLOBALTYPES.ALERT, payload:{loading:true}})
    const res = await putDataAPI('updateCartItem',data.data,data.token)
       
    dispatch({
      type:CART_TYPES.UPDATE_CART_ITEM,
      payload:res.data
    })

    dispatch({
      type:CART_TYPES.GET_CART_ITEM,
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

export const removeCartItem = (data)=> async (dispatch)=>{
   console.log(data)
  try{
    dispatch({type:GLOBALTYPES.ALERT, payload:{loading:true}})
    const res = await putDataAPI(`removeCartItem/${data.productId}`,false,data.token)
       
    dispatch({
      type:CART_TYPES.REMOVE_CART_ITEM,
      payload:res.data
    })

    dispatch({
      type:CART_TYPES.GET_CART_ITEM,
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

export const getCartItems = (data)=> async (dispatch)=>{
 
  try{
    dispatch({type:GLOBALTYPES.ALERT, payload:{loading:true}})
    const res = await getDataAPI('cart',data.token)
    dispatch({
      type:CART_TYPES.GET_CART_ITEM,
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


export const clearCart = ()=> async (dispatch)=>{
 
  try{
    dispatch({type:GLOBALTYPES.ALERT, payload:{loading:true}})
    // const res = await getDataAPI('cart',data.token)
    dispatch({
      type:CART_TYPES.CLEAR_CART_ITEM,
      payload:{}
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



