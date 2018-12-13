import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';

import logo1 from './../../../../img/logos/jva.png';
import logo2 from './../../../../img/logos/tjp.png';
import logo3 from './../../../../img/logos/tjprec.png';




import Portfolio from "./../Portfolio/Portfolio"
import About from "./../About/About"
import Modal from "./../Portfolio/Modal"
import TopBar from "./../TopBar/TopBar"
import Footer from "./../Footer/footer"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      door:"door-1"
    };

   
  }


  componentWillMount(){
      this.setState({
            door:this.props.door
      })
  }
  componentWillReceiveProps(nextProps){

          if(nextProps.door!==this.state.TopBar){
                  this.setState({
                    door:nextProps.door
                })
          }
  }

    componentDidMount(){

     
      window.onscroll = (e) => {
        
        const nav = document.querySelector('#mainNav');
      
        if( this.state.door==="door-1" )  nav.className = window.scrollY < 30? "navbar navbar-expand-lg navbar-dark fixed-top":
                                                                                "navbar navbar-expand-lg navbar-dark bg-dark fixed-top h-7 ";
     



    }

  }
    render() { 
        
  
   
      return (
              <div id="page-top">
              <TopBar />

                <Header/>


                <Portfolio/>

                <About/>


                
                <Contact/>
                <Sponsors/>
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
        door:state.globalState.door
    };
  };
 const mapDispatchToProps = dispatch => {
    return {
     // onStartUpdte: (value) => dispatch({type: actionTypes.STARTUPDATE , value:value})
    };
};
  export default connect(mapStateToProps,mapDispatchToProps )(Home);


 

/*************Header**************** */
   function Header(){
     return (
      <header class="masthead">
      <div class="container">
        <div class="intro-text text-warning">
          <div class="intro-lead-in" >Welcome To TJ Pavement!</div>
          <div class="intro-heading text-uppercase">It's Nice To Meet You</div>
        </div>
      </div>
    </header>
     )


   }



    
    
/*************Sponsors**************** */
function Sponsors(){
  return (
    <section class=" py-1">
        <div class="flex-container">
      <div>
      <a href="#">
            <img class="img-fluid d-block mx-auto bg-white ml-3 mr-3" src={logo1}  alt=""/>
          </a>
      </div>
      <div>
      <a href="#">
            <img class="img-fluid d-block mx-auto bg-white ml-3 mr-3" src={logo2} alt=""/>
          </a>
      </div>
      <div>
      <a href="#">
            <img class="img-fluid d-block mx-auto bg-white ml-3 mr-3" src={logo3} alt=""/>
          </a>    
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
  


    




