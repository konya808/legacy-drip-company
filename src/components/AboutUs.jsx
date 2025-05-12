import Footer from "./Footer";
import Navbar from "./Navbar";

const AboutUs = () => {
    return (
        <div className="row justify-content-center bg-light">
            <Navbar />

            <div className="card shadow my-4 text-center bg-white rounded">
                <h2 className="text-secondary display-3 py-3">
                    ABOUT <i>LEGACY DRIP CO.</i> ✨
                </h2>
            </div>

            <img src="images/c4d1ace43dd145b584d0ee0ba612a8af.gif" alt="Banner" className="d-block w-100 rounded shadow mb-4" height="300px" />

            <div className="about-us px-4">
                <header className="about-header text-center py-5 bg-white rounded shadow mb-4">
                    <h1 className="display-4 text-danger">💕 Welcome to Legacy Drip! 💕</h1>
                    <p className="lead text-muted">Your one-stop shop for everything anime & kawaii culture! 🌸</p>
                </header>

                <section className="about-content row justify-content-center py-5">
                    <div className="col-lg-6 text-center mb-4">
                        <h2 className="text-danger">🎀 Our Story</h2>
                        <p>
                            Legacy Drip was founded by a group of passionate anime enthusiasts who wanted to create a space
                            that truly reflects the vibrant, diverse, and magical world of anime. Whether you're searching
                            for kawaii merchandise, exclusive collectibles, or just a piece of your favorite show, we've got your back! 🛍️✨
                        </p>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img
                            src="images/e2ff2019e3de4be4bb3da670e859218c.gif"
                            alt="Product showcase"
                            className="img-fluid rounded shadow-lg"
                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                        />
                    </div>
                </section>

                <section className="our-mission text-center py-5 bg-light rounded shadow my-4">
                    <h2 className="text-danger">🌟 Our Mission</h2>
                    <p>
                        We aim to bring joy, color, and quality to every anime fan around the globe by curating
                        a magical collection of merch and experiences. From iconic characters to underground gems,
                        we celebrate anime, music, and girl power — together! 💕🎶
                    </p>
                </section>

                <section className="core-values text-center py-5 bg-white rounded shadow my-4">
                    <h2 className="text-danger">💖 Our Core Values</h2>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <h4 className="text-pink">✨ Quality</h4>
                            <p>Only the best — we deliver top-tier authentic anime products you’ll adore. 🧸</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h4 className="text-pink">🌈 Community</h4>
                            <p>A place where fans can connect, share, and express their love for anime together. 💬💞</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h4 className="text-pink">💌 Customer First</h4>
                            <p>We’re here for you! Fast, friendly, and fabulous service every time. 🎁</p>
                        </div>
                    </div>
                </section>

                <section className="meet-the-team text-center py-5 bg-light rounded shadow my-4">
                    <h2 className="text-danger">👩‍🎤 Meet the Team</h2>
                    <div className="team-member">
                        <img
                            src="images/90b2319dd8e6434ab0981ba6f39e8549.gif"
                            alt="Team Member"
                            className="img-fluid rounded-circle mb-3 border border-danger"
                            style={{ width: '150px', height: '150px' }}
                        />
                        <div className="team-info">
                            <h3 className="text-pink">Konya Lavanne Hope Ch. - Founder & CEO 🌸</h3>
                            <p>
                                A true anime heart, Konya’s dream is to create a global haven for every anime lover.
                                She blends style, sound, and soul into every part of Legacy Drip. 💕
                            </p>
                        </div>
                    </div>
                </section>

                <section className="customer-testimonials text-center py-5 bg-white rounded shadow my-4">
                    <h2 className="text-danger">🗣️ What Our Customers Say</h2>
                    <div className="testimonial mb-3">
                        <p>“Legacy Drip has everything I ever wanted! The service is amazing, and the figures are gorgeous!”</p>
                        <p>- Sarah L. 💖</p>
                    </div>
                    <div className="testimonial mb-3">
                        <p>“Whether you want rare collectibles or cute merch, this place is perfect!”</p>
                        <p>- Mike T. ✨</p>
                    </div>
                </section>

                <section className="call-to-action text-center py-5 bg-light rounded shadow my-4">
                    <h2 className="text-danger">💌 Join the Legacy Drip Community!</h2>
                    <p>Subscribe to our newsletter for the latest kawaii arrivals, deals, and updates! 📬</p>
                    <button className="btn btn-danger btn-lg">Sign Up Now 💕</button>
                </section>

                <section className="contact-info text-center py-5 bg-white rounded shadow my-4">
                    <h2 className="text-danger">📞 Contact Us</h2>
                    <p>Got questions or need help? We’re just a message away!</p>
                    <p>Email: legacydrip@gmail.com 💌</p>
                    <p>Phone: 0722656474 ☎️</p>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default AboutUs;
