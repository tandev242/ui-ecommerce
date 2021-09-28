import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@material-ui/icons"
import './style.scss'

export default function Product({ item }) {
    return (
        <div className="product">
            <div className="product__circle"/>
            <img src={item.img} alt="no Img" />
            <div className="product__info">
                <div className="icon">
                    <ShoppingCartOutlined />
                </div>
                <div className="icon">
                    <SearchOutlined />
                </div>
                <div className="icon">
                    <FavoriteBorderOutlined />
                </div>
            </div>
        </div>
    )
}
