import React,{Component} from "react";
import { connect } from 'react-redux';

class reportForm extends Component {
    constructor(props) {
        super(props);
        this.state={
          selectEmployee:false
        }
        
 
        this.SelectEmployee.bind(this);
       
     }

     SelectEmployee(e){
        this.setState({
          selectEmployee:true,
          name:e.target.name
        })
     }    


    render() {

     var listEmployee=this.props.Employees.map(elem=>elem.name);
     //Employee
      var arrayEmployee= listEmployee.map(elem=>{
        return (
            <li className="ListElem row " >
                <div className="col-9 Elem shadow border border-danger " name={elem} ><h6 className=" text-dark">{elem}</h6></div>
               <div className="col-auto float-right"> <button className=" btn btn-dark "><i class="fas fa-trash-alt"/></button></div>
              </li>
          )
      })
 //Project
 var listProject=this.props.Project.map(elem=>elem);
     
 var arrayProject= listProject.map(elem=>{ return ( <option className="text-dark" value={elem}>{elem}</option> )})

 //Supervisor
 var listSupervisor=this.props.Supervisor.map(elem=>elem);
     
 var arraySupervisor= listSupervisor.map(elem=>{ return ( <option value={elem}>{elem}</option> )})

      return (
        <div >
          <div className="row ml-5">
              <h3 className="col-7text-dark  mb-4 mt-1"><u>Attendees Report</u></h3>
              <i class="col-3 float-right  fas fa-times-circle" style={{color:"red"}}/>
          </div>
         
                <div class="form-group row ml-5">
                  <label class="col-3 mr-sm-2" for="inlineFormCustomSelect">Project</label>
                  <select class="col-7 custom-select mr-sm-2 mb-3" id="inlineFormCustomSelect">
                    <option selected>Choose...</option>
                    {arrayProject}
                  </select>
                </div>
                <div class="form-group row ml-5 mb-5">
                  <label class="col-3 mr-sm-2" for="inlineFormCustomSelect">Supervisor</label>
                  <input type="email" class="col-7 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Supervisor's name"/>
                </div>
                <div class="col-auto ml-5 my-1">
                  <label class="mr-sm-3" for="inlineFormCustomSelect">Employees</label>
                  <ul> {arrayEmployee}</ul>
                </div>
          
        </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
        Employees:state.globalState.Employees,
        Project:state.globalState.Project,
        Supervisor:state.globalState.Supervisor
    };
  };

  export default connect(mapStateToProps)(reportForm);