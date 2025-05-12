import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setSuccess('');
      setLoading(true);

      const data = new FormData();
      data.append('username', username);
      data.append('password', password);

      const response = await axios.post('https://konya.pythonanywhere.com/api/signin', data);

      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/');
      } else {
        setError(response.data.message || 'Invalid login credentials');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const togglePassword = () => {
    const passwordInput = document.getElementById('password');
    const icon = document.getElementById('icon');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      icon.classList.remove('bi-eye-fill');
      icon.classList.add('bi-eye-slash-fill');
    } else {
      passwordInput.type = 'password';
      icon.classList.remove('bi-eye-slash-fill');
      icon.classList.add('bi-eye-fill');
    }
  };

  return (
    <div className="bg-light" style={{ minHeight: '100vh', backgroundColor: '#ffe6f0' }}>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg p-4 border-0 rounded-4" style={{ backgroundColor: '#fff0f5' }}>
              <h2 className="text-center mb-4 text-pink">Sign In to Your Drip</h2>

              {loading && <div className="alert alert-info">Please wait...</div>}
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <form onSubmit={submitForm}>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    className="form-control rounded-pill border-pink"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ borderColor: '#ff69b4' }}
                  />
                </div>

                <div className="input-group mb-3">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    className="form-control rounded-start-pill border-pink"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ borderColor: '#ff69b4' }}
                  />
                  <button
                    type="button"
                    className="input-group-text rounded-end-pill"
                    onClick={togglePassword}
                    style={{ backgroundColor: '#ff69b4', color: 'white' }}
                  >
                    <i id="icon" className="bi bi-eye-fill"></i>
                  </button>
                </div>

                <button className="btn w-100 rounded-pill shadow" style={{ backgroundColor: '#ff69b4', color: 'white' }} type="submit">
                  Sign In
                </button>
              </form>

              <div className="text-center mt-3">
                <Link to="/signup" className="text-decoration-none" style={{ color: '#e91e63' }}>Don't have an account? Sign up here</Link>
                <br />
                <Link to="/forgotpassword" className="text-decoration-none" style={{ color: '#e91e63' }}>Forgot your password?</Link>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-4 text-muted">
          By signing in, you agree to <b>LEGACY DRIP CO.</b> Terms & Conditions
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
