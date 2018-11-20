import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';
import EmployeeInfo from './Report/EmployeeInfo';

import axios from 'axios';

const  { checkTheList,signatureCheck}   = require('./Validation');



class reportForm extends Component {
    constructor(props) {
        super(props);

        this.state={
          selectEmployee:"",
          Employees:[],
          projSelect:"",
          doneList:[],
          deleteId:''
        }
        
 
        this.SelectEmployee=this.SelectEmployee.bind(this);
        this.cancel=this.cancel.bind(this)
        this.Pass=this.Pass.bind(this);
        this.delete=this.delete.bind(this)
        this.add=this.add.bind(this);
        this.unSelectEmployee=this.unSelectEmployee.bind(this);
        this.UpdateForm=this.UpdateForm.bind(this);
        this.Check_in_doneList=this.Check_in_doneList.bind(this)
        this.Send=this.Send.bind(this)
     }
     Send(){
       //Update Local database
      axios.get('/oldReports')
      .then((response)=> {
          console.log(response.data);
          //right now i will store the table in the redux state but in the real aplication i need to create a file outside app 
          
      })
      axios.get('/idProjectReference')
      .then((response)=> {
          console.log(response.data);
          //right now i will store the table in the redux state but in the real aplication i need to create a file outside app 
          
      })
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
         
         this.props.onSelectReport(false,this.props.supervisorSelect,this.props.date)
     }
     

     delete(e){

             var index= e.target.name !==undefined? e.target.name +'': e.target.parentNode.id;

                      this.setState({deleteId:index})
                    
          
        
     }

     add(){
      
      var name=document.getElementById("addWorker").value;
      var nameList= this.state.Employees.map(elem=>elem.name);
     
      if(!checkTheList(name,nameList)){
        var list = this.state.Employees.concat({name:name, Hours:[],Signature:[]})
     
        this.props.onDeleteWorker(list)
        this.setState({Employees:list})
      }
      
      
}

UpdateForm(list,name){
  var done =this.state.doneList.concat(name)
  this.setState({
     Employees:list,
     selectEmployee:"",
     doneList:done
  })
}

Check_in_doneList(name){
  for(var i=0;i< this.state.doneList.length;i++){
    if(name===this.state.doneList[i])
    {return true }

  }
  return false
}

Pass(){
  var index= this.state.deleteId;
  var list = this.state.Employees   
 
       if(index!==""){
              var list =  list.filter((elem,i)=> i+''!==index)
      
              this.props.onDeleteWorker(list);
             
       }
       this.setState({Employees:list,deleteId:""})
    
}
  componentWillMount() {

    this.setState({ Employees:this.props.Employees,
                    projSelect:this.props.ProjectSelect})

  }



  //Update the list
 componentWillReceiveProps(nextProps) {

    if(nextProps.ProjectSelect!==this.state.projSelect){
         

        
            this.setState({ Employees:nextProps.Employees,
                      projSelect:nextProps.ProjectSelect})
                }
    else if(nextProps.Employees.length!==this.state.Employees.length ) {
            this.setState({  Employees:nextProps.Employees,projSelect:nextProps.ProjectSelect  })
    }           
    
               

    }

