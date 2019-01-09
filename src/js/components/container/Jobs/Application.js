import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';


import logo from './../../../../img/logos/tjp.png';
import DriverApp from "./DriverApp"
import Sign_Print from "./../Helper/Signature"
import DriverAuth from "./DriverAuthorization"
import OfficeApp from "./OfficeApp"




class JobApply extends Component {
    constructor(props) {
        super(props);
        this.state = {
               page:1
        };
    
        this.Counter=this.Counter.bind(this)
       
      }

      Counter(e){
            e.preventDefault();
            var inc = e.target.id==="prevJob"?-1:1
            var num = this.state.page+inc-0;
            console.log("Numbers",num)
            this.setState({
                page:num
            })
      }

      componentDidMount(){
        webshims.setOptions('forms-ext', {types: 'date'});
        webshims.polyfill('forms forms-ext');

   
            
      }

    render() { 

   var date=Date(Date.now()).split(" ");

      return (
        <div id="JobApply">
            <div className="container">
               
                
                <Pagination page={this.state.page} Counter={ this.Counter}/>

                      
                 <div class="card border-dark mb-3" style={{position :"relative", top :"40px"}} >
                    <div class="card-header bg-transparent border-dark">
                           <div className="row ">
                                    
                                    <img src={logo} style={{width:"100px",height:"40px", marginRight:"40px"}}/> 
                                    
                                    <small style={{marginTop:"12px", position :"absolute" ,right:"10px" }}>{date[0]+" "+date[1]+" "+date[2]+" "+date[3]}</small>
                           </div>
                           </div>
                    <div class="card-body text-dark">
                        <h5 class="card-title">Aplicacion de empleo</h5>
                        <hr/>
                        {this.state.page===1?<Page1 state={this.props.stateList}/>:
                         this.state.page===2?<Page2 />:
                         this.state.page===3?<Page3 applyKind={"Office"} />:
                         this.state.page===4?<Page4 />:
                         this.state.page===5?<Page5 />:<div/>}
                    </div>
                    <div class="card-footer bg-transparent border-danger"><small>It is policy of TJ Pavement to comply with all State and federal laws that prophibit employmnet discrimination based on race, age, color, sex, religion, national origin,desabiliry and any othr protected classes (last rev 9/8/16). </small></div>
                </div>  

                  
                   
                    <Pagination page={this.state.page} Counter={ this.Counter}/>

                                       
                
            </div>
        </div>       
            
      )

    
  }
}


function Pagination(props){
    return (
        <nav className="mt-5 mb-3" aria-label="Page navigation example">
                                            <ul class="pagination justify-content-end">
                                                <li  class={ props.page === 1 ? "page-item disabled " : " page-item text-primary"} >
                                                <a id ="prevJob"class="page-link  font-weight-bold"   onClick={props.Counter}>Prev</a>
                                                </li>
                                                <li id='1' class="page-item" ><a  class={ props.page  === 1 ? "text-white font-weight-bold page-link bg-primary shadow" :props.page  <1? "page-link text-secondary":"page-link text-primary"} data-toggle="tooltip" title="Personal Information" href="#">1</a></li>
                                                <li id='2' class="page-item" ><a class= { props.page  === 2 ? "text-white font-weight-bold page-link bg-primary shadow" :props.page  <2? "page-link text-secondary":"page-link text-primary"}  data-toggle="tooltip" title="Personal Information 2" href="#">2</a></li>
                                                <li id='3' class="page-item"><a  class= { props.page  === 3 ? "text-white font-weight-bold page-link bg-primary shadow " :props.page  <3? "page-link text-secondary":"page-link text-primary"}   data-toggle="tooltip" title="Personal Information 3" href="#">3</a></li>
                                                <li id='4' class="page-item"><a  class= { props.page  === 4 ? "text-white font-weight-bold page-link bg-primary shadow " :props.page  <4? "page-link text-secondary":"page-link text-primary"}   data-toggle="tooltip" title="Personal Information 4" href="#">4</a></li>
                                                <li id='5' class="page-item"><a  class= { props.page  === 5 ? "text-white font-weight-bold page-link bg-primary shadow" :props.page  <5? "page-link text-secondary":"page-link text-primary"}   data-toggle="tooltip" title="Personal Information 5" href="#">5</a></li>
                                                <li class={ props.page  === 5 ? "page-item disabled " : " page-item"}>
                                                <a id ="nextJob" class="page-link font-weight-bold" href="#" onClick={props.Counter} >Next</a>
                                                </li>
                                            </ul>
                </nav>
    )
}

