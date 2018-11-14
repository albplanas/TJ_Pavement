import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';
import EmployeeInfo from './Report/EmployeeInfo';
class reportForm extends Component {
    constructor(props) {
        super(props);

        this.state={
          selectEmployee:"",
          Employees:[]
        }
        
 
        this.SelectEmployee=this.SelectEmployee.bind(this);
        this.cancel=this.cancel.bind(this)
        this.delete=this.delete.bind(this)
        this.add=this.add.bind(this);
        this.unSelectEmployee=this.unSelectEmployee.bind(this);
     }
     unSelectEmployee(){
          this.setState({
            selectEmployee:""
          })
     }

     SelectEmployee(e){   
      var select = e.target.parentNode.id - 0 !== undefined? e.target.parentNode.id-0:""   
      this.setState({
        selectEmployee:select
      })
      
      }    

     cancel(e){
      
         this.props.onSelectReport(false,"newReport")
     }


     delete(e){
             var index= e.target.name !==undefined? e.target.name +'': e.target.parentNode.id;
       
            var list = this.state.Employees.filter((elem,i)=> i+''!==index)
           
            this.props.onDeleteWorker(list);
            this.setState({Employees:list})
     }

     add(){
      var list = this.state.Employees.concat({name:document.getElementById("addWorker").value, Categories:["A","B"]})
     
      this.props.onDeleteWorker(list)
      this.setState({Employees:list})
      
}

  componentWillMount() {
    this.setState({ Employees:this.props.Employees})

  }



  //Update the list
 componentWillReceiveProps(nextProps) {

   
    nextProps.Employees.length!==this.state.Employees ? this.setState({  Employees:nextProps.Employees  }) : null
               

    }

    render() {

     var listEmployee=this.state.Employees.map(elem=>elem.name);
     //Employee
      var arrayEmployee= listEmployee.map((elem,index)=>{
        return (
            <li className="ListElem row " >
                <div className="col-7 Elem shadow border border-danger " id={index+''} onClick={this.SelectEmployee} ><h6  name={index+''} className=" text-dark" >{elem}</h6></div>
               <div className="col-3 "> <button className=" btn btn-dark " name={index+''}  onClick={this.delete} ><i name={index+''} id={index+''} onClick={this.delete} class="fas fa-trash-alt"/></button></div>
              </li>
          )
      })


      //Project
      var listProject=this.props.Project.map(elem=>elem);
          
      var arrayProject= listProject.map(elem=>{ return ( <option className="text-dark" value={elem}>{elem}</option> )})


        //WholeList
          
        var arrayWholeList= this.props.WholeList.map(elem=>{ return ( <option className="text-dark" value={elem}>{elem}</option> )})


      return this.state.selectEmployee !== "" ? <EmployeeInfo info={this.state} cancel={this.unSelectEmployee}/> :(
                                                      <div id ="newReport">
                                                        
                                                            <h3 className="col-auto text-dark ml-3 mb-5 mt-2"><u>Attendees Report</u></h3>
                                                          
                                                            <a style={{fontSize:"20px",position:"absolute",right:"4vw",top:"0px",color:"red"}} onClick={this.cancel}><i class=" fas fa-times-circle"   /></a> 

                                                              <div class="form-group row ml-5">
                                                                <label class="col-3 mr-sm-2" for="inlineFormCustomSelect">Project</label>
                                                                <select class="col-6 custom-select mb-3" id="inlineFormCustomSelect">
                                                                  {arrayProject}
                                                                </select>
                                                              </div>
                                                            
                                                              <div class="col-auto ml-5 my-1">
                                                                <label class="mr-sm-3" for="inlineFormCustomSelect">Employees</label>
                                                                <ul> 
                                                                    <li className="ListElem row " >
                                                                      
                                                                            <select class=" col-7 Elem shadow border border-primary custom-select  mb-3" id="addWorker" >
                                                                                            {arrayWholeList}
                                                                            </select>
                                                                      
                                                                      <div className="col-3 "> <button className=" btn btn-primary "  onClick={this.add} ><i onClick={this.add} class="fas fa-plus"></i></button></div>
                                                                    </li>
                                                                    <hr className="col-7" />
                                                                      {arrayEmployee}
                                                                </ul>
                                                              </div>
                                                        
                                                      </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
        Employees:state.globalState.Employees,
        Project:state.globalState.Project,
        Supervisor:state.globalState.Supervisor,
        WholeList:state.globalState.WholeList
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
        onSelectReport: (value,name) => dispatch({type: actionTypes.OPENREPORT , value:value,name:name}),
        onDeleteWorker: (list) => dispatch({type: actionTypes.DELETEWORKER , list:list})
    };
};
  export default connect(mapStateToProps,mapDispatchToProps)(reportForm);