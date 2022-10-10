import './loginRegisterBackground.css'
import vector1 from '../../images/leftimage.png'
import Ellipse from '../../images/Ellipse.png'
import Logo from '../../images/logo1.PNG'
import Blob from '../../images/blob.png'
import { Link} from 'react-router-dom'
function LoginRegisterBackground ({children,page}){

    return (
        <div className='main2'>
            <div className="leftImagediv">
                <img src={vector1} alt=""/>
                <div className='leftcontent'>
                    <img src={Ellipse} className="ellipse" alt=''/>
                    <img src={Logo} id="logo" alt=''/>
                    <img src={Blob} id="blob" alt=''/>
                    <p id='text'>ROMY is much   better when <br/>you have an account</p>
                    <p id='link'>Already have an account?<br/>{page ==='register' ? <Link to="/login" style={{color:'crimson'}}>Login Now</Link>:<Link to="/register" style={{color:'crimson'}}>Register Now</Link>}</p>
                </div>
            </div>
           <div className='formarea'>{children}</div>
        </div>
    );
}

export default LoginRegisterBackground;