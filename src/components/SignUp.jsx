import axios from "axios";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


const SignUp = () => {
    let [username,setUsername] = useState('');
    let [email,setEmail] = useState('');
    let [phone,setPhone] = useState('');
    let [password,setPassword] = useState('');
    let [loading,setLoading] = useState('');
    let [error,setError] = useState('');
    let [success, setSuccess] = useState('');

    const navigate = useNavigate();
    

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            setLoading('Please wait as we upload your data...')
            const data = new FormData();
            data.append('username',username);
            data.append('email',email);
            data.append('phone',phone);
            data.append('password',password);
  
            const response = await axios.post('https://konya.pythonanywhere.com/api/signup',data); //submit the credentials to the pyanywhere

            setLoading('');
            setError('');
            setSuccess(response.data.success);
            setEmail('');
            setPassword('');
            setPhone('');
            setUsername('');

            if (response.data.user){
                localStorage.setItem('user',JSON.stringify(response.data.user))
                navigate('/');
              } else {
                setLoading('');
                setError(response.data.message);
    
              }
  
             
        } catch (error) {
            setLoading('');
            setError('Something went wrong...');
        };
    };

    return ( 
        <div className="row justify-content-center mt-4">
            <Navbar/><br />
            <br />
            <br />
            <br />
             <div className="col-md-6 card shadow p-4">
                <h2>SIGN UP</h2>
                  <b className="text-danger">{error}</b>
                    <b className="text-warning">{loading}</b>
                    <b className="text-success">{success}</b>
                <form action="" onSubmit={submitForm}>
                    <input type="text" placeholder="Input your name" required className="form-control" onChange={(e) => setUsername(e.target.value)}/> <br />
                    <input type="email" placeholder='Input your email' required className="form-control" onChange={(e) => setEmail(e.target.value)} /> <br />
                    <input type="tel" placeholder="Input tel number" required className="form-control" onChange={(e) => setPhone(e.target.value)} /> <br />
                    <input type="password"  placeholder="Input your password" required className="form-control" onChange={(e) => setPassword(e.target.value)}/> <br />

                    <button className="btn btn-success" type="submit">SIGN UP</button>

                    <br />
                </form>

                <p>Already have an account? <Link to='/signin'>Sign in</Link></p>


             </div>
             <br />
             <br />
             <p>i agree to LEGACY DRIP CO. <i>Terms and conditions</i></p>
             <Footer/>
        
        </div>
     );
}
 
export default SignUp;