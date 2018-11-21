import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';
const  {checkTheList, validHours}   = require('./Validation');
import Sign_Print from './Report/Sign_Print'

import axios from 'axios';





class reportForm extends Component {
    constructor(props) {
        super(props);

        this.state={
          selectEmployee:"",
          Employees:[],
          projSelect:"",
          doneList:[],
          deleteId:'',
          signPass:false,
          hr:0,
          openhr:false,
          catName:''
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

        this.CategoriesAdd=this.CategoriesAdd.bind(this)
        this.PartII=this.PartII.bind(this);
        this.deleteCtg=this.deleteCtg.bind(this);

        this.DataSign=this.DataSign.bind(this);
     }

     DataSign(data){
        
      var  eList = this.state.Employees
      eList[this.state.selectEmployee].Signature = data
      this.setState({ EmployeeReport:eList})
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
            e.preventDefault();
            $('#exampleModalCenter').modal('show')
            $('#exampleModalHours').modal('dispose')
             var index= e.target.name !==undefined? e.target.name +'': e.target.parentNode.id;

                      this.setState({deleteId:index})
                    
          
        
     }

     add(){
  
      var name=document.getElementById("addWorker").value;
      var nameList= this.state.Employees.map(elem=>elem.name);
      var l =this.state.Employees.length;

      if(!checkTheList(name,nameList)){
        var list = this.state.Employees.concat({name:name, Hours:[],Signature:[]})
     
        this.props.onDeleteWorker(list)
        this.setState({
                          Employees:list,
                          selectEmployee:l
                        })
      }
    }

      deleteCtg(e){
  
    
            var id=e.target.id===''? e.target.parentNode.id   === ''? e.target.parentNode.parentNode.id  :  e.target.parentNode.id  : e.target.id
            var listid=id.split(";");


            var idEmp=listid[0]-0;
            var idCatg=listid[1]-0;

            var list = this.state.Employees;
                
            list[idEmp].Hours=list[idEmp].Hours.filter((elem,i)=>i!==idCatg)
            
                this.setState({Employees:list})
              

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

  CategoriesAdd(e){
    var  idEmp=e.target.id.split("_");
    var  id = idEmp[1]-0
    var   name=document.getElementById(e.target.id).value;
    var   nameList=this.state.Employees[id].Hours.map(elem=>elem[0])
     
      if(!checkTheList(name,nameList)){
    
        this.setState({
                        selectEmployee:id,
                        catName:name,
                        openhr:true
                      })
      }
  }
 
  PartII(hr){
    var id=this.state.selectEmployee;
    var name=this.state.catName;
    console.log(name,id,"Part2")
    if(id!==""  && hr>0 ){
      var array=[name,hr];
    
      var list = this.state.Employees;
      
      list[id].Hours.push(array)
  
        this.setState({
          Employees:list,
          selectEmployee:id,
          catName:"",
          openhr:false
        })
    }
   
  }



  //Update the list
 componentWillReceiveProps(nextProps) {
    console.log("nextProps")
    if(nextProps.ProjectSelect!==this.state.projSelect){
         

        
            this.setState({ Employees:nextProps.Employees,
                      projSelect:nextProps.ProjectSelect})
                }
    else if(nextProps.Employees.length!==this.state.Employees.length ) {
            this.setState({  Employees:nextProps.Employees,projSelect:nextProps.ProjectSelect  })
    }           
    
               

    }

    render() {
      
      var  arrayCategories=this.props.Project[this.state.projSelect].Categories.map((elem)=>{
                       
        return ( <option className="text-dark" value={elem}>{elem}</option> );
   })


   if(this.state.openhr===true){$('#exampleModalHours').modal('show')} 


    console.log('mark1')
    console.log(this.state.Employees)
     //Employee
      var arrayEmployee= this.state.Employees.map((elem,index)=>{


      var  check="col-11 Elem shadow border border-success";
      console.log('mark2')


      var  JobList=elem.Hours.map((listed,j)=>{
              return (
                <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="mr-3" id={index+";"+j} onClick={this.deleteCtg}><i class="fas fa-trash-alt" style={{color:"red"}}/></span>
                                  {listed[0]}
                                  <span class="badge badge-primary badge-pill float-right">{listed[1]}</span>
                </li>
              )
      })


      
        return (
            <li className="ListElem row "  >
              
                <div class="input-group mb-3 col-50">
                  <div class="input-group-prepend">
                  <button className=" btn btn-white border border-danger shadow " name={index+''} style={{width:"40px",maxHeight:"38px"}}  onClick={this.delete}  ><i name={index+''} id={index+''} onClick={this.delete} style={{color:"red"}} class="fas fa-trash-alt" /></button>
                  </div>
                  <div className={check} style={{overflow:"hidden",maxHeight:"38px" }} id={index+''} onClick={this.SelectEmployee} ><h6  name={index+''} className=" text-dark" style={{width:"300px"}} >{elem.name}</h6></div>
                </div>
                <div class="input-group mb-3  " >
                        <ul class="list-group list-group-flush w-75 "style={{marginLeft:"15%"}}>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                               <select class=" w-100 ElemAdd shadow border border-primary custom-select mr-3 mb-3" onChange={this.CategoriesAdd} id={"addCTG_"+index} >
                                                                            <option className="text-dark"  >Select a job's name.</option>
                                                                                 {arrayCategories}
                                                                            </select>
                          </li>

                          {JobList}


                         {!this.state.signPass?(<li className="list-group-item d-flex justify-content-between align-items-center mt-3" ><button className="btn w-90 text-success shadow border border-success btn-block">Signature up</button></li>):(<li className="list-group-item d-flex justify-content-between align-items-center mt-3">  <Sign_Print DataSign={this.DataSign} data={this.state.Employees[this.state.selectEmployee].Signature}/></li>) }
                          
                        </ul>
              
                  
                </div>
               
              </li>
          )
      })


      //Project
      var listProject=this.props.Project.map(elem=>elem.name);
        
      var arrayProject= listProject.map((elem,index)=>{ return ( <option className="text-dark" value={index}>{elem}</option> )})


        //WholeList
          
        var arrayWholeList= this.props.WholeList.map(elem=>{ return ( <option className="text-dark" value={elem}>{elem}</option> )})
        console.log('mark3')
        console.log(this.state.Employees)

      return (
                                                      <div id ="newReport">
                                                        <div className="text-center">
                                                            <h5 className="col-auto text-dark ml-3 mb-1 mt-2"><u>Attendees Report</u></h5>
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
                                                                      
                                                                            <select class=" w-100 ElemAdd shadow border border-primary custom-select mr-3 mb-3" onChange={this.add} id="addWorker" >
                                                                            <option className="text-dark" >Select an employee.</option>
                                                                                 {arrayWholeList}
                                                                            </select>
                                                                      
                                                                         </li>
                                                                    <hr className="col-10" />
                                                                      {arrayEmployee}
                                                                </ul>
                                                               
                                                              </div>

                                                               <button type="button" class="btn float-right shadow border border-dark btn-success btn-circle btn-xl mt-5 mr-2" onClick={this.Send}><i class="fa fa-paper-plane"></i></button>
                                                             </div>  
                                                             <Alert Pass={this.Pass}/>
                                                            
                                                             <HoursSet info={this.state} setup={this.PartII}/>
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

  function HoursSet(props){
    console.log("mark4")
    var array = [1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12]
    var list=array.map(elem=>{

      return (<li class="list-group-item text-primary text-center w-100 " style={{opacity:"1 !important"}}  onClick={(e)=>{ e.preventDefault() ; props.setup(elem)  }}  data-dismiss="modal" >{elem}</li>)
    })
    
    return (
      <div class="modal fade" id="exampleModalHours" tabindex="-1" role="dialog" aria-labelledby="exampleModalHoursTitle" aria-hidden="true" style={{opacity:"0.8"}}>
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-body">
                            <ul class="list-group list-group-flush show w-90" >
                                {list}
                              </ul>
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