import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Newsletter from '../../components/Newsletter';
import Products from '../../components/Products';
import './style.scss'

export default function ProductList() {



    return (
        <div className="product-list-page">
            <Announcement />
            <Navbar />


            <h2 className="product-list__title">
                Features
            </h2>
            <div className="product-list__filter">
                <div className="item">
                    <h3>Filter Products: </h3>
                    <select name="" id="">
                        <option value="White"> White</option>
                        <option value="White"> White</option>

                        <option value="White"> White</option>
                        <option value="White"> White</option>
                    </select>
                    <select name="" id="">
                        <option value="White"> White</option>
                        <option value="White"> White</option>

                        <option value="White"> White</option>
                        <option value="White"> White</option>
                    </select>
                </div>
                <div className="item">
                    <h3>Sort Products: </h3>
                    <select name="" id="">
                        <option value="White"> White</option>
                        <option value="White"> White</option>

                        <option value="White"> White</option>
                        <option value="White"> White</option>
                    </select>
                </div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}
