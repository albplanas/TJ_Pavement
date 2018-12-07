import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';

import logo1 from './../../../../img/logos/creative-market.jpg';
import logo2 from './../../../../img/logos/designmodo.jpg';
import logo3 from './../../../../img/logos/envato.jpg';
import logo4 from './../../../../img/logos/themeforest.jpg';


import team1 from './../../../../img/team/team1.png';
import team2 from './../../../../img/team/team2.png';
import team3 from './../../../../img/team/team3.png';





import Services from "./../Services/Services" 
import Portfolio from "./../Portfolio/Portfolio"
import About from "./../About/About"
import Modal from "./../Portfolio/Modal"




class Home extends Component {




    componentDidMount(){
      window.onscroll = (e) => {
        console.log()
        const nav = document.querySelector('#mainNav');
        if(window.scrollY < 110) nav.className = "navbar navbar-expand-lg navbar-dark fixed-top"; else nav.className = "navbar navbar-expand-lg navbar-dark bg-dark fixed-top h-7 ";
        console.log("scroll")
      };
    }


    render() { 
        
  
   
      return (
              <div id="page-top">
              <TopBar/>

                <Header/>

                <Services/>

                <Portfolio/>

                <About/>

                <Team/>

                <Sponsors/>
                
                <Contact/>

            <Footer/>



            <Modal id={"portfolioModal1"} head={"Lorem ipsum dolor sit amet consectetur."} description={"Some text here"} src={1} name={"Project's name"} list={["Element1","Element2","Element3"]}/>
            <Modal id={"portfolioModal2"} head={"Lorem ipsum dolor sit amet consectetur."} description={"Some text here"} src={2} name={"Project's name"} list={["Element1","Element2","Element3"]}/>
            <Modal id={"portfolioModal3"} head={"Lorem ipsum dolor sit amet consectetur."} description={"Some text here"} src={3} name={"Project's name"} list={["Element1","Element2","Element3"]}/>
            <Modal id={"portfolioModal4"} head={"Lorem ipsum dolor sit amet consectetur."} description={"Some text here"} src={4} name={"Project's name"} list={["Element1","Element2","Element3"]}/>
            <Modal id={"portfolioModal5"} head={"Lorem ipsum dolor sit amet consectetur."} description={"Some text here"} src={5} name={"Project's name"} list={["Element1","Element2","Element3"]}/>
            <Modal id={"portfolioModal6"} head={"Lorem ipsum dolor sit amet consectetur."} description={"Some text here"} src={6} name={"Project's name"} list={["Element1","Element2","Element3"]}/>


              </div>
        )}

    
  }
  
  const mapStateToProps = state => {
    return {

    };
  };
 const mapDispatchToProps = dispatch => {
    return {
     // onStartUpdte: (value) => dispatch({type: actionTypes.STARTUPDATE , value:value})
    };
};
  export default connect(mapStateToProps,mapDispatchToProps )(Home);

//Helper


  /*************Header**************** */
  class TopBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        expanded:false
      };

      this.close=this.close.bind(this)
    }


close(){
  console.log(this.state.expanded)
  this.setState({
    expanded:!this.state.expanded
  })
}
    componentDidMount(){
            
            
      
        
        
    }
 


render(){

  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">TJ Pavement</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class={this.state.expanded?"collapse":"collapse navbar-collapse"} id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger " href="#services" onClick={this.close} >Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#portfolio" onClick={this.close}>Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about" onClick={this.close}>About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#team" onClick={this.close}>Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contact" onClick={this.close}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )

}
  }
  

/*************Header**************** */
   function Header(){
     return (
      <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in">Welcome To TJ Pavement!</div>
          <div class="intro-heading text-uppercase">It's Nice To Meet You</div>
          <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
        </div>
      </div>
    </header>
     )


   }


/*************Team**************** */
function Team(){
return (
  <section class="bg-light" id="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src={team1} alt=""/>
              <h4>Kay Garland</h4>
              <p class="text-muted">Lead Designer</p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src={team2} alt=""/>
              <h4>Larry Parker</h4>
              <p class="text-muted">Lead Marketer</p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src={team3} alt=""/>
              <h4>Diana Pertersen</h4>
              <p class="text-muted">Lead Developer</p>
              <ul class="list-inline social-buttons">
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
          </div>
        </div>
      </div>
    </section>
)
}
    
    
/*************Sponsors**************** */
function Sponsors(){
  return (
    <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src={logo1} alt=""/>
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src={logo2} alt=""/>
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src={logo3} alt=""/>
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src={logo4} alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>
  )

}
/***********Contact********* */
   function Contact(){
     return(
      <section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Contact Us</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-12 text-center">
                  <div id="success"></div>
                  <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
     )
   }
  

   /***********Footer********* */
   function Footer(){
     return (
<footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <span class="copyright">Copyright &copy; Your Website 2018</span>
          </div>
          <div class="col-md-4">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <ul class="list-inline quicklinks">
              <li class="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li class="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
     )
   }
    

 


