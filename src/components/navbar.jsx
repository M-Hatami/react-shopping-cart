import React, { Component } from "react";

// React Stateless Functional Component here is an Alternative instead of
// class Component for Components don't have an handler method and or state
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          نوار گزینه <span className="badge bg-secondary">{totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
