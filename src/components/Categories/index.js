import React from 'react'
import CategoryItem from '../CategoryItem';
import { categories } from "../../data";
import './style.scss'

export default function Categories() {
    return (
        <div className="categories">
            {
                categories.map((category, index) => <CategoryItem item={category} key={index} />)
            }
        </div>
    )
}