    render() {

    
     //Employee
      var arrayEmployee= this.state.Employees.map((elem,index)=>{
      var  check=this.Check_in_doneList(elem.name)? "col-7 mr-3 Elem shadow border border-success":"col-7 mr-3 Elem shadow border border-danger"
        return (
            <li className="ListElem row "  >
                <div className={check} style={{overflow:"hidden",maxHeight:"38px" }} id={index+''} onClick={this.SelectEmployee} ><h6  name={index+''} className=" text-dark" style={{width:"300px"}} >{elem.name}</h6></div>
               <div className="col-3 "> <button className=" btn btn-dark " name={index+''} style={{width:"40px"}}  onClick={this.delete} data-toggle="modal" data-target="#exampleModalCenter" ><i name={index+''} id={index+''} onClick={this.delete} class="fas fa-trash-alt" /></button></div>
              </li>
          )
      })


      //Project
      var listProject=this.props.Project.map(elem=>elem.name);
        
      var arrayProject= listProject.map((elem,index)=>{ return ( <option className="text-dark" value={index}>{elem}</option> )})


        //WholeList
          
        var arrayWholeList= this.props.WholeList.map(elem=>{ return ( <option className="text-dark" value={elem}>{elem}</option> )})
       

      return this.state.selectEmployee !== "" ? <EmployeeInfo info={this.state} cancel={this.unSelectEmployee} update={this.UpdateForm} projectSet={this.props.Project}/> :(
                                                      <div id ="newReport">
                                                        <div className="text-center">
                                                            <h3 className="col-auto text-dark ml-3 mb-1 mt-2"><u>Attendees Report</u></h3>
                                                            <h6 className="col-auto text-dark ml-3 mb-1 ">{this.props.supervisorSelect+''}</h6>
                                                            <h6 className="col-auto text-dark ml-3 mb-5 ">{this.props.date+''}</h6>
                                                          </div>
                                                            <a onClick={this.cancel}><i class="fas fa-arrow-left text-danger" style={{fontSize:"20px",position:"absolute", top:"40px",left:"40px"}}></i></a>
                                                            <hr/>
                                                           <div className="container">   
                                                              <div id="display" class="form-group row ">
                                                                <label class="col-3 mr-sm-2" for="inlineFormCustomSelectP">Project</label>
                                                                <select class="col-6 custom-select mb-3" id="inlineFormCustomSelectP" onClick={()=>{this.props.onProjectSelect(document.getElementById("inlineFormCustomSelectP").value)}}>
                                                                  {arrayProject}
                                                                </select>
                                                              </div>
                                                            
                                                              <div class="col-auto  ">
                                                                <label class="mr-sm-3" for="inlineFormCustomSelect">Employees</label>
                                                                <ul> 
                                                                    <li className="ListElem row " >
                                                                      
                                                                            <select class=" col-7 Elem shadow border border-primary custom-select mr-3 mb-3" id="addWorker" >
                                                                                            {arrayWholeList}
                                                                            </select>
                                                                      
                                                                      <div className="col-3 "> <button className=" btn btn-primary " style={{width:"40px"}}  onClick={this.add} ><i onClick={this.add} class="fas fa-plus"></i></button></div>
                                                                    </li>
                                                                    <hr className="col-10" />
                                                                      {arrayEmployee}
                                                                </ul>
                                                               
                                                              </div>

                                                               <button type="button" class="btn float-right shadow border border-dark btn-success btn-circle btn-xl mt-5 mr-2" onClick={this.Send}><i class="fa fa-paper-plane"></i></button>
                                                             </div>  
                                                             <Alert Pass={this.Pass}/>
                                                      </div>
      );
    }
  }
  
  function Alert(props){
      return (
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="w-100" id="exampleModalLongTitle">Make sure</h5>
                        <button  type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        Do you really want to delete this employee ?
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Back</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={props.Pass}>Delete</button>
                      </div>
                    </div>
                  </div>
            </div>
      )
  }
  const mapStateToProps = state => {
    return {
        Employees:state.globalState.Employees,
        Project:state.globalState.Project,
        Supervisor:state.globalState.Supervisor,
        WholeList:state.globalState.WholeList,
        ProjectSelect:state.globalState.ProjectSelect,
        date:state.globalState.dateSelect,
        supervisorSelect:state.globalState.supervisorSelect,

    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      onSelectReport: (value, newValue,name,date) => dispatch({type: actionTypes.OPENREPORT , newValue:newValue, value:value,name:name,date:date}),
        onDeleteWorker: (list) => dispatch({type: actionTypes.DELETEWORKER , list:list}),
        onProjectSelect:(value) => dispatch({type: actionTypes.PROJECTSELECT , value:value})
    };
};
  export default connect(mapStateToProps,mapDispatchToProps)(reportForm);