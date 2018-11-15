import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';
import EmployeeInfo from './Report/EmployeeInfo';
class reportForm extends Component {
    constructor(props) {
        super(props);

        this.state={
          selectEmployee:"",
          Employees:[],
          projSelect:"",
          doneList:[],
        }
        
 
        this.SelectEmployee=this.SelectEmployee.bind(this);
        this.cancel=this.cancel.bind(this)
        this.delete=this.delete.bind(this)
        this.add=this.add.bind(this);
        this.unSelectEmployee=this.unSelectEmployee.bind(this);
        this.UpdateForm=this.UpdateForm.bind(this);
        this.Check_in_doneList=this.Check_in_doneList.bind(this)
     }
     unSelectEmployee(){
       console.log("click")
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
      var ctg=this.props.Project[this.props.ProjectSelect].Categories;
      var Categories = Array.apply(null, Array(ctg.length)).map(Number.prototype.valueOf,0);
      var list = this.state.Employees.concat({name:document.getElementById("addWorker").value, Categories:Categories})
     
      this.props.onDeleteWorker(list)
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
  componentWillMount() {
    var ctg=this.props.Project[this.props.ProjectSelect].Categories;
    var Categories = Array.apply(null, Array(ctg.length)).map(Number.prototype.valueOf,0);

    var Employees=this.props.Employees.map(elem=>{
                        
                      return {
                        name:elem.name,
                        Categories:Categories
                      }
    })
    this.setState({ Employees:Employees,
                    projSelect:this.props.ProjectSelect})

  }



  //Update the list
 componentWillReceiveProps(nextProps) {

    if(nextProps.ProjectSelect!==this.state.projSelect){
          var ctg=this.props.Project[this.props.ProjectSelect].Categories;
          var Categories = Array.apply(null, Array(ctg.length)).map(Number.prototype.valueOf,0);

          var Employees=this.props.Employees.map(elem=>{
                        
            return {
              name:elem.name,
              Categories:Categories
            }
            })
            this.setState({ Employees:Employees,
                      projSelect:nextProps.ProjectSelect})
                }
    else if(nextProps.Employees.length!==this.state.Employees ) {
            this.setState({  Employees:nextProps.Employees,projSelect:nextProps.ProjectSelect  })
    }           
    
               

    }

    render() {

    
     //Employee
      var arrayEmployee= this.state.Employees.map((elem,index)=>{
      var  check=this.Check_in_doneList(elem.name)? "col-7 Elem shadow border border-success":"col-7 Elem shadow border border-danger"
        return (
            <li className="ListElem row " >
                <div className={check}  id={index+''} onClick={this.SelectEmployee} ><h6  name={index+''} className=" text-dark" >{elem.name}</h6></div>
               <div className="col-3 "> <button className=" btn btn-dark " name={index+''}  onClick={this.delete} ><i name={index+''} id={index+''} onClick={this.delete} class="fas fa-trash-alt"/></button></div>
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
                                                        
                                                            <h3 className="col-auto text-dark ml-3 mb-5 mt-2"><u>Attendees Report</u></h3>
                                                          
                                                            
                                                            <button type="button" class="btn border-danger text-danger rounded-circle Close-btn"  aria-label="Close" onClick={this.cancel}>
                                                                <span aria-hidden="true" onClick={this.cancel} >&times;</span>
                                                              </button>

                                                           <div className="container">   
                                                              <div class="form-group row ml-5">
                                                                <label class="col-3 mr-sm-2" for="inlineFormCustomSelectP">Project</label>
                                                                <select class="col-6 custom-select mb-3" id="inlineFormCustomSelectP" onClick={()=>{this.props.onProjectSelect(document.getElementById("inlineFormCustomSelectP").value)}}>
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

                                                               <button type="button" class="btn float-right btn-success btn-circle btn-xl"><i class="fa fa-paper-plane"></i></button>
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
        WholeList:state.globalState.WholeList,
        ProjectSelect:state.globalState.ProjectSelect
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
        onSelectReport: (value,name) => dispatch({type: actionTypes.OPENREPORT , value:value,name:name}),
        onDeleteWorker: (list) => dispatch({type: actionTypes.DELETEWORKER , list:list}),
        onProjectSelect:(value) => dispatch({type: actionTypes.PROJECTSELECT , value:value})
    };
};
  export default connect(mapStateToProps,mapDispatchToProps)(reportForm);