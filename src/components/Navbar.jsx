import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <a className="navbar-brand" href="./app.jsx"><img src={"img/logo.png"} alt={"Logo Lau"} width={180} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="./app.jsx">Inicio</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="./app.jsx">Cursos tipografia</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="./app.jsx">Cursos caricaturas</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="./app.jsx">Cursos realismo</a>
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