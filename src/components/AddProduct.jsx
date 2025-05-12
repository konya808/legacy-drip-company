import Footer from "./Footer";
import Navbar from "./Navbar";

const AboutUs = () => {
    return ( 
        <div className="row justify-content-center bg-light text-dark">
            <Navbar/>
            <div className="card shadow text-center p-4 bg-white">
                <h2 className="text-danger display-3">ABOUT <i>LEGACY DRIP CO.</i></h2>
            </div>

            <img src="images/c4d1ace43dd145b584d0ee0ba612a8af.gif" alt="Anime gif" className="d-block w-100" height="300px" />

            <div className="about-us">
                <header className="about-header text-center py-5 bg-white">
                    <h1 className="display-4 text-danger">💕 Welcome to Legacy Drip! 💕</h1>
                    <p className="lead text-secondary">Your one-stop shop for everything anime and stylish!</p>
                </header>
                
                <section className="about-content row justify-content-center py-5 bg-light">
                    <div className="col-lg-6 text-center">
                        <h2 className="text-pink">🌸 Our Story</h2>
                        <p>
                            Legacy Drip was founded by a group of passionate anime enthusiasts who wanted to create a store that reflects the vibrant and diverse world of anime. 
                            Whether you're looking for merchandise, collectibles, apparel, or just something cute and stylish, we’ve got you covered!
                        </p>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img 
                            src="images/e2ff2019e3de4be4bb3da670e859218c.gif"
                            alt="Our products"
                            className="img-fluid rounded shadow-lg"
                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                        />
                    </div>
                </section>

                <section className="our-mission text-center py-5 bg-white">
                    <h2 className="text-danger">💖 Our Mission</h2>
                    <p className="text-dark px-5">
                        We aim to bring the best anime and pop culture products to fans worldwide — ensuring top-notch quality and fun, expressive merch. 
                        We’re here to build a vibrant community where fans can express themselves freely and fashionably.
                    </p>
                </section>

                <section className="core-values text-center py-5 bg-light">
                    <h2 className="text-danger">✨ Our Core Values</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <h4 className="text-primary">Quality</h4>
                            <p>We sell only authentic, high-quality products our fans will love and trust.</p>
                        </div>
                        <div className="col-md-4">
                            <h4 className="text-primary">Community</h4>
                            <p>We foster a safe, inclusive space for anime lovers to connect and express themselves.</p>
                        </div>
                        <div className="col-md-4">
                            <h4 className="text-primary">Customer First</h4>
                            <p>Our customers are queens and kings — your happiness is our priority!</p>
                        </div>
                    </div>
                </section>

                <section className="meet-the-team text-center py-5 bg-white">
                    <h2 className="text-danger">👑 Meet the Team</h2>
                    <div className="team-member">
                        <img 
                            src="images/90b2319dd8e6434ab0981ba6f39e8549.gif" 
                            alt="Team Member"
                            className="img-fluid rounded-circle mb-3"
                            style={{ width: '150px', height: '150px' }}
                        />
                        <div className="team-info">
                            <h3 className="text-primary">Konya Lavanne Hope Ch. - Founder & CEO</h3>
                            <p>
                                Lavanne is the visionary behind Legacy Drip. She turned her passion for anime and music into a brand that uplifts others and spreads joy — one cute hoodie at a time!
                            </p>
                        </div>
                    </div>
                </section>

                <section className="customer-testimonials text-center py-5 bg-light">
                    <h2 className="text-danger">🗨️ What Our Customers Say</h2>
                    <div className="testimonial mb-3">
                        <p>"Legacy Drip has everything I could ever want! Amazing service and cute items — I’m obsessed!"</p>
                        <p>- Sarah L.</p>
                    </div>
                    <div className="testimonial mb-3">
                        <p>"So aesthetic and the merch is always on point. Totally recommend!"</p>
                        <p>- Mike T.</p>
                    </div>
                </section>

                <section className="call-to-action text-center py-5 bg-white">
                    <h2 className="text-danger">🚀 Join the Legacy Drip Community!</h2>
                    <p>Sign up for our newsletter to get exclusive updates on new arrivals, discounts, and more!</p>
                    <button className="btn btn-danger btn-lg">Sign Up</button>
                </section>

                <section className="contact-info text-center py-5 bg-light">
                    <h2 className="text-danger">📞 Contact Us</h2>
                    <p>If you have any questions or need help, we’re here for you:</p>
                    <p>Email: legacydrip@gmail.com</p>
                    <p>Phone: 0722656474</p>
                </section>
            </div>
            <Footer/>
        </div>
    );
}
 
export default AboutUs;
