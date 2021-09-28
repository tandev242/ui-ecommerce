import Announcement from '../../components/Announcement'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Add, Remove } from "@material-ui/icons"
import './style.scss'

export default function Cart() {
    return (
        <div className="cart-page">
            <Navbar />
            <Announcement />

            <div className="cart-page__wrapper">
                <h1 className="title">YOUR CART</h1>
                <div className="top">
                    <button className="top__btn-back">
                        CONTINUE SHOPPING
                    </button>
                    <button className="top__btn-checkout">
                        CHECKOUT NOW
                    </button>
                </div>
                <div className="bottom">
                    <div className="bottom__info">
                        <div className="product-info">
                            <div className="product-info__details">
                                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="no img" />
                                <div className="wrapper">
                                    <div className="name">
                                        <b>Product: </b>
                                        JESSIE THUNDER SHOES
                                    </div>
                                    <div className="brand">
                                        <b>Brand: </b>Nike
                                    </div>
                                    <div className="size">
                                        <b>Size: </b>34
                                    </div>
                                </div>
                            </div>
                            <div className="product-info__amount">
                                <div className="quantity">
                                    <Remove />
                                    <h3>3</h3>
                                    <Add />
                                </div>
                                <div className="price">
                                    30000
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="product-info">
                            <div className="product-info__details">
                                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="no img" />
                                <div className="wrapper">
                                    <div className="name">
                                        <b>Product: </b>
                                        JESSIE THUNDER SHOES
                                    </div>
                                    <div className="brand">
                                        <b>Brand: </b>Nike
                                    </div>
                                    <div className="size">
                                        <b>Size: </b>34
                                    </div>
                                </div>
                            </div>
                            <div className="product-info__amount">
                                <div className="quantity">
                                    <Remove />
                                    <h3>3</h3>
                                    <Add />
                                </div>
                                <div className="price">
                                    30000
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="bottom__summary">
                        <h1 className="title">ORDER SUMMARY</h1>
                        <div className="item">
                            <div className="item__text">Subtotal</div>
                            <div className="item__price">5000</div>
                        </div>
                        <div className="item">
                            <div className="item__text">Estimated Shipping</div>
                            <div className="item__price">5000</div></div>
                        <div className="item">
                            <div className="item__text">Discount</div>
                            <div className="item__price">5000</div>
                        </div>
                        <div className="item">
                            <h3 className="item__text">TOTAL</h3>
                            <h2 className="item__price">5000</h2>
                        </div>
                        <button>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
