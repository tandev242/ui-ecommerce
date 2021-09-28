import './style.scss'
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <div className="login-page">
            <div className="login-page__wrapper">
                <h2 className="title">SIGN IN</h2>
                <form action="" className="form-login">
                    <input type="text" className="form-login__username" placeholder="username"/>
                    <input type="text" className="form-login__password" placeholder="password"/>
                    <button>LOGIN</button>
                </form>
                <Link to={``} className="forgot-password">
                    DO NOT YOU REMEMBER THE PASSWORD ?
                </Link>
                <Link to={`register`}  className="sign-up">CREATE A NEW ACCOUNT</Link>
            </div>
        </div>
    )
}
