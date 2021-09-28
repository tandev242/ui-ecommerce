import React from 'react'
import { popularProducts } from "../../data"
import Product from '../Product'
import './style.scss'

export default function Products() {
    return (
        <div className="products">
            {
                popularProducts.map((product, index) => <Product item={product} key={index} />)
            }
        </div>
    )
}
