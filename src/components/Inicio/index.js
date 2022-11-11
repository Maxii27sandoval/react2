import React from "react";
import Portada from "../../images/inicio.jpg";
import { Link } from "react-router-dom";

export const Inicio = () => {
    return (
        <div className="inicio">
            <Link to="/">
                <h1 className="title">Inicio</h1>
            </Link>
        </div>
    )
}