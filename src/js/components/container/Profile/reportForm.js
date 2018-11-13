import React,{Component} from "react";
import { connect } from 'react-redux';

class reportForm extends Component {
    constructor(props) {
        super(props);
        
        
        
       
     }

     


    render() {

     var listEmployee=["Primo","Adrian"]
      var array= listEmployee.map(elem=>{
        return (
            <li className="ListElem row ">
                <div className="col-9 Elem shadow border bg-danger "><h6 className=" text-white">{elem}</h6></div>
               <div className="col-auto float-right"> <button className=" btn btn-dark "><i class="fas fa-trash-alt"/></button></div>
              </li>
          )
      })
      return (
        <div >
          <h3 className="text-dark text-center mb-3 mt-1"><u>Attendees Report</u></h3>
                <div class="col-auto my-1">
                  <label class="mr-sm-2" for="inlineFormCustomSelect">Project</label>
                  <select class="custom-select mr-sm-2 mb-3" id="inlineFormCustomSelect">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-auto my-1">
                  <label class="mr-sm-2" for="inlineFormCustomSelect">Supervisor</label>
                  <select class="custom-select mr-sm-2 mb-3" id="inlineFormCustomSelect">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-auto my-1">
                  <label class="mr-sm-3" for="inlineFormCustomSelect">Employees</label>
                  <ul> {array}</ul>
                </div>
          
        </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
        
    };
  };

  export default connect(mapStateToProps)(reportForm);