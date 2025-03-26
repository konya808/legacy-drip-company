import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <section class="row text-white bg-secondary p-4">
        <div class="col-md-4">
          <h4 class="text-center">About Us</h4>
          <p><emp>lEGACY DRIP CO.</emp>was founded in 2000 by Lavanne hope.The team is full of people with experience and hard working people.The Team has an aim of improving and uniting the nation through a better and fun way like 'DRIP COLLECTON'. </p>
          <p>COME ONE COME ALL!!!</p>
          <h3 className="text-underline">Explore</h3>
          <Link to="/" class="nav-link">Home</Link>
          <Link to="/addproduct" class="nav-link">Add</Link>

        </div>
        <div class="col-md-4">
          <h4 class="text-center">Contact us</h4>
          <form action="">
            <input type="email" placeholder="enter your email" class="form-control"/><br/>
            <textarea name="" id="" class="form-control" placeholder="leave your comment" rows="7"></textarea><br/>
            <button className="btn btn-dark">Submit</button>

          </form>
          <br />
          <br />
        </div>
        <div class="col-md-4">
          <h4 class="text-cnter">stay connected</h4><br/>
          <Link to ='https://facebook.com'> <img src="images/fb.png"alt="" width="30px"/></Link>
          <Link to='https://instagram.com'><img src="images/in.png" alt="" width="30px"/></Link>
          <Link to = 'https://x.com'><img src="images/x.png" alt="" width='30px' /></Link>
          <br />
          <hr />
          <p class="text-dark">Our anime themed store is located at Kilimani.We also sell latest merchs from the most influencial celeebrities all around the globe at a fair price.Welcome all!!!</p>
          <br />
          <hr />

        </div>
        <footer class="bg-dark text-white text-center p-2">
        <h5>Developed by Lavanne K. &copy;2025. All rights reserved</h5>
        </footer>

      </section>
      
     );
}
 
export default Footer;