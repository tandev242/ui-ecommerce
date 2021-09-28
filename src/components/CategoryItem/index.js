import React from 'react'
import './style.scss'
export default function CategoryItem({item}) {
    return (
        <div className="category-item">
            <div className="category-item__img-box">
                <img src={item.img} alt="no img" />
            </div>
            <div className="category-item__info">
                <h1 className="title">{item.title}</h1>
                <button className="btn-shop-now">SHOP NOW</button>
            </div>
        </div>
    )
}
