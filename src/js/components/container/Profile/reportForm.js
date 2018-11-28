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
          Employees:[{name:"", Hours:[["",1]],Signature:[]}],
          projSelect:"",
          doneList:[],
          deleteId:'',
          signPass:false,
          indexSelect:0,
          hr:0,
          openhr:false,
          catName:'',
          msm:"",
          nameSMS:'',
          sentAlert:false
        }
        
 
      
        this.cancel=this.cancel.bind(this)
        
      
        
        this.UpdateForm=this.UpdateForm.bind(this);
        this.Check_in_doneList=this.Check_in_doneList.bind(this)
        
        
        this.Send=this.Send.bind(this)

    
        this.deleteCtg=this.deleteCtg.bind(this);
        this.SwitchSign=this.SwitchSign.bind(this)
        this.Pass=this.Pass.bind(this);
        this.AddRow          =this.AddRow.bind(this);
        this.DeleteRow       =this.DeleteRow.bind(this);
        this.AddCtg          =this.AddCtg.bind(this);
        
        
        this.onChangeSelectName=this.onChangeSelectName.bind(this)
        this.onChangeSelectLabor=this.onChangeSelectLabor.bind(this);
        this.onChangeSelectHour=this.onChangeSelectHour.bind(this);
        this.ChngSign=this.ChngSign.bind(this)
     }

onChangeSelectName(e){
  e.preventDefault();
  var index= e.target.id===""? e.target.parentNode.id===""? e.target.parentNode.parentNode.id:e.target.parentNode.id   :e.target.id;
  var i=index.split("_")[1]-0;
  var list= this.state.Employees;
  list[i].name=document.getElementById(index).value;
  this.setState({Employees:list})
}

onChangeSelectLabor(e){
  e.preventDefault();
  var index= e.target.id===""? e.target.parentNode.id===""? e.target.parentNode.parentNode.id:e.target.parentNode.id   :e.target.id;



  var i=index.split("_")[1]-0;
  var j=index.split("_")[2]-0;


  var list= this.state.Employees;
  list[i].Hours[j][0]=document.getElementById(index).value;
  this.setState({Employees:list})
}
onChangeSelectHour(e){

  e.preventDefault();
  var index= e.target.id===""? e.target.parentNode.id===""? e.target.parentNode.parentNode.id:e.target.parentNode.id   :e.target.id;



  var i=index.split("_")[1]-0;
  var j=index.split("_")[2]-0;


  var list= this.state.Employees;
  list[i].Hours[j][1]=document.getElementById(index).value;
  this.setState({Employees:list})
}




AddRow(){

  var l =this.state.Employees.length;

 
    var list = this.state.Employees.concat([{name:"", Hours:[['',1]],Signature:[]}])
    
    
    
    this.props.onDeleteWorker(list)
    this.setState({
                      Employees:list,
                      selectEmployee:l
                    })
  
}


