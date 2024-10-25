

import logo from "./../../assets/favicon.png";
import { Link, useLocation } from 'react-router-dom';
import "./header.css"

function Header() {
    const location = useLocation();
    // const isActive = location.pathname === to;
    console.log(location)

  return (
    <>      
        <header>
            <h2 className="text-center mt-3 mb-3 top-title"><b>GIFTOS</b></h2>
            <nav className="navbar navbar-expand-md px-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo" className="logo" />
                        <b>GIFTOS</b>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <Link to="/" className={`nav-link ${location.pathname=="/"?'active':''}`}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/shop" className={`nav-link ${location.pathname=="/shop"?'active':''}`}>Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/whyus" className={`nav-link ${location.pathname=="/whyus"?'active':''}`}>Why Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/testimonial" className={`nav-link ${location.pathname=="/testimonial"?'active':''}`}>Testimonial</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className={`nav-link ${location.pathname=="/contact"?'active':''}`}>Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <span className="mx-2">
                                    Login
                                </span>
                            </a>
                            
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">
                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" >
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                        </li>

                    </ul>
                    </div>
                </div>
            </nav>


        </header>

           

    </>
  )
}

export default Header;