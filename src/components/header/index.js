import React from "react";
import Nike from "../../images/Nike.jpg";
import {Link}  from "react-router-dom";

export const Header = () => {
    return (
    <header>
        <Link to="/inicio/index.js">
        <div className="logo">
        <img src={Nike} alt="" width="150"></img>
        </div>
        </Link>

        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
        </ul>

        <ul>
            <li>
                <Link to="/Productos/index.js">Productos</Link>
            </li>
        </ul>
        <div className="cart">
            <box-icon name="cart"></box-icon>
            <span className="item_total">0</span>
        </div>
    </header>
    )
}