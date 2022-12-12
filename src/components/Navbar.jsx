import React from "react";
import {Link, NavLink} from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}><img src={"/img/logo.png"} alt={"Logo Lau"} width={180} /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to={"/"}>Inicio</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to={"/category/tipografia"}>Tipografia</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to={"/category/caricaturas"}>Caricaturas</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to={"/category/realismo"}>Realismo</NavLink>
            </li>
        </ul>
        <div className="col-md-6">
        <CartWidget />
    </div>
        </div>
    </div>
    </nav>

    </div>
    )
}

export default Navbar;