function Address(props){
    return (

        <div class="form-row">
            <div class="col-md-5 mb-3">
                   
                    <input type="text" id ={"street_"+props.id}  name="street" class="form-control is-valid" placeholder="Street" required={props.required}/>
                    <div class="invalid-feedback"> address is required </div>
            </div>
            <div class="col-md-2 mb-3">
                
                    <input type="text" id ={"city_"+props.id}  name="city" class="form-control is-valid" placeholder="City" required={props.required}/>
                    <div class="invalid-feedback"> city is required </div>
            </div>
            <div class="col-md-3 mb-3">
                    
                    <select name="state" class="custom-select form-control is-valid" id={"state_"+props.id} required={props.required}>
                                        <option value="">Select State</option>
                                        <StateOpt state={props.state} />
                     </select> 
                     <div class="invalid-feedback"> state is required </div>
            </div>
            <div class="col-md-2 mb-3">
                            <input  type="number" name="zipcode" id={"zipcode_"+props.id} placeholder="Zip Code" class="form-control is-valid"  required={props.required}/>
                            <div class="invalid-feedback"> zip code is required </div>
            </div>
        </div>
    )
}

function StateOpt(props){
    var stateOptions=props.state.map(elem=>{
        return (<option value ={elem} >{elem}</option>)
    })

    return stateOptions
}

//Pages


/*
function Page1(props){

    return (
            <form class="needs-validation was-validated" novalidate>

                        <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label for="validationCustom01">First name</label>
                            <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required/>
                            <div class="valid-feedback">
                            Looks good!
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationCustom02">Last name</label>
                            <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required/>
                            <div class="valid-feedback">
                            Looks good!
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationCustomUsername">Username</label>
                            <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                            </div>
                            <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required/>
                            <div class="invalid-feedback">
                                Please choose a username.
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="validationCustom03">City</label>
                            <input type="text" class="form-control" id="validationCustom03" placeholder="City" required/>
                            <div class="invalid-feedback">
                            Please provide a valid city.
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="validationCustom04">State</label>
                            <input type="text" class="form-control" id="validationCustom04" placeholder="State" required/>
                            <div class="invalid-feedback">
                            Please provide a valid state.
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="validationCustom05">Zip</label>
                            <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required/>
                            <div class="invalid-feedback">
                            Please provide a valid zip.
                            </div>
                        </div>
                        </div>
                        <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label class="form-check-label" for="invalidCheck">
                            Agree to terms and conditions
                            </label>
                            <div class="invalid-feedback">
                            You must agree before submitting.
                            </div>
                        </div>
                        </div>
                        <button class="btn btn-primary" type="submit">Submit form</button>
            </form>
                    
                   
    )
}

*/

function Page1(props){

    return (
        <div class="container">
                <form class="needs-validation was-validated" novalidate>

                                        <h6 class="text-center text-dark" >Personal Details</h6>
                                        <p class="text-center text-secondary ">Tell us something more about you</p>
                                    <hr/>
                                     
                                    <div class="form-row">
                                        <div class="col-md-6 mb-3">
                                                <label for="validationServer01">First name</label>
                                                <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name"  required/>
                                                <div class="valid-feedback">     Looks good!        </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                                <label for="validationServer02">Last name</label>
                                                <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name"  required/>
                                                <div class="valid-feedback">Looks good!</div>
                                        </div>
                                        
                                    </div>

                                        <label  for={"Current address"}>Current address</label>
                                            <Address id={"Current address"} state={props.state} required={true}/>

                                        <label for="address">Last three years residency</label>
                                
                                            
                                            <Address id={"address_1"} state={props.state} required={true}/>
                                            <Address id={"address_2"} state={props.state} required={false}/>
                                            <Address id={"address_3"} state={props.state} required={false}/>
                                            
                                                    
                                            <div class="form-row">

                                                    <div class="col-md-6 mb-3">
                                                            <label for="validationServer01">SSN</label>
                                                            <input type="number" name="ssn" id="ssn" class="form-control is-valid" placeholder="Last 4 digist in your SSN"/>
                                                           
                                                    </div>
                                                    <div class="col-md-6 mb-3">
                                                            <label for="validationServer02">Last name</label>
                                                            <input type="date" class="form-control is-valid"  min="1940-01-01"  max="2005-01-01" id="DOB" required/> 
                                                            <div class="invalid-feedback">Date of Birth is required</div>
                                                    </div>
                                        
                                            </div>

                                        

                                    
                                        <div id="contact" class="form-row mb-3">
                                            <div class="col-6 ">
                                                <label for="telephone" >Phone</label>
                                                <input type="tel" name="telephone" class="form-control" pattern="([[0-9]{3}[''-' '][0-9]{3}[''-' '][0-9]{4}] | [[0-9]{10}])" placeholder="xxx-xxx-xxxx" required/>
                                                <div class="invalid-feedback">Field required</div>
                                            </div>
                                                    <div class="col-6">
                                                    <label className="text-info" for="status">Legal Status </label>
                                                    
                                                    
                                                        <select id = "status" class="custom-select " required>
                                                            <option value="">SELECT </option>
                                                            <option value="1">RESIDENT</option>
                                                            <option value="1">CITIZENT</option>
                                                            <option value="1">OTHER</option>
                                                            
                                                        </select>
                                                        
                                                    
                                            </div>
                                        </div>



                                        <div class=" form-row mb-3">

                                                <div class="col-md-3">
                                                        <label className="text-info mt-3" for="status">License</label>
                                                        <input type="text" class="form-control" placeholder="License"/>  
                                                </div>
                                                <div class="col-md-3">
                                                        <label className="text-info mt-3" for="typeLicense">Type</label>
                                                        <select class="custom-select mr-sm-2" id="typeLicense" >
                                                            <option value="Select" selected>Select</option>
                                                            <option value="1">B</option>
                                                            <option value="2">C</option>
                                                            <option value="3">D</option>
                                                            <option value="4">E</option>
                                                            
                                                        </select> 
                                                </div>
                                                <div class="col-md-3">
                                                        <label className="text-info mt-3" for="typeLicense">State</label>
                                                        <select class="custom-select mr-sm-2" id="typeLicense" >
                                                                <option value="">Select</option>
                                                                <StateOpt state={props.state} />
                                                        </select> 
                                                </div>
                                                <div class="col-md-3">
                                                        <label className="text-info mt-3" for="example-month-input">Exp. Date</label>
                                                        <input class="form-control" type="month" value="2021-08" id="example-month-input"/>
                                                </div>

                                        </div>
            </form>        
        </div>
    )
}

