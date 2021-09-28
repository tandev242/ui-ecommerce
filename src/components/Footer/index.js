import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@material-ui/icons"
import './style.scss'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <h1 className="logo">DZ. shop</h1>
                <p className="desc">
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </p>
                <div className="list">
                    <div className="list__icon" style={{ backgroundColor: "#3B5999" }}>
                        <Facebook />
                    </div>
                    <div className="list__icon" style={{ backgroundColor: "#E4405F" }}>
                        <Instagram />
                    </div>
                    <div className="list__icon" style={{ backgroundColor: "#55ACEE" }}>
                        <Twitter />
                    </div>
                    <div className="list__icon" style={{ backgroundColor: "#E60023" }}>
                        <Pinterest />
                    </div>
                </div>
            </div>
            <div className="footer__center">
                <h3 className="title">Useful Links</h3>
                <ul className="list">
                    <li className="list__item">Home</li>
                    <li className="list__item">Cart</li>
                    <li className="list__item">Man Fashion</li>
                    <li className="list__item">Woman Fashion</li>
                    <li className="list__item">Accessories</li>
                    <li className="list__item">My Account</li>
                    <li className="list__item">Order Tracking</li>
                    <li className="list__item">Wishlist</li>
                    <li className="list__item">Wishlist</li>
                    <li className="list__item">Terms</li>
                </ul>
            </div>
            <div className="footer__right">
                <h3 className="title">Contact</h3>
                <div className="contact">
                    <div className="contact__info">
                        <Room style={{ marginRight: "10px" }} /> Dak Ha district, Kon Tum province
                    </div>
                    <div className="contact__info">
                        <Phone style={{ marginRight: "10px" }} /> +84922040559
                    </div>
                    <div className="contact__info">
                        <MailOutline style={{ marginRight: "10px" }} /> tan240600@gmail.com
                    </div>
                    <div className="contact__info">
                        <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}
