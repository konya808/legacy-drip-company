import axios from "axios";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SignIn = () => {

    let [username,setUsername] = useState('');
    let [password,setPassword] = useState('');
    let [success,setSuccess] = useState('');
    let [loading,setLoading] = useState('');
    let [error,setError] = useState('');

    const navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();
        
        try {
            setError('');
            setSuccess('');
            setLoading('Please wait...');
            
            const data = new FormData();
            data.append('usermame',username);
            data.append('password',password);
            
            const response = await axios.post('https://konya.pythonanywhere.com/api/signin', data);
            
            if (response.data.user){
                localStorage.setItem('user',JSON.stringify(response.data.user));
                navigate('/');
              } else {
                setLoading('');
                setError(response.data.message);
    
              }
        } catch (error) {
           setLoading('');
           setError('Something went wrong');
        }
    };

    const togglePassword = () => {
        const passwordInput = document.getElementById('password')
        const icon = document.getElementById('icon')

        let current_type = passwordInput.getAttribute('type')
        let new_type = ''
        if (current_type === 'password'){
             new_type = 'text'
        } else {
            new_type = 'password'
            icon.classList.add("bi-eye-fill");
            icon.classList.remove('bi-eye-slash-fill');
        }

        passwordInput.setAttribute('type',new_type);
    }
        return ( 
        <div className="row justify-content-center mt-4">
            <Navbar/> <br />
            <br />
            <br />
            <br />
            <div className="col-md-6 card shadow p-4">
                <h2>SIGN IN</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{success}</b>
                <form action="" onSubmit={submitForm}>
                    <input type="text" placeholder="Input username" required className="form-control" onChange={(e) => setUsername(e.target.value)}/> <br />
                   <div className="input-group"> 
                    <input type="password" id="password" placeholder="Input password" required className="form-control" onChange={(e) => setPassword(e.target.value)} />
                    <span className="input-group-text" onClick={togglePassword}><i id="value" class="bi bi-eye-fill"></i></span>
                    </div>
                   
                    <button className="btn btn-success" type="submit">SIGN IN</button>
                </form>
                <br />
                <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
            </div>

            <br />
            
            <br />
            <p>i agree to LEGACY DRIP CO. <i>Terms and conditions</i></p>
            <Footer/>
        </div>
     );
};
 
export default SignIn;