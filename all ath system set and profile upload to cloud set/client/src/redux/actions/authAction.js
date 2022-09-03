import {postDataAPI} from '../../utils/fetchData'
import {GLOBALTYPES} from './globalTypes'
import valid from '../../utils/valid'


export const login = (data)=> async (dispatch)=>{
  try{
    dispatch({type:GLOBALTYPES.ALERT, payload:{loading:true}})
    const res = await postDataAPI('login', data)

    dispatch({
      type:GLOBALTYPES.AUTH,
      payload:{
        token:res.data.access_token,
        user: res.data.user
      }
    })

    localStorage.setItem("firstLogin",true)
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

export const refreshtoken = () => async (dispatch) => {
  const firstLogin = localStorage.getItem("firstLogin")
  if(firstLogin){
    dispatch({type:GLOBALTYPES.ALERT,payload:{loading:true}})
    try {
      const res = await postDataAPI('refresh_token')

      dispatch({
        type:GLOBALTYPES.AUTH,
        payload:{
          token:res.data.access_token,
          user: res.data.user
        }
      })

      dispatch({type:GLOBALTYPES.ALERT,payload:{}})

    } catch (err) {
      dispatch({
        type:GLOBALTYPES.ALERT,
        payload:{
          error:err.response.data.msg
        }
      })
    }
  }
}


export const register = (data) => async (dispatch) => {
  try {
    const check = valid(data)
    if(check.errLength > 0){
      return dispatch({type:GLOBALTYPES.ALERT, payload:check.errMsg})
    }
    dispatch({type:GLOBALTYPES.ALERT,payload:{loading:true}})
    const res = await postDataAPI('register', data)
    dispatch({type:GLOBALTYPES.ALERT,payload:{}})
    dispatch({
      type:GLOBALTYPES.AUTH,
      payload:{
        token:res.data.access_token,
        user: res.data.user
      }
    })

    localStorage.setItem("firstLogin",true)
    dispatch({
      type:GLOBALTYPES.ALERT,
      payload:{
        success:res.data.msg
      }
    })

  } catch(err){
    dispatch({
      type:GLOBALTYPES.ALERT,
      payload:{
        error:err.response.data.msg
      }
    })

  }
}

export const logout = ()=> async(dispatch)=>{
  try {
    localStorage.removeItem('firstLogin')
    await postDataAPI('logout')
    window.location.href="/"
  } catch(err){
    dispatch({
      type:GLOBALTYPES.ALERT,
      payload:{
        error:err.response.data.msg
      }
    })

  }
}

export const verification = (data)=> async (dispatch)=>{
  try{

    dispatch({type:GLOBALTYPES.ALERT, payload:{loading:true}})
    const res = await postDataAPI('verify-email', data)



    dispatch({
      type:GLOBALTYPES.ALERT,
      payload:{
        success:res.data.msg
      }
    })
    window.location.href="/"
  }catch(err){
    dispatch({
      type:GLOBALTYPES.ALERT,
      payload:{
        error:err.response.data.msg
      }
    })

  }
}


export const resendMail = (data)=> async (dispatch)=>{
  try{

    dispatch({type:GLOBALTYPES.ALERT, payload:{loading:true}})
    const res = await postDataAPI('resend-email', data)





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


export const forgotPassword = (data)=> async (dispatch)=>{
  try{

    dispatch({type:GLOBALTYPES.ALERT, payload:{loading:true}})
      console.log(data)
    const res = await postDataAPI('forgotpassword', data)

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




export const resetPassword = (data)=> async (dispatch)=>{
  try{

    dispatch({type:GLOBALTYPES.ALERT, payload:{loading:true}})

    const res = await postDataAPI(`reset-password?token=${data.token}&id=${data.id}`, {password:data.password})

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
