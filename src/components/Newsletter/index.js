import { Send } from "@material-ui/icons"
import './style.scss'

export default function Newsletter() {
    return (
        <div className="newsletter">
            <h1 className="newsletter__title">Newsletter</h1>
            <p className="newsletter__desc">Get timely updates from your favorite products</p>
            <div className="newsletter__email-box">
                <input type="text" className="email" placeholder="Your email" />
                <button className="btn-send"><Send/></button>
            </div>
        </div>
    )
}
