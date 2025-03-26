import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const SingleProduct = () => {

    const img_url = 'https://konya.pythonanywhere.com/static/images/'
    const {product} = useLocation().state || {};

    let [phone,setPhone] = useState('');
    let [loading,setLoading] = useState('');
    let [error,setError] = useState('');
    let [success,setSuccess] = useState('');

    const submitForm = async(e) => {
        e.preventDefault();
        setError('')
        setSuccess('')
        setLoading('Please wait...Processing payment ...')

        try {
            const data = new FormData()
            data.append('amount',product.product_cost)
            data.append('phone', phone)

            const response = await axios.post('https://konya.pythonanywhere.com/api/mpesa_payment' , data)
            setLoading('')
            setSuccess(response.data.message)
        } catch (error) {
            setLoading('')
            setError(error.messages)
        }
    };
    return ( 
        <div className="row justify-content-center mt-3">
            <Navbar/>
            <div className="col-md-3 card shadow">
                <img src={img_url + product.product_photo} alt={product.product_name} />
            </div>

            <div className="col-md-3 card shadow">
                <h2>{product.product_name}</h2>
                <h3 className="text-warning">{product.product_cost}</h3>
                <p className="text-muted">{product.product_desc}</p>

                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{success}</b>

                <form onSubmit={submitForm}>
                    <input type="number" readOnly value={product.product_cost} className="form-control" /><br />
                    <input type="tel" required placeholder='enter mpesa no,254xxxxxxxx' onChange={(e)=> setPhone(e.target.value)} className="form-control" /> <br />
                    <button className="btn btn-primary">PAY NOW!</button>
                </form>
            </div>
        </div>
     );
}
 
export default SingleProduct;