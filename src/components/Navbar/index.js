import React from 'react'
import { Badge } from "@material-ui/core"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import {NavLink} from 'react-router-dom'
import './style.scss'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <span className="language">EN</span>
                <div className="search" >
                    <input className="search__text" placeholder="Search" />
                    <Search className="search__icon" />
                </div>
            </div>
            <NavLink to="/" className="navbar__center">
                <h1 className="logo">DZ. shop</h1>
            </NavLink>
            <div className="navbar__right">
                <NavLink className="item" to="/register">REGISTER</NavLink>
                <NavLink className="item" to="/login">SIGN IN</NavLink>
                <NavLink to="/cart" className="item">
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </NavLink>
            </div>
        </div>
    )
}
