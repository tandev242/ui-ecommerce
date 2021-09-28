import './style.scss'

export default function Register() {
    return (
        <div className="register">
            <div className="register__wrapper">
                <h2 className="title">CREATE AN ACCOUNT</h2>
                <form action="" className="form-group">
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="last name" />
                    <input type="text" placeholder="username" />
                    <input type="text" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input type="password" placeholder="confirm password" />
                    <span className="policy">By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b></span>
                    <button>CREATE</button>
                </form>
            </div>
        </div>
    )
}
