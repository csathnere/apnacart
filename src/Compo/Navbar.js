import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My Navbar
          </a>      
         </div>      
          
        <a
          className="nav-link disabled"
          href="#"
          tabIndex={-1}
          aria-disabled="true"
        ></a>
      </nav>
      <a
        className="nav-link disabled"
        href="#"
        tabIndex={-1}
        aria-disabled="true"
      ></a>
    </div>
  );
}
