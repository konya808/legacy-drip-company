import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#ffe4e1', padding: '1rem 2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="navbar-brand fw-bold" style={{ color: '#e91e63', fontSize: '1.5rem' }}>
          <Link to="/" className="text-decoration-none" style={{ color: '#e91e63' }}>
            💖 LEGACY DRIP CO.
          </Link>
        </div>

        <div className="d-none d-lg-flex gap-4">
          <Link to="/" className="nav-link" style={{ color: '#ff69b4' }}>Home</Link>
          <Link to="/addproduct" className="nav-link" style={{ color: '#ff69b4' }}>Add Product</Link>
          <Link to="/aboutus" className="nav-link" style={{ color: '#ff69b4' }}>About Us</Link>
        </div>

        <div className="d-flex gap-2">
          <Link to="/signin" className="btn" style={{ backgroundColor: '#ff69b4', color: 'white', borderRadius: '25px' }}>Login</Link>
          <Link to="/signup" className="btn" style={{ backgroundColor: '#e91e63', color: 'white', borderRadius: '25px' }}>Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
