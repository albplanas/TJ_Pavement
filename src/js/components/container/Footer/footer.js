import React,{Component} from "react";

import logo2 from './../../../../img/logos/tjp.png';
   /***********Footer********* */
   function Footer(){
    return (
<footer>
     <div class="container mt-5">
       <div class="row text-white text-left">
         <div class="col-md-3  mb-5">
            <img class="img-fluid d-block mx-auto shadow rounded float-left " style={{width:"150px" , background: "rgb(220,220,220)"}} src={logo2} alt=""/>
            <br/><br/><br/>
            <p class="text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde. </p>
         </div>
         <div class="col-md-4 mb-5">
             <ul id="footInfo" >
                 <li  className="mb-3">
                 <i class="fas fa-phone-volume text-success shadow"></i>&nbsp;&nbsp;&nbsp;<span >Phone: (305)-305-3000</span>
                 </li>
                 <li className="mb-3">
                 <i class="fas fa-fax text-success shadow"></i>&nbsp;&nbsp;&nbsp;<span >Fax: (305)-305-3000</span>
                 </li>
                 <li className="mb-3">
                 <i class="fas fa-map-marked text-success shadow"></i>&nbsp;&nbsp;&nbsp;<span >Address: 6600 NW 32nd AveMiami, FL 33147 </span>
                 </li>
                 <li className="mb-3">
                 <i class="far fa-envelope text-success shadow"></i>&nbsp;&nbsp;&nbsp;<span >Email: Something@gmail.com </span>
                 </li>
                 <li className="mb-3">
                 <i class="fas fa-door-open text-success shadow"></i>&nbsp;&nbsp;&nbsp;<span >Open: From 7am to 5pm </span>
                 </li>
               </ul>
         </div>
         <div class="col-md-5 mb-5">
           <ul class="footLocation">
             <li >
             <iframe style={{width:"100%", height:"260px"}} frameborder="0"  src="" allowfullscreen></iframe>
             </li>
           </ul>
         </div>
       
       </div>
     </div>
   </footer>
    )
  }

  export default Footer;
