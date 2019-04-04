import React from "react"
import image1 from '../images/main.png';
import image2 from '../images/main1.png';
import image3 from '../images/main2.png';
import image4 from '../images/main4.png';

const Featured = () =>{
    return(
        <div class="container">
    <h3 class="title">Our featured homes</h3>
    <p>Tired of spending more on low quality services</p>
    <hr/>

    <div class="row">
     <div class="col-sm-3 col-md-6 col-lg-4"><img src={image4} className="img-responsive"/></div>
     <div class="col-sm-9 col-md-6 col-lg-8"><img src={image1} className="img-responsive"/></div>
     <div class="col-sm-9 col-md-6 col-lg-8"><img src={image3}  className="img-responsive"/></div>
     <div class="col-sm-3 col-md-6 col-lg-4"><img src={image2}  className="img-responsive"/></div>
    </div>
  </div>

        )
        
}
export default Featured