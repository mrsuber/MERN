
import {useSelector, useDispatch} from 'react-redux'
import {Loading,Toast} from '../../components'
import {GLOBALTYPES} from '../../redux/actions/globalTypes'
const Alert = ()=>{
  const {alert} = useSelector(state => state)
  const dispatch = useDispatch()


  return(
    <div>

    {alert.loading && <Loading/>}
    {alert.error && <Toast msg={{title:'Error', body:alert.error}} handleShow={()=>dispatch({type:GLOBALTYPES.ALERT, payload:{}})} bgColor="bg-danger"/>}
    {alert.success && <Toast msg={{title:'Success', body:alert.success}} handleShow={()=>dispatch({type:GLOBALTYPES.ALERT, payload:{}})} bgColor="bg-success"/>}
    </div>
  )
}

export default Alert
