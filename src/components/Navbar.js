import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-dark bg-dark">
            <div
              style={{
                color: "white",
              }}
            >
              <NavLink to={"/"}>Employee Management Syetem</NavLink>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
