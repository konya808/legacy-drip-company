
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import SignIn from './components/SignIn';
import AddProduct from './components/AddProduct';
import GetProducts from './components/GetProducts';
import SingleProduct from './components/SingleProduct';
import AboutUs from './components/AboutUs';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="display-4">SHOP AT LEGACY DRIP CO.!BIG DEAL DAYS
        </h1>
      </header>
    
      <Router>
      <Routes>
        <Route path='/signup' element = {<SignUp/>} />
        <Route path='/signin' element = {<SignIn/>} />
        <Route path='/addproduct' element = {<AddProduct/>}/>
        <Route path='/' element= {<GetProducts/>} />
        <Route path = '/singleproduct' element = {<SingleProduct/>} />
        <Route path ='/aboutus' element = {<AboutUs/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