DeleteRow(e){
    e.preventDefault();
   var index= e.target.id===""? e.target.parentNode.id===""? e.target.parentNode.parentNode.id:e.target.parentNode.id   :e.target.id;
   var i=index.split("_")[1]
   $('#exampleModalCenter').modal('show')

    this.setState({deleteId:i})
  
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

AddCtg(e){
     
  e.preventDefault();
  var index= e.target.id===""? e.target.parentNode.id===""? e.target.parentNode.parentNode.id:e.target.parentNode.id   :e.target.id;
  var i=index.split("_")[1]-0;
  var   list=this.state.Employees;
        list[i].Hours.push(['',1])

      this.setState({
        Employees:list
                    })
    
}

deleteCtg(e){

  e.preventDefault();

  

   var index= e.target.id===""? e.target.parentNode.id===""? e.target.parentNode.parentNode.id:e.target.parentNode.id   :e.target.id;
   var i=index.split("_")[0]-0;
   var j=index.split("_")[1]-0;

   console.log(i,j,this.state.Employees)
 
  var list = this.state.Employees;
  if(j>0){
    list[i].Hours=list[i].Hours.filter((e,index)=> index!==j)
  }
  
  
      this.setState({Employees:list})
    

}


cancel(e){
         
  this.props.onSelectReport(false,false,this.props.supervisorSelect,this.props.date)
  this.props.onDeleteWorker(this.state.Employees)
}

ChngSign(e){
      e.preventDefault();
      var index= e.target.id===""? e.target.parentNode.id===""? e.target.parentNode.parentNode.id:e.target.parentNode.id   :e.target.id;
      var i=index.split("_")[1]-0;
  this.setState({ 
    indexSelect:i,
    signPass:!this.state.signPass,
    
  })
 }
 SwitchSign(data,index){
  

  var   list  = this.state.Employees;
  
  if(this.state.signPass===true){
    list[index].Signature=data;
  }
  this.setState({ 
    signPass:!this.state.signPass,
    Employees:list
  })
 }
     Send(){
      
       var val=true,sms='';
       //Check Send
       if(this.state.Employees.length===0){
        val=false;
        this.setState({

          nameSMS : "",
          sms:"Empty",
          sentAlert:true
          }
        )
        
       
      } 
     for(var i in this.state.Employees){
          if(this.state.Employees[i].Hours.length===0){
            var name=this.state.Employees[i].name
            val=false
            this.setState({

              nameSMS : name,
              sms:"Hours",
              sentAlert:true
              }
            )
            break;
          } 
          if(this.state.Employees[i].Signature.length===0){
            var name=this.state.Employees[i].name
            val=false;
            this.setState({

              nameSMS : name,
              sms:"Signature",
              sentAlert:true
              }
            )
            break;
          } 

     }
  
     if(val===true){
      this.setState({

        nameSMS : '',
        sms:"done",
        sentAlert:true
        }
      )
     }
     

     setTimeout(()=>{

      if(this.state.sms==="done"){this.props.onSelectReport(false,false,this.props.supervisorSelect,this.props.date)}
      this.setState({

        nameSMS : '',
        sms:"",
        sentAlert:false
        } )
        
       }, 5000);


       //Update Local database
      axios.get('/oldReports')
      .then((response)=> {
          
          //right now i will store the table in the redux state but in the real aplication i need to create a file outside app 
          
      })
      axios.get('/idProjectReference')
      .then((response)=> {
      
          //right now i will store the table in the redux state but in the real aplication i need to create a file outside app 
          
      })
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
    var list =this.props.Employees.length===0?[{name:"", Hours:[["",1]],Signature:[]}]:this.props.Employees;
    console.log(this.props.Employees)
    this.setState({ 
                    Employees:list,
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
      
          

      //Project
      var listProject=this.props.Project.map(elem=>elem.name);
        
      var arrayProject= listProject.map((elem,index)=>{ return ( <option className="text-dark" value={index}>{elem}</option> )})


        //WholeList
          
        
      
        //Hours
        var hrs=  [1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12]
        
      var ArrayHrs= hrs.map((elem,index)=>{ return ( <option className="text-dark" value={elem}>{elem}</option> )})



      
 //Employee
            var NameList=this.state.Employees.map((elem,indexElem)=>{return elem.name})

              var arrayEmployee=this.state.Employees.map((elem,indexElem)=>{

                              var arrayWholeList= this.props.WholeList.map(elemName=>{ 
                              
                                            if(NameList.indexOf(elemName)!==-1){
                                              return ( <option className="text-muted dropdown-item" disabled  value={elemName}>{elemName}</option> )
                                            }
                                            else{
                                              return elem.name === elemName ? ( <option className="text-dark dropdown-item" selected value={elemName}>{elemName}</option> ):( <option className="text-primary dropdown-item"  value={elemName}>{elemName}</option> )
                                        
                                            }
                                 })


                 var JobsList=elem.Hours.map((elem)=>{return elem[0]})


                
                   var ListLabor= elem.Hours.map((ctg,index)=>{

                                                var  arrayCategories=this.props.Project[this.state.projSelect].Categories.sort().map((elemCTG)=>{
                                                  if(JobsList.indexOf(elemCTG)!==-1){ 
                                                    return ( <option className="text-muted"  id={"ctg_"+indexElem+"_"+index} disabled value={elemCTG}>{elemCTG}</option> )
                                                  } 
                                                  else{
                      
                                                    return ctg[0]=== elemCTG ? ( <option className="text-dark"  id={"ctg_"+indexElem+"_"+index} selected value={elemCTG}>{elemCTG}</option> ):( <option className="text-primary"  id={"ctg_"+indexElem+"_"+index} value={elemCTG}>{elemCTG}</option> );
                                            
                                                  }                                  
                                                })
                                          return (
                                            <tr>
                                            <th scope="row" id={indexElem+"_"+index}  onClick={this.deleteCtg}><i style={{marginLeft:'5px',color:"rgb(217,83,79)"}} class="fas fa-trash-alt"></i></th>
                                            <td > 
                                              <select class="w-100 custom-select " id={"labor_"+indexElem+"_"+index} onChange={this.onChangeSelectLabor} >
                                              <option className="text-dark" value="Choose">Select Labor</option>
                                                {arrayCategories}
                                              </select>
                                              </td>
                                            <td className="colN-3">
                                              <select class="custom-select " id={"hr_"+indexElem+"_"+index} onChange={this.onChangeSelectHour}>
                                              <option className="text-dark" value="Choose">Select Hours </option>
                                                {ArrayHrs}
                                              </select>
                                            </td>
                                            
                                          </tr>
                                      
                                        
                                          )})
                  
                  
                    
                  return (

                    <tr>
                          <th scope="row" onClick={this.DeleteRow} id={'elem_'+indexElem}  ><i style={{marginLeft:'5px',color:"rgb(217,83,79)"}} class="fas fa-trash-alt fa-lg"></i></th>
                    <td className="colN-2">
                      
                          <select class=" custom-select " id={'Name_'+indexElem} onChange={this.onChangeSelectName}>
                                    <option className="text-dark" value="Choose">Select Employee</option>
                                    {arrayWholeList}
                          </select>
                    </td>
                    <td>
                    <table class="table ">
                            <tbody>
                            <td >
                                    <table class="table table-striped">
                                    <tbody>
                                        {ListLabor}
                                    </tbody>
                                  </table> 
                            </td>
                             <td id={'ctg_'+indexElem} onClick={this.AddCtg}>
                                    <i style={{marginRight: "5px", marginLeft:'5px',color:"rgb(66,139,202)"}} class="fas fa-plus fa-lg"></i>
                            </td>
                            </tbody>
                       </table> 
                     
          
                    </td>
                    
                   {
                      (this.state.signPass===true && this.state.indexSelect===indexElem)? <Sign_Print done={this.SwitchSign} index={indexElem}/>:
                                  this.state.Employees[indexElem].Signature.length > 0  ?  
                                   <td id={"sig_"+indexElem} onClick={this.ChngSign} ><i style={{marginLeft:'5px'}}  class="far fa-check-circle text-success fa-lg"></i> </td> : 
                                   <td id={"esig_"+indexElem} onClick={this.ChngSign} ><i style={{marginLeft:'5px'}} class="fas fa-pen-fancy text-warning fa-lg"></i> </td>
                              
                            
                        
                                  
                     
                  
                   }
                 
                   </tr>


                  )})



      return (
                                                      <div id ="newReport">




                                                              <nav class="navbar navbar-default bg-dark">
                                                                <div class="container-fluid">
                                                                  <div class="navbar-header">
                                                                    <a class="navbar-brand" href="#" onClick={this.cancel}>
                                                                            <i class="fas fa-arrow-left text-danger fa-lg" ></i>
                                                                    </a>
                                                                    
                                                                    <h6 className="col-auto text-white float-right" >{this.props.date+''}</h6>
                                                                  </div>
                                                                  <form class="form-inline" >
                                                                        <div class="form-group">
                                                                        <label className="text-white" for="inlineFormCustomSelectP">Project</label>
                                                                            <select class=" form-control custom-select ml-3 w-85" id="inlineFormCustomSelectP" onClick={()=>{this.props.onProjectSelect(document.getElementById("inlineFormCustomSelectP").value)}}>
                                                                              {arrayProject}
                                                                            </select>
                                                                        </div>
                                                                        <button type="button" class="btn btn-primary form-group shadow border border-dark btn-sm  " onClick={this.Send}><i class="fa fa-paper-plane"></i>&nbsp;&nbsp;&nbsp;Send</button>
                                                          
                                                                    </form>
                                                                  
                                                                </div>
                                                               
                                                              </nav>

                                                            
                                                           <div className="tableRelative" style={{marginTop:"30px"}}>   
                                                            
                                                            <table class="table table-bordered">
                                                                  <thead>
                                                                    <tr>
                                                                      <th className='colN-1' onClick={this.AddRow} >
                                                                             <i class="fas fa-user-plus fa-lg" style={{marginLeft:'5px',color:"rgb(66,139,202)"}}></i>
                                                                                
                                                                    </th>
                                                                      <th className="colN-2 ">Name</th>
                                                                      <th >Report</th>
                                                                      <th className="colN-4">Sign</th>
                                                                    </tr>
                                                                  </thead>
                                                                  <tbody>
                                                                    {arrayEmployee}
                                                                   
                                                                  </tbody>
                                                                </table>

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

  function SendAlert(props){
    if(props.info.sentAlert === true){

      if(props.info.sms==="done"){
        return ( <div class="alert alert-success alert-dismissible fade show" role="alert">
                  <strong>Your Report was sent successfully!!!</strong>
                </div>)
    }
    if(props.info.sms==="Empty"){
      return ( <div class="alert alert-dark alert-dismissible fade show text-warning" role="alert">
                <strong>Your Report is empty!!!</strong>
              </div>)
  }
    if(props.info.sms==="Hours"){
      return ( <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{props.info.nameSMS +" has troubles with the Hours Report"}</strong>
              </div>)
  }
  if(props.info.sms==="Signature"){
    return ( <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>{props.info.nameSMS +" has troubles with the Signature, try to sign again"}</strong>
            </div>)
}
    }
    else{
      return (<div/>)
    }
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
        onProjectSelect:(value) => dispatch({type: actionTypes.PROJECTSELECT , value:value}),
        
    };
};
  export default connect(mapStateToProps,mapDispatchToProps)(reportForm);