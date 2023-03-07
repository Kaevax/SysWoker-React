import React from "react";

export function Navbar(props) {
    return(
        <div id="sidebar">
            <nav className="nav-1">
                <li><a class="navbar__link" href="#inicio"><i class="fas fa-home fa-2x"></i></a></li>
                <li><a class="navbar__link" href="#inicio"><i class="fas fa-briefcase fa-2x"></i></a></li>
            </nav>
            <div>
                <img src={props.MiniLogo} alt="" />
            </div>
            <nav className="nav-2">
                <li><a class="navbar__link" href="#inicio"><i class="fas fa-passport fa-2x"></i></a></li>
                <li><a class="navbar__link" href="#inicio"><i class="fas fa-paper-plane fa-2x"></i></a></li>
            </nav>
        </div>
    );
}