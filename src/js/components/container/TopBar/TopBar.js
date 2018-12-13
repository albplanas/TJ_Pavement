import React,{Component} from "react";
import logo2 from './../../../../img/logos/tjp.png';
import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';


import Doc_Down from "./Download"


class TopBar extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      
    };

 
   
  }




componentDidMount(){
  $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
  
  
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
    });
  
  
    return false;
  });
}

render(){

  return (
<nav class="navbar navbar-expand-lg fixed-top  navbar-white bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
  <i class="fas fa-bars text-danger"></i>
  </button>
  <div class="collapse navbar-collapse " id="navbarTogglerDemo01">

{/********Brand************** */}  
    <a class="navbar-brand" href="#"><img src={logo2} /></a>
    <ul class="navbar-nav justify-content-center mr-auto mt-2 mt-lg-0 " style={{width:"100%"}}>

{/********Home************** */} 

      <li class="nav-item active">
        <a class="nav-link" href="#page-top">Home <span class="sr-only">(current)</span></a>
      </li>

{/********Products************** */}

       <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle "  id="Products" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Our Products
        </a>
        <ul class="dropdown-menu  " aria-labelledby="Products">
              <a className='text-secondary ml-3'><strong>Search by</strong></a>
              <div class="dropdown-divider"/>
              <li><a class="dropdown-item " href="#">SPI</a></li>
              <li><a class="dropdown-item " href="#">Applications</a></li>
              <li><a class="dropdown-item " href="#">Concrete mix</a></li>
              <div class="dropdown-divider"/>
              <li><a class="dropdown-item " href="#">All products</a></li>
        </ul>
      </li>

{/********Customer Center************** */}

   <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle " id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Customer Center
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

          <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Accounting</a>
            <ul class="dropdown-menu">
              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Application for Business Credit and Agreement</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">PDF Form</a></li>
                  <li><a class="dropdown-item" href="#">Online Form</a></li>
                </ul>
              </li>
              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Credit Card Authorization Form</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item " href="#">PDF Form</a></li>
                  <li><a class="dropdown-item" href="#">Online Form</a></li>
                </ul>
              </li>
              <li><a class="dropdown-item disabled" href="#">Sworn of Statement</a></li>
              <li><a class="dropdown-item disabled" href="#">Partial Release</a></li>
              <li><a class="dropdown-item disabled" href="#">Final Release</a></li>
              <li><a class="dropdown-item disabled" href="#">Statements</a></li>
              <li><a class="dropdown-item disabled" href="#">Reconciliations</a></li>  
              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Orders</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item disabled" href="#">Recent Orders</a></li>
                  <li><a class="dropdown-item" href="#">Place a new order</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Jobs</a>
            <ul class="dropdown-menu">
              
              <li><a class="dropdown-item disabled" href="#">Apply</a></li>
             
            </ul>
          </li>
        </ul>
      </li>

{/********Documents & Downloads************** */}

<Doc_Down/>

{/********Make an order************** */}

     <li class="nav-item dropdown">
        <button class="btn btn-danger nav-link dropdown-toggle" id="Order" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Place an order </button>
        
        <ul class="dropdown-menu  " aria-labelledby="Order">
            
             <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Order using</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Account</a></li>
                  <li><a class="dropdown-item" href="#">Assistence</a></li>
                </ul>
              </li>
              <div class="dropdown-divider"/>
              <li><a class="dropdown-item " data-toggle="tooltip" title="Send a Request and we will call you back">Send a Request</a></li>
              <li><a class="dropdown-item " href="#">Call us </a></li>
              <li><a class="dropdown-item " data-toggle="tooltip" title="Get a free quote or Estimate " href="#">Quote and Estimate</a></li>
              <div class="dropdown-divider"/>
              <li><a class="dropdown-item " href="#">TIPS</a></li>
        </ul>
      </li>

      {/********Contact us************** */} 

      <li class="nav-item active">
        <a class="nav-link" href="#contact">Contact us <span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <a class="navbar-nav text-primary mr-3 mt-2 mt-lg-0 pt-1" id='login' > <i class="fas fa-sign-in-alt text-primary  pl-2" /> {"Login"}</a>
  </div>
</nav>





  )

}
  }
  


  const mapStateToProps = state => {
    return {

    };
  };
 const mapDispatchToProps = dispatch => {
    return {
     onDoorSelect: (value) => dispatch({type: actionTypes.DOOR , value:value})
    };
};
  export default connect(mapStateToProps,mapDispatchToProps )(TopBar);






