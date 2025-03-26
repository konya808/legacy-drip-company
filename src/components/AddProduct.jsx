import axios from "axios";
import { useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


const AddProduct = () => {

    let [product_name,setProduct_name] = useState('');
    let [product_desc,setProduct_desc] = useState('');
    let [product_cost,setProduct_cost] = useState('');
    let [product_photo,setProduct_photo] = useState('');
    let [loading,setLoading] = useState('');
    let [error,setError] = useState('');
    let [success,setSuccess] = useState('');
    const fileInputRef = useRef(null);

    

    const submitForm = async (e) => {
        e.preventDefault();


        try {
            setError('');
            setSuccess('');
            setLoading('Please wait...');

            const data = new FormData()
            data.append('product_name',product_name);
            data.append('product_desc',product_desc);
            data.append('product_cost',product_cost);
            data.append('product_photo',product_photo);
            
            const response = await axios.post('https://konya.pythonanywhere.com/api/addproduct',data) ;

            setLoading('');
            setSuccess(response.data.success);
            setProduct_name('');
            setProduct_desc('');
            setProduct_cost('');
            
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        } catch (error) {
            setLoading('');
            setError(error.message);
        };
    };

    return ( 
        
        <div className="row justify-content-center mt-4">
             <Navbar/>
             <br />
             <br />
             <p><i>WELCOME!!!</i></p>
            <div className="col-md-6 p-4 card shadow"> 
               
                <h2>ADD PRODUCT</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{success}</b>
                <form action="" onSubmit={submitForm}>
                <input type="text" className="form-control" value={product_name} required placeholder="Input your product name" onChange={(e)=> setProduct_name(e.target.value)} /><br />
                    <textarea name="" id="" value={product_desc}placeholder='Your product description' required className="form-control" onChange={(e)=> setProduct_desc(e.target.value)}></textarea><br />
                    <input type="number" value={product_cost} required placeholder="Product cost" className="form-control" onChange={(e)=> setProduct_cost(e.target.value)}/>

                    <br />
                    <p>THE PRODUCT PHOTO</p>
                    <input type="file" ref={fileInputRef} required className="form-control" onChange={(e)=>setProduct_photo(e.target.files[0])}/> <br />
                    <button className="btn btn-success">Add product</button>
                </form>
            </div>
            <br />
            <p>I agree to <i>LEGACY DRIP CO POLICIES</i></p>
            <br />

            <Footer/><br />
        </div>
     );
}
 
export default AddProduct;