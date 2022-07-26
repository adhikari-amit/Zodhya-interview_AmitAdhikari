import React from 'react'
import { Link } from "react-router-dom"
import "./navbar.css"

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="..">CanIGo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                   
                        <Link className="nav-item nav-link active" to="/home">Home<span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="/feed">Feed</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar