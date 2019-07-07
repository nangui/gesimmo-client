import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/"> Page Tableau de bord </Link>
      </li>
      <li>
        <Link to="/biens"> Page Biens </Link>
      </li>
      <li>
        <Link to="/bailleurs"> Page Bailleurs </Link>
      </li>
    </ul>
  );
};

export default Navbar;
