import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";

const GetProducts = () => {
    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState('');
    let [error, setError] = useState('');
    let [filteredProducts, setFilteredProducts] = useState([]);
    let [darkMode, setDarkMode] = useState(false);

    const img_url = 'https://konya.pythonanywhere.com/static/images/';
    const navigate = useNavigate();

    const getProducts = async () => {
        setError('');
        setLoading('Fetching our cute goodies...');

        try {
            const response = await axios.get('https://konya.pythonanywhere.com/api/getproducts');
            setLoading('');
            setProducts(response.data);
            setFilteredProducts(response.data);
        } catch (error) {
            setLoading('');
            setError("Oops! Couldn't fetch the items. Try again later.");
        }
    };

    const handleSearch = (value) => {
        const filtered = products.filter((product) =>
            product.product_name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    useEffect(() => {
        getProducts();
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <div className={`container-fluid ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} py-4`} style={{ backgroundColor: darkMode ? '#2c2c2c' : '#fff0f5' }}>
            <Navbar />
            <Carousel />

            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold" style={{ color: '#e91e63' }}>💖 Pretty Products Just for You 💖</h1>
                {error && <div className="alert alert-danger mt-3">{error}</div>}
                {loading && <div className="alert alert-info mt-3">{loading}</div>}
            </div>

            <div className="row justify-content-center mb-4">
                <div className="col-md-6">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control rounded-pill shadow-sm border-pink"
                            placeholder="Search your favorite item... 💅"
                            onChange={(e) => handleSearch(e.target.value)}
                            style={{ borderColor: '#ff69b4' }}
                        />
                        <span className="input-group-text bg-pink text-white rounded-end">
                            <i className="bi bi-search"></i>
                        </span>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end mb-4">
                <button
                    className="btn btn-pink rounded-pill px-4 shadow"
                    style={{ backgroundColor: '#ff69b4', color: 'white' }}
                    onClick={toggleDarkMode}
                >
                    🌙 Toggle Dark Mode
                </button>
            </div>

            <div className="row justify-content-center">
                {filteredProducts.map((product) => (
                    <div key={product.product_id} className="col-md-4 col-lg-3 mb-4">
                        <div className="card shadow border-0 rounded-4" style={{ backgroundColor: '#fff0f5' }}>
                            <img
                                src={img_url + product.product_photo}
                                alt={product.product_name}
                                className="card-img-top rounded-top"
                                style={{ height: '220px', objectFit: 'cover' }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title" style={{ color: '#e91e63' }}>{product.product_name}</h5>
                                <p className="card-text text-muted">{product.product_desc.slice(0, 50)}...</p>
                                <p className="fw-bold" style={{ color: '#ff1493' }}>Ksh {product.product_cost}</p>
                                <button
                                    className="btn btn-outline-pink w-100 rounded-pill shadow-sm"
                                    style={{ borderColor: '#ff69b4', color: '#ff69b4' }}
                                    onClick={() => navigate('/singleproduct', { state: { product } })}
                                >
                                    View More 💕
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default GetProducts;
