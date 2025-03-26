import Navbar from "./Navbar";

const AboutUs = () => {
    return ( 

        <div className="row justify-content-center">
            <Navbar/>
            <div className="card shadow">
            <h2 className="text-secondary display-3">ABOUT <i>LEGACY DRIP CO.</i></h2>
            </div>

            <img src="images/c4d1ace43dd145b584d0ee0ba612a8af.gif" alt="" className="d-block w-100" height='300px' width='100px'/>
            

            <section className="row">
                <div className="col-md-4">
                    <h1 className="text-secondary">WE ARE LEGACY DRIP CO.</h1>
                    <p>This company was founded by a group of creative friends with the aim of awakening the sense of drip amoung the youth and globallwise.</p>

                </div>
                <div className="col-md-4">
                    <p>we tend to make it easier for peope to get the latest merch drops from the most influencial rappers such as <i>JUICEWRLD ,ICESPICE ,SKIMASK ,ROMAN REIGNS ,YOUNG THUG ,POST MALONE , RIHANNA , YNW MELLY , B SLIME ,XXX TENTACION ,DRAKE ,PLAYBOI CARTI</i> and many more...</p>

                </div>
                <div className="col-md-4">
                    <p>Our company is also anime based where by you can find latest anime merch in the centuryy!!!</p>
                </div>
            </section>
            
        </div>
     );
}
 
export default AboutUs;