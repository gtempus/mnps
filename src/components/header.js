import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/common.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        Need Native Plant Inspiration?{" "}
        <a href="/sponsors">Visit 2024 Sponsors, Vendors &amp; Exhibitors</a>
      </div>

      {/* Main Header */}
      <header className="site-header">
        <div className="header-container">
          <div className="logo">
            <img src="/images/NewColor_Society-1.png" alt="Midwest Native Plant Society" />
          </div>
          {/* Hamburger (mobile) */}
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          {/* Nav Menu */}
          <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
              <li>
                <Link to="/subscribe">Subscribe</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
