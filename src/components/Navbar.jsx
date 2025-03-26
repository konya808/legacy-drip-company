import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
      <section class="row">
      <div class="col-md-12">
        <div class="navbar navbar-expand-md navbar-light bg-secondary">
          <Link to="/" class="navbar-brand"><b>LEGACY DRIP CO.</b></Link>
          <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarcollapse">
            
             <div class="navbar-nav">
              <Link to="/" class="nav-link">Home</Link>
              <Link to="/addproduct" class="nav-link">Add</Link>
              <Link to="/aboutus" class="nav-link">About</Link>
             </div>
          </div>
          <div class="navbar-nav ms-auto">
            <Link to="/signin" class="nav-link">login</Link>
            <Link to="/signup" class="nav-link">register</Link>
          </div>
        </div>
      </div>
     </section>
    
     );
}
 
export default Navbar;