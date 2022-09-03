import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Topbar, Sidebar,} from '../../components'
import {useSelector, useDispatch} from 'react-redux'
import './profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import {checkImage} from '../../utils/imageUpload'
import {GLOBALTYPES} from '../../redux/actions/globalTypes'
import {updateProfileUser} from '../../redux/actions/profileAction'


const Profile = ()=> {

const { id } = useParams()
const { auth } = useSelector(state=>state)

const dispatch = useDispatch()
const initialState = {
  fullname:'', gender:''
}
const [userData, setUserData]= useState(initialState)
const [onEdit,setOnEdit] = useState(false)
const {fullname, gender} = userData

const [avatar, setAvatar] = useState('')

const handleInput = e => {
  const { name , value} = e.target
  setUserData({...userData, [name]:value})
}

const changeAvatar = (e)=>{
  const file = e.target.files[0]
  const err = checkImage(file)
  if(err) return dispatch({type:GLOBALTYPES.ALERT, payload:{error:err}})
  setAvatar(file)
}

const handleEditUser = ()=>{
  setOnEdit(true)
  setUserData(auth.user)
}

const handleSubmit = (e)=>{
  e.preventDefault()
  dispatch(updateProfileUser({userData, avatar,auth}))
}
useEffect(()=>{
  if(id === auth.user._id){
    setUserData(auth.user)
  }
},[id,auth.user])

  return(<>

    <Sidebar/>
  <div className="admin__main">
    <Topbar/>

    <section className="py-5 my-5">
  		<div className="container">
  			<h1 className="mb-5">Account Settings</h1>
  			<div className="bg-white shadow rounded-lg d-block d-sm-flex">
  				<div className="profile-tab-nav border-right">
  					<div className="p-4">

  						<div className="img-circle text-center mb-3 profile__image_wrapper">
  							<img src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar} alt="Image" className="shadow" />
                <span className="profile__image_span"><FontAwesomeIcon icon={faCamera} /><p>Change</p></span>

                <input type="file" name="file" id="file_up" accept="image/*" onChange={changeAvatar}/>
  						</div>

  						<h4 className="text-center">{auth.user.fullname}</h4>
  					</div>
  					<div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  						<a className="nav-link active" id="account-tab" data-toggle="pill" href="#account" role="tab" aria-controls="account" aria-selected="true">
  							<i className="fa fa-home text-center mr-1"></i>
  							Account
  						</a>
  						<a className="nav-link" id="password-tab" data-toggle="pill" href="#password" role="tab" aria-controls="password" aria-selected="false">
  							<i className="fa fa-key text-center mr-1"></i>
  							Password
  						</a>
  						<a className="nav-link" id="security-tab" data-toggle="pill" href="#security" role="tab" aria-controls="security" aria-selected="false">
  							<i className="fa fa-user text-center mr-1"></i>
  							Security
  						</a>
  						<a className="nav-link" id="application-tab" data-toggle="pill" href="#application" role="tab" aria-controls="application" aria-selected="false">
  							<i className="fa fa-tv text-center mr-1"></i>
  							Application
  						</a>
  						<a className="nav-link" id="notification-tab" data-toggle="pill" href="#notification" role="tab" aria-controls="notification" aria-selected="false">
  							<i className="fa fa-bell text-center mr-1"></i>
  							Notification
  						</a>
  					</div>
  				</div>
  				<div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
            <form onSubmit={handleSubmit}>
  					<div className="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
  						<h3 className="mb-4">Account Settings</h3>

              { onEdit?<>

                <div className="row">
                <div className="col-md-6">
                  <div className="form-group position-relative">
                      <label>Full Name</label>
                      <input type="text" className="form-control" name="fullname" value={fullname} onChange={handleInput}/>
                      <small className=" text-danger position-absolute"
                        style={{top:'70%', right:'5px', transform:'translateY(-50%)'}}
                      >{fullname.length}/25</small>

                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                      <label htmlFor="gender">Gender</label>
                      <div className="input-group-prepend px-0 mb-4">
                        <select name="gender" id ="gender" className=" custom-select text-capitalize" onChange={handleInput}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>


                        </select>
                      </div>
                    </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                      <label>Account Status</label>
                      <h4> Verified: <span style={{color:`${auth.user.verified?'green':'red'}`}}>{auth.user.verified?`True` : `False`}</span></h4>
                    </div>
                </div>


              </div>

              </> :
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                        <label>Full Name</label>
                        <h4>{auth.user.fullname}</h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                        <label>User Name</label>
                        <h4>{auth.user.username}</h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                        <label>Email</label>
                        <h4>{auth.user.email}</h4>

                        </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                        <label>Gender</label>
                        <h4>{auth.user.gender}</h4>
                      </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                        <label>Account Status</label>
                        <h4> Verified: <span style={{color:`${auth.user.verified?'green':'red'}`}}>{auth.user.verified?`True` : `False`}</span></h4>
                      </div>
                  </div>


                </div>
              }

  						<div>
  							{onEdit?<><button className="btn btn-primary">Update</button></>:<button className="btn btn-primary" onClick={handleEditUser}>Edit Profile</button>}
                {onEdit?<button className="btn btn-light profile__verify_btn" onClick={()=>setOnEdit(false)}>Cancel</button>:<></>}


  						</div>
  					</div>
            </form>
  					<div className="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
  						<h3 className="mb-4">Password Settings</h3>
  						<div className="row">
  							<div className="col-md-6">
  								<div className="form-group">
  								  	<label>Old password</label>
  								  	<input type="password" className="form-control" />
  								</div>
  							</div>
  						</div>
  						<div className="row">
  							<div className="col-md-6">
  								<div className="form-group">
  								  	<label>New password</label>
  								  	<input type="password" className="form-control" />
  								</div>
  							</div>
  							<div className="col-md-6">
  								<div className="form-group">
  								  	<label>Confirm new password</label>
  								  	<input type="password" className="form-control" />
  								</div>
  							</div>
  						</div>
  						<div>
  							<button className="btn btn-primary">Update</button>
  							<button className="btn btn-light">Cancel</button>
  						</div>
  					</div>
  					<div className="tab-pane fade" id="security" role="tabpanel" aria-labelledby="security-tab">
  						<h3 className="mb-4">Security Settings</h3>
  						<div className="row">
  							<div className="col-md-6">
  								<div className="form-group">
  								  	<label>Login</label>
  								  	<input type="text" className="form-control" />
  								</div>
  							</div>
  							<div className="col-md-6">
  								<div className="form-group">
  								  	<label>Two-factor auth</label>
  								  	<input type="text" className="form-control" />
  								</div>
  							</div>
  							<div className="col-md-6">
  								<div className="form-group">
  									<div className="form-check">
  										<input className="form-check-input" type="checkbox" value="" id="recovery"/>
  										<label className="form-check-label" htmlFor="recovery">
  										Recovery
  										</label>
  									</div>
  								</div>
  							</div>
  						</div>
  						<div>
  							<button className="btn btn-primary">Update</button>
  							<button className="btn btn-light">Cancel</button>
  						</div>
  					</div>
  					<div className="tab-pane fade" id="application" role="tabpanel" aria-labelledby="application-tab">
  						<h3 className="mb-4">Application Settings</h3>
  						<div className="row">
  							<div className="col-md-6">
  								<div className="form-group">
  									<div className="form-check">
  										<input className="form-check-input" type="checkbox" value="" id="app-check" />
  										<label className="form-check-label" htmlFor="app-check">
  										App check
  										</label>
  									</div>
  									<div className="form-check">
  										<input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
  										<label className="form-check-label" htmlFor="defaultCheck2">
  										Lorem ipsum dolor sit.
  										</label>
  									</div>
  								</div>
  							</div>
  						</div>
  						<div>
  							<button className="btn btn-primary">Update</button>
  							<button className="btn btn-light">Cancel</button>
  						</div>
  					</div>
  					<div className="tab-pane fade" id="notification" role="tabpanel" aria-labelledby="notification-tab">
  						<h3 className="mb-4">Notification Settings</h3>
  						<div className="form-group">
  							<div className="form-check">
  								<input className="form-check-input" type="checkbox" value="" id="notification1" />
  								<label className="form-check-label" htmlFor="notification1">
  									Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusantium accusamus, neque cupiditate quis
  								</label>
  							</div>
  						</div>
  						<div className="form-group">
  							<div className="form-check">
  								<input className="form-check-input" type="checkbox" value="" id="notification2" />
  								<label className="form-check-label" htmlFor="notification2">
  									hic nesciunt repellat perferendis voluptatum totam porro eligendi.
  								</label>
  							</div>
  						</div>
  						<div className="form-group">
  							<div className="form-check">
  								<input className="form-check-input" type="checkbox" value="" id="notification3" />
  								<label className="form-check-label" htmlFor="notification3">
  									commodi fugiat molestiae tempora corporis. Sed dignissimos suscipit
  								</label>
  							</div>
  						</div>
  						<div>
  							<button className="btn btn-primary">Update</button>
  							<button className="btn btn-light">Cancel</button>
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
  	</section>

  </div>


    </>
  )
}

export default Profile
