import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <ul className="navbar">
                <li><NavLink style={({ isActive }) => { return { color: isActive ? "greenyellow" : "black" } }} className="nav-bar-link" to={'/about'}>About</NavLink></li>
                <li ><NavLink style={({ isActive }) => { return { color: isActive ? "greenyellow" : "black" } }} className="nav-bar-link" to={'/'}> Home</NavLink></li>
                <li ><NavLink style={({ isActive }) => { return { color: isActive ? "greenyellow" : "black" } }} className="nav-bar-link" to={'/users/sandeep'}> Sandy</NavLink></li>
                <li ><NavLink style={({ isActive }) => { return { color: isActive ? "greenyellow" : "black" } }} className="nav-bar-link" to={'/filter'}> Filter</NavLink></li>
                <li ><NavLink style={({ isActive }) => { return { color: isActive ? "greenyellow" : "black" } }} className="nav-bar-link" to={'/login'}> Login</NavLink></li>
            </ul>

        </div>

    )
}

export default NavBar;