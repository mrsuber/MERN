import {GLOBALTYPES} from './globalTypes'
import {imageUpload} from '../../utils/imageUpload'
import {patchDataAPI} from '../../utils/fetchData'

export const PROFILE_TYPES = {
  LOADING : 'LOADING',
  GET_USER: 'GET_USER'
}


export const updateProfileUser =({userData, avatar,auth}) => async (dispatch)=>{
  if(!userData.fullname){
    return dispatch({
      type:GLOBALTYPES.ALERT,
      payload:{error:"Please add your fullname."}
    })


  }

  if(userData.fullname.length> 25){
    return dispatch({
      type:GLOBALTYPES.ALERT,
      payload:{error:"Your full name is too long"}
    })


  }

  if(!userData.gender){
    return dispatch({
      type:GLOBALTYPES.ALERT,
      payload:{error:"please select a gender"}
    })


  }

  try{
    let media;
    dispatch({type:GLOBALTYPES.ALERT, payload:{loading: true}})
    if(avatar) media = await imageUpload([avatar])

    const res = await patchDataAPI("user",{
      ...userData,
      avatar:avatar?media[0].url : auth.user.avatar
    }, auth.token)

    dispatch({
      type:GLOBALTYPES.AUTH,
      payload:{
        ...auth,
        user:{
          ...auth.user,
          ...userData,
          avatar: avatar ? media[0].url : auth.user.avatar,

        }
      }
    })
    dispatch({type:GLOBALTYPES.ALERT, payload:{loading: false}})
  }catch(err){

  }
}