function Page2(props){
    return (
        <div class="container">
            <form>
                <h6 class="text-center text-dark" >General Information</h6>
                <center><small class="text-secondary ">Tell us something more about you</small></center>
          
                <div class="row">
                                        <label className="text-info mt-3" for="status">What position would you like?</label>
                                        <select class="custom-select ">
                                            <option selected>SELECT </option>
                                            <option value="1">Driver</option>
                                            <option value="1">Office</option>
                                        </select>
                 </div>
                   

                    <div class="row">

                                <div class="col-md-3">
                                        <label className="text-info mt-3" for="status">Currently employed?</label>
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="employeeRadio1" name="employeeRadio" class="custom-control-input"/>
                                            <label class="custom-control-label" for="employeeRadio1">Yes</label>
                                            </div>
                                            <div class="custom-control custom-radio">
                                            <input type="radio" id="employeeRadio2" name="employeeRadio" class="custom-control-input"/>
                                            <label class="custom-control-label" for="employeeRadio2">No</label>
                                        </div>  
                                </div>
                                <div class="col-md-3">
                                        <label className="text-info mt-3" for="status">Would you be able to work?</label>
                                        <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                                            <label class="custom-control-label" for="customRadio1">Full Time</label>
                                            </div>
                                            <div class="custom-control custom-radio">
                                            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
                                            <label class="custom-control-label" for="customRadio2">Part Time</label>
                                        </div>  
                                </div>
                                <div class="col-md-6">
                                        <label className="text-info mt-3" for="status">What salary by hours would you like?</label>
                                        <input type="number" class="form-control" placeholder="Salary by hours"/>
                                </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                                <label className="text-info mt-3" for="skills">Skills and Qualifications</label>
                                <textarea class="form-control" id="skills" rows="3"></textarea>
                        </div>
                        <div class="col-md-6">
                                <label className="text-info mt-3" for="skillsCertifications">Certifications and Licenses</label>
                                <textarea class="form-control" id="skillsCertifications" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-md-4">
                                <label className="text-info mt-3" for="medicalQuestion">Any medical condicion?</label>
                                <div class="custom-control custom-radio" id="medicalQuestion">
                                    <input type="radio" id="medicalRadio1" name="medicalRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="medicalRadio1">Yes</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                    <input type="radio" id="medicalRadio2" name="medicalRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="medicalRadio2">No</label>
                                </div>  
                        </div>
                        <div class="col-md-8">
                                <label className="text-info mt-3" for="medicalStatus">Please explain your medical condicion here?</label>
                                <textarea class="form-control" id="medicalStatus" rows="3"></textarea>
                        </div>
                        
                    </div>

                    <div class="row">

                        <div class="col-md-4">
                                <label className="text-info mt-3" for="CrimeQuestion">Have you ever been envolved in a crime?</label>
                                <div class="custom-control custom-radio" id="CrimeQuestion">
                                    <input type="radio" id="crimeRadio1" name="crimeRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="crimeRadio1">Yes</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                    <input type="radio" id="crimeRadio2" name="crimeRadio" class="custom-control-input"/>
                                    <label class="custom-control-label" for="crimeRadio2">No</label>
                                </div>  
                        </div>
                        <div class="col-md-8">
                                <label className="text-info mt-3" for="CrimeStatus">If Yes, could you please, write when where and what kind</label>
                                <textarea class="form-control" id="CrimeStatus" rows="3"></textarea>
                        </div>
                        
                    </div>
            </form>  
        </div>
    )
}


