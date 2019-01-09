import React,{Component} from "react";

import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';
import TopBar from "../TopBar/TopBar";


import logo2 from './../../../../img/logos/tjp.png';
import pdfTest from './../../../../pdf/test.pdf';


class Doc_Down extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        
      };
  


     
    }




render(){



  return (

    <div id="documents">

          <TopBar/>

        <div className="container">
            <div className="flex-container">


            <div id="menu">

            <ul id="accordion1" class="nav nav-pills flex-column ">
                  <li class="nav-item">
                    <a class="nav-link text-left w-100 " style ={{fontSize:"16px"}} data-toggle="collapse" href="#item-100" data-parent="#accordion1"><u>Materials Data <i class="fas fa-caret-down text-primary ml-3"></i></u></a>
                    <div id="item-100" class="collapse  text-dark">
                      <ul class="nav flex-column ml-3 ">
                      <ul id="accordion18" class="nav nav-pills flex-column ">
                                          <li class="nav-item">
                                            <a class="nav-link text-left w-100  text-dark font-weight-bold " style ={{fontSize:"14px"}} data-toggle="collapse" href="#item-20" data-parent="#accordion18"><u>Ready Mix Concrete<i class="fas fa-caret-down text-dark ml-3"></i></u></a>
                                            <div id="item-20" class="collapse  text-dark">
                                              <ul class="nav flex-column ml-3 ">

                                                    <li class="nav-item text-left w-100 text-primary font-italic ml-5 text-primary" style ={{fontSize:"10px"}} >
                                                      <a class="nav-link" href="#">MSDS</a>
                                                  </li>
                                                  <li class="nav-item text-left w-100 text-primary font-italic ml-5 text-primary" style ={{fontSize:"10px"}}>
                                                      <a class="nav-link" href="#">Technical Data Sheet</a>
                                                  </li>
                                                  
                                              </ul>
                                            </div>
                                          </li>
                                          
                                        </ul>

                                        <div class="dropdown-divider"></div>
                      
                       <AcordionL1 id={"accordion-3"} array={[{
                              name:"Cementitious",
                              array:[{name:"Cement", array:["MSDS","Technical Data Sheet","Mill Certificate"]},
                                     {name:"Slag", array:["MSDS","Technical Data Sheet","Mill Certificate"]}]
                        }]}/>
                                    <div class="dropdown-divider"></div>
                        <AcordionL1 id={"accordion-4"} array={[{
                              name:"Aggregates",
                              array:[{name:"Coarse", array:["MSDS","Technical Data Sheet","Quality Report"]},
                                     {name:"Fine", array:["MSDS","Technical Data Sheet","Quality Report"]}]
                        }]}/>

                      <div class="dropdown-divider"></div>
                         <AcordionL1 id={"accordion-5"} array={[{
                              name:"Admixtures",
                              array:[{name:"Eucon-LR", array:["APL","MSDS","Technical Data Sheet"]},
                                     {name:"Eucon-AEA", array:['APL',"MSDS","Technical Data Sheet"]},
                                     {name:"Plastol-6200", array:['APL',"MSDS","Technical Data Sheet"]},
                                     {name:"Eucon-BCN", array:['APL',"MSDS","Technical Data Sheet"]},
                                     {name:"Fiber-Mesh", array:['APL',"MSDS","Technical Data Sheet"]}]
                        }]}/>
                        <div class="dropdown-divider"></div>
                        <AcordionL1 id={"accordion-6"} array={[{
                              name:"Colors",
                              array:[{name:"Miami-Beach-Red", array:["MSDS","Technical Data Sheet"]},
                                     {name:"Coral-Gable-Beige", array:["MSDS","Technical Data Sheet"]},
                                     {name:"Antique-Cork", array:["MSDS","Technical Data Sheet"]},
                                     {name:"Black-Eq", array:["MSDS","Technical Data Sheet"]},
                                     {name:"Morocco", array:["MSDS","Technical Data Sheet"]},
                                     {name:"Sandstone", array:["MSDS","Technical Data Sheet"]}]
                        }]}/>

                      <div class="dropdown-divider"></div>
                        <AcordionL1 id={"accordion-7"} array={[{
                              name:"Specials",
                              array:[{name:"EUCON-BCN", array:["MSDS","Technical Data Sheet"]},
                                     {name:"Vandex", array:["MSDS","Technical Data Sheet"]}]
                        }]}/>
                      </ul>
                    </div>
                  </li>
                  <div class="dropdown-divider"></div>
                  <li class="nav-item">
                    <a class="nav-link text-left w-100  text-primary " style ={{fontSize:"16px"}} data-toggle="collapse" href="#item-2" data-parent="#accordion1">FDOT and Letters <i class="fas fa-caret-down ml-3"></i></a>
                    <div id="item-2" class="collapse  text-dark">
                      <ul class="nav flex-column ml-3 ">

                            <li class="nav-item text-left w-100 text-primary font-italic ml-5 text-primary" style ={{fontSize:"12px"}} >
                              <a class="nav-link" href="#">Plant Approval Letter</a>
                          </li>
                          <li class="nav-item text-left w-100 text-primary font-italic ml-5 text-primary" style ={{fontSize:"12px"}}>
                              <a class="nav-link" href="#">FDOT Approved Mix Designs</a>
                          </li>
                          <li class="nav-item text-left w-100 text-primary font-italic ml-5 text-primary" style ={{fontSize:"12px"}}>
                              <a class="nav-link" href="#">QCP Structural </a>
                          </li>
                      </ul>
                    </div>
                  </li>
                  
                </ul>
            
            
            </div>
            <div id="page">
            
                 <embed src={pdfTest} />
            
            </div>
            
            </div>
           
        </div>

    
    </div>
  )

}
}



function AcordionL1(props){

  
 var List = props.array.map((elem_list,index)=>{
      var elemList=elem_list.array.map((ele,index)=>{
            var proper= ele.array.map(e=>{
                return(  <li class="nav-link text-left w-100 text-primary font-italic ml-5" style ={{fontSize:"10px"}}><a class="nav-link" href="#">{e}</a></li>) 
            })
            return (
              <div>
              <li class="nav-item">
                            
                            <a class="nav-link text-left w-100 text-dark  ml-5" style ={{fontSize:"12px"}} data-toggle="collapse" href={"#"+elem_list.name+ele.name+index} ><u>{ele.name}  <i class="fas fa-caret-down text-dark ml-3"></i></u></a>


                        <div id={""+elem_list.name+ele.name+index} class="collapse  ">
                              <ul class="nav flex-column ml-3 ">

                                 {proper}
                                  
                              </ul>
                        </div>
              </li>
              <div class="dropdown-divider"></div>
            </div>
            )
      })
          return (
            <li class="nav-item">
                  <a class="nav-link text-left w-100 text-dark font-weight-bold" style ={{fontSize:"14px"}} data-toggle="collapse" href={"#"+props.id+"_"+index}  data-parent={"#"+props.id}><u>{elem_list.name}<i class="fas fa-caret-down text-dark ml-3"></i></u></a>
                  <div id={props.id+"_"+index} class="collapse ">
                    <ul class="nav flex-column ml-3 ml-5 ">
                      {elemList}
                    </ul>
                  </div>
            </li>
          )
 })

  return (
    <ul id={props.id} class="nav nav-pills flex-column ">
            
              {List}
    
  </ul>
  )
    
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