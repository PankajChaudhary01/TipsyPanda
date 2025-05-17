import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import TipsyPanda from '../Images/TipsyPanda.png'; // Assuming this is your logo path
import Footer from './Footer';

// Make sure Bootstrap Icons CSS is linked in your public/index.html
// e.g., <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
// or install and import: npm install bootstrap-icons -> import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navigation({ size }) {

  // Use a green shade for active links (Bootstrap's success green is a common choice)
  const activeLinkGreen = '#198754'; // Or choose a custom green hex code

  // Style function for NavLink active state
  const getNavLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? activeLinkGreen : '', // Apply green color when active
    };
  };

  // Define navbar height for dynamic paddingTop calculation
  // Adjust this value if your navbar height changes (font size, padding etc.)
  // Inspect the element in your browser's dev tools to get the exact height
  const navbarHeight = '0px'; // Example value

  return (
    <>
      {/* Light theme, fixed top, padding, shadow, subtle green bottom border */}
      <nav
        className="navbar navbar-expand-md navbar-light bg-light fixed-top shadow-sm py-2"
        // Optional: Add a subtle green border bottom for more theme consistency
        style={{ borderBottom: `2px solid ${activeLinkGreen}1A` }} // Use low opacity green
      >
        <div className="container-fluid">
          {/* Brand */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={TipsyPanda} // Use the passed image
              alt="Tipsy Panda Logo"
              width="45"
              height="auto" // Maintain aspect ratio
              className="me-2" // Right margin
            />
            {/* Optional: Apply green color to brand name too */}
            <span className="fw-bold" style={{ color: activeLinkGreen }}>
              The Tipsy Panda
            </span>
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            aria-controls="collapsibleNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* Toggler icon color is handled by navbar-light */}
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Content */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            {/* Navigation Links - Centered */}
            <ul className="navbar-nav mx-auto mb-2 mb-md-0"> {/* mx-auto centers the links */}
              <li className="nav-item">
                <NavLink
                  className="nav-link px-md-3"
                  style={getNavLinkStyle}
                  to="/"
                  end // Exact match for root path
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link px-md-3"
                  style={getNavLinkStyle}
                  to="/Aboutus"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle px-md-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  // Optional: Style the dropdown toggle itself when active/open
                  // style={({isActive}) => isActive ? {color: activeLinkGreen} : {} } // Requires state logic if complex
                >
                  Category
                </a>
                {/* Standard light dropdown menu */}
                <ul className="dropdown-menu mt-2 shadow-sm"> {/* Added subtle shadow */}
                  <li><Link className="dropdown-item" to="/whiskey">Whiskey</Link></li>
                  <li><Link className="dropdown-item" to="/vodka">Vodka</Link></li>
                  <li><Link className="dropdown-item" to="/beer">Beer</Link></li>
                  <li><Link className="dropdown-item" to="/rum">Rum</Link></li>
                  {/* <li><Link className="dropdown-item" to="/cocktail">Cocktail</Link></li> */}
                  <li><Link className="dropdown-item" to="/domestic">Domestic</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link px-md-3"
                  style={getNavLinkStyle}
                  to="/service"
                >
                  Our Services
                </NavLink>
              </li>
            </ul>

            {/* Cart Button - Using btn-outline-success for green theme */}
            <Link
              to="/cart"
              className="btn btn-outline-success position-relative ms-md-3 my-2 my-md-0"
              style={{ '--bs-btn-hover-bg': activeLinkGreen, '--bs-btn-hover-border-color': activeLinkGreen }} // Ensure hover uses the consistent green
            >
              <i className="bi bi-cart me-1"></i> {/* Bootstrap Cart Icon */}
              Cart
              {/* Conditional Badge for cart items (keeping red for visibility) */}
              {size > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {size}
                  <span className="visually-hidden">items in cart</span>
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* IMPORTANT: Offset Content for Fixed Navbar */}
      {/* Use inline style to push content below the fixed navbar */}
      <div style={{ paddingTop: navbarHeight }}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}