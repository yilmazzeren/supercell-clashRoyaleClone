import React from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className={style.navbar__container}>
      <Link to="/" className={style.navbar__logo}>
        <img
          src="https://i.pinimg.com/originals/3b/ba/27/3bba278c6105e80111e19f2b372eb40e.jpg"
          alt=""
        />
      </Link>
      <div className={style.navbar__links}>
        <Link to="/games">
          <li>Games</li>
        </Link>
        <Link to="/careers">
          <li>Careers</li>
        </Link>
        <Link to="/cards">
          <li>Cards</li>
        </Link>
      </div>
      <div className={style.navbar__searchInput}>
        <a href="https://supercell.com/en/supercell-id/tr/">
          SuperCell <span>ID</span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