function Page3(props){
       return  props.applyKind==="Driver"?<DriverApp/>:<OfficeApp/>
}

function Page4(props){
    return <DriverAuth name={""}/>
}
function Page5(props){

    return (
<div class="container">
<form  autocomplete="on">
<h6 class="text-center text-dark" >References and emergy contact</h6>




                <label className="text-info mt-3" for="references">References (Do not include family)</label>
                <div class="container" id="references">
                    <div class="row mb-1">
                                                    <div class="col-md-6">
                                                            <label className="text-info mt-3" for="refN1">Name</label>
                                                            <input type="text" class="form-control" id ="refN1"  placeholder="Name"/>
                                                    </div>   
                                                    <div class="col-md-6">
                                                            <label className="text-info mt-3" for="refT1">Telephone</label>
                                                            <input type="tel" class="form-control" id ="refT1"  placeholder="Telephone"/>
                                                    </div>         
                            </div>
                            <div class="row mb-1">
                                        <div class="col-md-6">
                                                
                                                <input type="text" class="form-control" id ="refN2"  placeholder="Name"/>
                                        </div>   
                                        <div class="col-md-6">
                                            
                                                <input type="tel" class="form-control" id ="refT2"  placeholder="Telephone"/>
                                        </div>         
                            </div>
                            <div class="row mb-1">
                                        <div class="col-md-6">
                                            
                                                <input type="text" class="form-control" id ="refN3"  placeholder="Name"/>
                                        </div>   
                                        <div class="col-md-6">
                                            
                                                <input type="tel" class="form-control" id ="refT3"  placeholder="Telephone"/>
                                        </div>         
                            </div>           
                </div>

   
                    <label className="text-info mt-3" for="references">Emergy contact information</label>
                    <div class="container" id="references">
                        <div class="row mb-1">
                                                        <div class="col-md-6">
                                                                <label className="text-info mt-3" for="refN1">Name</label>
                                                                <input type="text" class="form-control" id ="refN1"  placeholder="Name"/>
                                                        </div>   
                                                        <div class="col-md-6">
                                                                <label className="text-info mt-3" for="refT1">Telephone</label>
                                                                <input type="tel" class="form-control" id ="refT1"  placeholder="Telephone"/>
                                                        </div>         
                                </div>
                                <div class="row mb-1">
                                            <div class="col-md-6">
                                                    
                                                    <input type="text" class="form-control" id ="refN2"  placeholder="Name"/>
                                            </div>   
                                            <div class="col-md-6">
                                                
                                                    <input type="tel" class="form-control" id ="refT2"  placeholder="Telephone"/>
                                            </div>         
                                </div>
                                 
                    </div>

                
                <div class="card  mt-3 mb-3">
                        <div class="card-header text-center font-weight-bold bg-primary text-white">
                        To be read and signed by applicant 
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                            <p>
                                I authorize you to make sure investigations and inquiries to my personal, employment financial or medical history and other related matters as may be nescessary in arriving at an employment desicion.(Generally, inquiries regardings medical history wil be made only if and after a condicional offer or employmenthas been extended.)
                                Ihereby release employers,schools health care providers and the others from all liability in responding toinquires an releasing information in connection with the application...
                            </p>
                           
                            </blockquote>
                        </div>
                </div>

                <div class="custom-control custom-radio">
                    <input type="radio" id="finally1" name="finally" class="custom-control-input"/>
                    <label class="custom-control-label" for="finally1">This certifies that I completed this aplication and that all 
                                                                        entries on it and information on it are true and complete to the best
                                                                        of my knowledge</label>
                </div>
            <Sign_Print name={""}/>

             </form  >
             <button id="SendApply" className={false?"btn btn-success shadow btn-block mt-5":"btn btn-light text-danger shadow btn-block mt-5"} style={{borderRadius:"50px"}}>{false?"Send":"Complete the application"}</button>
            
</div>
    )
    
}






































  const mapStateToProps = state => {
    return {
            doorChild:state.globalState.doorChild,
            stateList:state.usefulList.StateList
    };
  };
 const mapDispatchToProps = dispatch => {
    return {
        onChildSelect: (value) => dispatch({type: actionTypes.DOORCHILD , value:value})
    };
};

export default connect(mapStateToProps,mapDispatchToProps )(JobApply);



