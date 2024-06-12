import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar bg-black">
      <div className="Navbar-1">
        <h1 className="Logo">Imad edine</h1>
      </div>
      <div className="Navbar-2">
        <nav>
          <ul>
            <li>
              <a className="Link" href="/">
                Home
              </a>
              <a className="Link" href="#">
                About
              </a>
              <a className="Link" href="/Project">
                Project
              </a>
              <a className="Link" href="#">
                Contact{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}




