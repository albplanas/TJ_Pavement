import React,{Component} from "react";

import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';


import logo2 from './../../../../img/logos/tjp.png';




class TopBar extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      
    };

 
   this.SelectDoor=this.SelectDoor.bind(this);
  }


SelectDoor(e){
  e.preventDefault();
  var id= e.target.id!==""?e.target.id:e.target.parentNode.id !==""?e.target.parentNode.id:e.target.parentNode.parentNode.id
  this.props.onDoorSelect("door-"+id)
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

{/******** Home ************** */} 

      <li class="nav-item active">
        <a id="home" class="nav-link" href="#page-top" onClick={this.SelectDoor}>Home <span class="sr-only">(current)</span></a>
      </li>

{/********Products***************/}

<Product/>

{/********Customer Center************** */}

    <CustomerCenter select={this.props.onDoorSelect} child={this.props.onChildSelect} />

{/********Make an order************** */}
 <li class="nav-item active">
        <a  class="nav-link" id='doc' onClick={this.SelectDoor}>Documents</a>
  </li>

{/********Make an order************** */}
        <li class="nav-item active">
              <a  class="nav-link" id='job' onClick={this.SelectDoor}>Jobs</a>
        </li>

      {/********Contact us************** */} 
      <Order select={this.props.onDoorSelect} child={this.props.onChildSelect} />
    </ul>
    
    <a class="navbar-nav btn  text-primary pl-3 ml-3 "style ={{fontSize:"20px"}} id='login' onClick={this.SelectDoor}>{"Login"}</a>
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
     onDoorSelect: (value) => dispatch({type: actionTypes.DOOR , value:value}),
     onChildSelect: (value) => dispatch({type: actionTypes.DOORCHILD , value:value})
    };
};
  export default connect(mapStateToProps,mapDispatchToProps )(TopBar);





function CustomerCenter(props){
  var makeClick=(door,child)=>{
    props.select(door);
    props.child(child)
  }
  return (
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle " id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Customer Center
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

      <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Accounting</a>
              <ul class="dropdown-menu">
                <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Credit and Agreement</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" onClick={()=>{makeClick("door-customer","account");}}>PDF Form</a></li>
                    <li><a class="dropdown-item" href="#" onClick={()=>{makeClick("door-customer","account");}}>Online Form</a></li>
                  </ul>
                </li>
                <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Credit Authorization </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item " href="#" onClick={()=>{makeClick("door-customer","account");}}>PDF Form</a></li>
                    <li><a class="dropdown-item" href="#"  onClick={()=>{makeClick("door-customer","account");}}>Online Form</a></li>
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
                    <li><a class="dropdown-item" href="#" onClick={()=>{makeClick("door-order","order");}}>Place a new order</a></li>
                  </ul>
                </li>
              </ul>
      </li>
      <li class="dropdown-submenu"><div class="dropdown-divider"></div></li>
      <li class="dropdown-submenu"><a className="dropdown-item" onClick={()=>{ props.select("door-home")}} href="#contact">Contact us</a></li>
    </ul>
  </li>
  )
}
function Order(props){

  var makeClick=(door,child)=>{
    props.select(door);
    props.child(child)
  }
  return (
    <li class="nav-item dropdown">
    <button class="btn btn-danger nav-link dropdown-toggle" id="Order" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Place an order </button>
    
    <ul class="dropdown-menu  " aria-labelledby="Order">
        
         <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Order using</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item disabled" onClick={()=>{makeClick("door-order","order");}}>Account</a></li>
              <li><a class="dropdown-item" onClick={()=>{makeClick("door-order","order");}}>Assistence</a></li>
            </ul>
          </li>
          <div class="dropdown-divider"/>
          <li><a class="dropdown-item " onClick={()=>{makeClick("door-order","request");}} data-toggle="tooltip" title="Send a Request and we will call you back">Send a Request</a></li>
          <li><a class="dropdown-item "onClick={()=>{makeClick("door-order","call");}}>Call us </a></li>
          <li><a class="dropdown-item " onClick={()=>{makeClick("door-order","quote");}} data-toggle="tooltip" title="Get a free quote or Estimate " href="#">Quote and Estimate</a></li>
          <div class="dropdown-divider"/>
          <li><a class="dropdown-item " onClick={()=>{makeClick("door-order","tips");}}>TIPS</a></li>
    </ul>
  </li>
  )
}

function Product(){
  return (
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
  )
}