// Nav.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            <img
                alt='logo'
                className="logo"
                src="https://cdn.shopify.com/app-store/listing_images/6cfbc5cd395dd9c7c344e4f66a461ba7/icon/CLTy4sP0lu8CEAE=.png" />
            {
                auth ?

                    <ul className="nav-ul">
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link onClick={logout} to="/signup">Logout({ JSON.parse(auth).name})</Link></li>
                    </ul>
                    :
                    <ul className="nav-ul nav-right">
                        <li><Link to="/signup">SignUp</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
            }
        </div>
    )
}

export default Nav;
