import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "../Button/Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            СкрTech
            <i class="fas fa-user-astronaut" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Нүүр
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Үйлчилгээ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                Нэвтрэх
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Бүртгүүлэх
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Бүртгүүлэх </Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
