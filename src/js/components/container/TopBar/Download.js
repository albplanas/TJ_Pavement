import React,{Component} from "react";

import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';



class Doc_Down extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        
      };
  
      this.Select=this.Select.bind(this);

     
    }


    Select(){
      this.props.onDoorSelect('door-doc')
    }


render(){

  var Options_A=["MSDS","Technical Data Sheet","Mill Certificate"];
  var Options_B=["MSDS","Technical Data Sheet"];
  var Options_C=["PDF Form","Online Form"];
  var Options_D=["MSDS","Technical Data Sheet","Quality Report"];
  var Options_E=["MSDS","Technical Data Sheet","APL"];


 var Materials=[
      {
        name:"Cementitious",
        MegaArray:[{name:"Cement",array:Options_A},{name:"Slag",array:Options_A}]
      },{
        name:"Aggregates",
        MegaArray:[{name:"Coarse",array:Options_D},{name:"Fine",array:Options_D}]
      },{
        name:"Admixtures",
        MegaArray:[{name:"Eucon LR",array:Options_E},{name:"Eucon AEA",array:Options_E},{name:"Plastol 6200",array:Options_E},{name:"Eucon SE",array:Options_E},{name:"Eucon BCN",array:Options_E},{name:"Fiber Mesh",array:Options_E}]
      },{
        name:"Colors",
        MegaArray:[{name:"Miami Beach Red",array:Options_B},{name:"Coral Gable Beige",array:Options_B},{name:"Antique Cork",array:Options_B},{name:"Black Eq",array:Options_B},{name:"Morocco",array:Options_B},{name:"Sandstone",array:Options_B}]
      },{
        name:"Special Additives",
        MegaArray:[{name:"Eucon BCN",array:Options_B},{name:"Vandex",array:Options_B}]
      }

 
]

  return (

    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle " id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.Select}>
    Documents
    </a>
   {/* <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

      <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Materials Data</a>
       
       
       
        <ul class="dropdown-menu">
          <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">Ready Mix Concrete</a>
                          <Options array={Options_B}/>
          </li>
          <MegaOptions array={Materials}/>
        </ul>
      </li>


        <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">FDOT and Letters</a>
        <SuperOptions array={[{name:"Application for Business Credit and Agreement",array:Options_C},{name:"Credit Card Authorization Form",array:Options_C}]}/>
      </li>
    
    </ul>*/} 
  </li>
  )

}
}


function Options(props){

  var newArray= props.array.map(elem=>{
    
    return (<li><a class="dropdown-item" href="#">{elem}</a></li>)
  });
  return (
    <ul class="dropdown-menu">
        {newArray}
  </ul>
  )
}

function SuperOptions(props){

  var newOptions= props.array.map(elem=>{
    
    return (
      <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">{elem.name}</a>
                          <Options array={elem.array}/>
      </li>
    )
  });
  return (
    <ul class="dropdown-menu">
              {newOptions}
    </ul>
  )
}


function MegaOptions(props){

  var newMegaOptions= props.array.map(elem=>{
    
    return (
      <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="#">{elem.name}</a>
                  <SuperOptions array={elem.MegaArray}/>
        </li>
    )
  });
  return newMegaOptions
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
  export default connect(mapStateToProps,mapDispatchToProps )(Doc_Down);