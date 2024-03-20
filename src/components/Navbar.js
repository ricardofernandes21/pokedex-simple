import React from 'react'
import { Link, Outlet } from "react-router-dom"
import '../Styles/NavBar.css';

export const Navbar = () => {
  return (
    <div  className="navbar">
        <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
    </div>
  )
}
