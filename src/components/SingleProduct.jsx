import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import ProductReviews from "./ProductReviews";

const SingleProduct = () => {
  const img_url = "https://konya.pythonanywhere.com/static/images/";
  const { product } = useLocation().state || {};

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading("Processing payment... Please wait.");

    try {
      const data = new FormData();
      data.append("amount", product.product_cost);
      data.append("phone", phone);

      const response = await axios.post(
        "https://konya.pythonanywhere.com/api/mpesa_payment",
        data
      );
      setLoading("");
      setSuccess(response.data.message);
    } catch (error) {
      setLoading("");
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-light min-vh-100">
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          {/* Product Card */}
          <div className="col-lg-10 d-flex flex-column flex-md-row card shadow border-0 p-4 rounded-4 mb-5 bg-white">
            {/* Product Image */}
            <div className="col-md-5 d-flex justify-content-center align-items-center mb-4 mb-md-0">
              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
            </div>

            {/* Product Info */}
            <div className="col-md-7 ps-md-4">
              <h2 className="text-dark mb-2 fw-bold">{product.product_name}</h2>
              <h4 className="text-pink mb-3">${product.product_cost}</h4>
              <p className="text-muted mb-4">{product.product_desc}</p>

              {/* Status Messages */}
              {loading && <div className="alert alert-warning py-2">{loading}</div>}
              {error && <div className="alert alert-danger py-2">{error}</div>}
              {success && <div className="alert alert-success py-2">{success}</div>}

              {/* Payment Form */}
              <form onSubmit={submitForm} className="mt-3">
                <div className="mb-3">
                  <label className="form-label">Amount</label>
                  <input
                    type="number"
                    readOnly
                    value={product.product_cost}
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Mpesa Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g., 254712345678"
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control form-control-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="btn w-100 btn-lg rounded-pill shadow"
                  style={{ backgroundColor: "#ff69b4", color: "white" }}
                >
                  {loading ? <i className="bi bi-arrow-repeat fa-spin"></i> : "Pay Now!"}
                </button>
              </form>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="col-lg-10 card shadow border-0 p-4 rounded-4 bg-white">
            <h4 className="mb-4 text-center fw-bold">Customer Reviews</h4>
            <ProductReviews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
