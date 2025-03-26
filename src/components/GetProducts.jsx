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
    let [filteredProducts,setfilteredProducts] = useState([]);


    const img_url = 'https://konya.pythonanywhere.com/static/images/'

    const navigate = useNavigate();
    

    // finction to fetch products fro api

    const getProducts = async () => {
        setError('');
        setLoading('please wait, recieving the products...');

        
        try {
            const response = await axios.get('https://konya.pythonanywhere.com/api/getproducts');
            console.log(response.data);
            setLoading('');
            setProducts(response.data);
            setfilteredProducts(response.data);
        } catch (error) {
            setLoading('');

            setError(error.message);
        }
   
    }

    const handleSearch = (value) => {
        const filtered = products.filter((product)=>
         product.product_name.toLowerCase().includes(value.toLowerCase())
    );
        setfilteredProducts(filtered)

    };
   useEffect(() =>{
    getProducts()
   },[])

   


    return ( 
        
        <div className="row background">
            <br />

            <Navbar/>
           
            <br />
            <Carousel />
            <br />
            <br />

        
           


            <h1 className="text-light"><b>PRODUCTS ON SALE!</b></h1>
            <b className="text-danger">{error}</b>
            <b className="text-warning">{loading}</b>

            <div className="row justify-content-center ">
                <div className="col-md-4 my-4">
                    <input type="text" className="form-control" placeholder="Search product by name.." onChange={(e) => handleSearch(e.target.value)}/>
                </div>

            </div>
            
            {filteredProducts.map((product)=>(
                 <div className="col-md-3 justify-content-center mt-4">
                 <div className="card shadow">
                     <img src={img_url + product.product_photo} alt="" className="product_img mt-4" />
                     <div className="card-body"><h5 className="mt-2">{product.product_name}</h5></div>
                     <p className="text-muted">{product.product_desc.slice(0,10)}</p>
                     {/* {product.product_id} */}

                     <b className="text-warning">Ksh{product.product_cost}</b>

                     <button className="btn btn-dark w-100" onClick={() => navigate('/singleproduct',{state: {product}})}>view product</button>

                 </div>
             </div>

            ))}
            <Footer/>
           
        </div>
        
     );
}
 
export default GetProducts;