import { Link } from "react-router-dom";

const Carousel = () => {
    return ( 
        <section className="row">
        <div className="col-md-12">
          <div className="carousel slide" id="mycarousel" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/e2ff2019e3de4be4bb3da670e859218c.gif" alt="" className="d-block w-100" height="400px"/>
              </div>

              <div className="carousel-item">
                <img src=" images/90b2319dd8e6434ab0981ba6f39e8549.gif" alt="" className="d-block w-100" height="400px"/>

                <div className="carousel-caption">
                    <h2>Anime themed store</h2>
                    <p>Latest anime thrifts shipped from Japan!!1</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src="images/aec3e4b01eb34ef78ca10f818a6cac81.gif" alt="" className="d-block w-100" height="400px"/>
                <div className="carousel-caption">
                    <h2>WELCOME!</h2>
                    <p>WE have the latest drops from the most influencial celebrities from all over the globe!</p>
                </div>
              </div>
             
              <div className="carousel-item">
                
                <img src="images/c4d1ace43dd145b584d0ee0ba612a8af.gif" alt="" className="d-block w-100" height='400px' width='100px'/>
              </div>
              <div className="carousel-item">
                <img src="images/e25c47f39e504f49a76cb0d978053ac7.gif" alt="" className="d-block w-100" height='400px' width='100px'/>
              </div>

            </div>


            <Link to ="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </Link>

            <Link to="#mycarousel" className="carousel-control-next" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </Link>

          </div>
        </div>
      </section>
     );
}
 
export default Carousel;