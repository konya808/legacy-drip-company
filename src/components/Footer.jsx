import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section
            className="row text-white p-4"
            style={{ backgroundColor: '#2c003e', fontFamily: 'sans-serif' }}
        >
            {/* About Section */}
            <div className="col-md-4">
                <h4 className="text-center text-pink">🌸 About Us</h4>
                <p>
                    <strong>LEGACY DRIP CO.</strong> was founded in 2000 by Lavanne Hope.
                    We’re a girl-powered team bringing anime love and fashion together to create something magical 💫.
                </p>
                <p><em>Come one, come all — unleash your inner anime queen! 👑</em></p>

                <h5 className="text-light mt-4">✨ Explore</h5>
                <Link to="/" className="nav-link text-light">🏠 Home</Link>
                <Link to="/addproduct" className="nav-link text-light">➕ Add Product</Link>
            </div>

            {/* Contact Form */}
            <div className="col-md-4">
                <h4 className="text-center text-pink">💌 Contact Us</h4>
                <form>
                    <input type="email" placeholder="Your email" className="form-control my-2" />
                    <textarea className="form-control my-2" placeholder="Drop your message 💬" rows="5"></textarea>
                    <button
                        type="submit"
                        className="btn text-white w-100"
                        style={{ backgroundColor: '#e75480' }}
                    >
                        Send 💖
                    </button>
                </form>
            </div>

            {/* Social Links */}
            <div className="col-md-4 text-center">
                <h4 className="text-pink">📲 Stay Connected</h4>
                <div className="my-2">
                    <Link to="https://facebook.com"><img src="images/fb.png" alt="Facebook" width="30px" className="mx-1" /></Link>
                    <Link to="https://instagram.com"><img src="images/in.png" alt="Instagram" width="30px" className="mx-1" /></Link>
                    <Link to="https://x.com"><img src="images/x.png" alt="X" width="30px" className="mx-1" /></Link>
                </div>
                <hr className="bg-white" />
                <p className="text-light px-2">
                    🌟 Visit us in Kilimani and explore magical merch drops from your fave anime and pop icons!
                </p>
                <hr className="bg-white" />
            </div>

            {/* Footer Bottom */}
            <footer className="bg-dark text-white text-center p-2 w-100 mt-4">
                <h6>👩‍💻 Developed by Lavanne K. © 2025. All rights reserved</h6>
            </footer>
        </section>
    );
};

export default Footer;
