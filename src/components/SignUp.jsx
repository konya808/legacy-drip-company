import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "./Footer";
import Navbar from "./Navbar";

const generatePassword = (length, options) => {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?';
  let characters = '';
  if (options.lowercase) characters += lowercase;
  if (options.uppercase) characters += uppercase;
  if (options.numbers) characters += numbers;
  if (options.symbols) characters += symbols;
  if (characters.length === 0) return '';
  return Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
};

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [passwordOptions, setPasswordOptions] = useState({ lowercase: true, uppercase: true, numbers: true, symbols: true });
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading('Please wait...');
      const data = new FormData();
      data.append('username', username);
      data.append('email', email);
      data.append('phone', phone);
      data.append('password', password);
      const response = await axios.post('https://konya.pythonanywhere.com/api/signup', data);
      setLoading('');
      setError('');
      setSuccess(response.data.success);
      setUsername('');
      setEmail('');
      setPhone('');
      setPassword('');
      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setLoading('');
      setError('Something went wrong...');
    }
  };

  const handlePasswordGeneration = () => {
    const generated = generatePassword(passwordLength, passwordOptions);
    setGeneratedPassword(generated);
    setPassword(generated);
  };

  const handlePasswordLengthChange = (e) => setPasswordLength(e.target.value);
  const handlePasswordOptionChange = (e) => {
    const { name, checked } = e.target;
    setPasswordOptions((prev) => ({ ...prev, [name]: checked }));
  };
  const togglePasswordVisibility = () => setPasswordVisible((prev) => !prev);

  return (
    <div className="bg-light" style={{ minHeight: '100vh', backgroundColor: '#fff0f5' }}>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg p-4 border-0 rounded-4" style={{ backgroundColor: '#ffe6f0' }}>
              <h2 className="text-center mb-4 text-pink">Create Your Drip Account</h2>
              {loading && <div className="alert alert-info">{loading}</div>}
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              <form onSubmit={submitForm}>
                <input type="text" placeholder="Name" required className="form-control mb-3 rounded-pill" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" placeholder="Email" required className="form-control mb-3 rounded-pill" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="tel" placeholder="Phone" required className="form-control mb-3 rounded-pill" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <div className="position-relative mb-3">
                  <input type={passwordVisible ? 'text' : 'password'} placeholder="Password" required className="form-control rounded-pill" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <span className="position-absolute" onClick={togglePasswordVisibility} style={{ top: '50%', right: '15px', transform: 'translateY(-50%)', cursor: 'pointer' }}>
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <button className="btn w-100 rounded-pill shadow" style={{ backgroundColor: '#ff69b4', color: 'white' }} type="submit">Sign Up</button>
              </form>

              <div className="password-generator mt-5">
                <h5 className="text-center">Password Generator</h5>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <label className="mb-0">Length:</label>
                  <input type="number" min="8" max="20" value={passwordLength} onChange={handlePasswordLengthChange} className="form-control w-25" />
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" name="lowercase" checked={passwordOptions.lowercase} onChange={handlePasswordOptionChange} />
                  <label className="form-check-label">Include lowercase</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" name="uppercase" checked={passwordOptions.uppercase} onChange={handlePasswordOptionChange} />
                  <label className="form-check-label">Include uppercase</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" name="numbers" checked={passwordOptions.numbers} onChange={handlePasswordOptionChange} />
                  <label className="form-check-label">Include numbers</label>
                </div>
                <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" name="symbols" checked={passwordOptions.symbols} onChange={handlePasswordOptionChange} />
                  <label className="form-check-label">Include symbols</label>
                </div>
                <button className="btn btn-outline-pink w-100" style={{ borderColor: '#ff69b4', color: '#ff69b4' }} type="button" onClick={handlePasswordGeneration}>
                  Generate Password
                </button>
                {generatedPassword && (
                  <div className="mt-3">
                    <h6>Generated Password:</h6>
                    <input type="text" className="form-control" readOnly value={generatedPassword} />
                  </div>
                )}
              </div>

              <p className="mt-4 text-center">Already have an account? <Link to="/signin" style={{ color: '#e91e63' }}>Sign in</Link></p>
            </div>
          </div>
        </div>
        <p className="text-center mt-4 text-muted">
          By signing up, you agree to <b>LEGACY DRIP CO.</b> Terms & Conditions
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
