import React from 'react'
import { Link } from 'react-router-dom'

const NavbarMaaz = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-md bg-dark navbar-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        The Techrotics Lab
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="navbar-brand">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/diplomaT" className="navbar-brand">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/diplomaT" className="navbar-brand">
                                    Services
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            
        </>
    )
}

export default NavbarMaaz