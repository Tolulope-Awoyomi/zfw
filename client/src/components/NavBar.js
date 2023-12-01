import React, { useContext } from "react";
import { UserContext } from "./context/user";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../styles";

function NavBar() {
    const {logout } = useContext(UserContext);
    const navigate = useNavigate()

  function logoutUser() {
    fetch('/logout', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(() => {
        logout()
        navigate('/loginform')
    })
  }

    return (
        <header className="navigation bg-tertiary">
        <nav className="navbar navbar-expand-xl navbar-light text-center py-3">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link"><h6>Home</h6></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link"><h6>About</h6></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link"><h6>Contact</h6></NavLink>
                </li>
              </ul>
              <NavLink to="/loginform" className="btn btn-outline-primary">Log In</NavLink>
              <NavLink to="/signup" className="btn btn-primary ms-2 ms-lg-3">Sign Up</NavLink>
              <Button onClick={logoutUser} className="btn">Logout</Button>
            </div>
          </div>
        </nav>
      </header>
    );
  }


export default NavBar;
