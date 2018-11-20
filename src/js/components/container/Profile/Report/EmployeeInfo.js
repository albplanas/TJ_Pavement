import React,{Component} from "react";

import Sign_Print from "./Sign_Print"


const  {checkTheList, validHours}   = require('./../Validation');



class EmployeeInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
         EmployeeReport:[],
         select:"",
         projSelect:"",
         signCheck:false,
         sms:''
        }
        
        this.Update=this.Update.bind(this);
        this.change=this.change.bind(this);
        this.add    =this.add.bind(this);
        this.delete    =this.delete.bind(this);
        this.DataSign=this.DataSign.bind(this)
     }
     delete(e){

      
      var index = e.target.id.slice(3,e.target.id.length)-0;
      var list = this.state.EmployeeReport;
      if(index!==undefined){
       
        list[this.state.select].Hours=list[this.state.select].Hours.filter((elem,i) => i!==index)
        
        this.setState({EmployeeReport:list})
      }
     

     
}
     add(){
    var   name=document.getElementById("addCategories").value;
    var   nameList=this.state.EmployeeReport[this.state.select].Hours.map(elem=>elem[0])
      if(!checkTheList(name,nameList)){

        var array=[name,0];
      
        var list = this.state.EmployeeReport;
        
       list[this.state.select].Hours.push(array)
    
        this.setState({EmployeeReport:list})
      }
       
      
}

      DataSign(data){
        
        var  eList = this.state.EmployeeReport
        eList[this.state.select].Signature = data
        this.setState({ EmployeeReport:eList})
      }



     Update(){

      var hours=this.state.EmployeeReport[this.state.select].Hours.map(elem=>elem[1])
    
        if(this.state.EmployeeReport[this.state.select].Signature.length===0 || this.state.EmployeeReport[this.state.select].Signature[0].points.length<3 ){
     
          var sms="The employee' Sign wasn't provided";
            this.setState({sms:sms})
            $('#AlertModal').modal('show')
      }
       else if(document.getElementById("customCheck1").checked===false){
        var sms="Please,read and mark the box below"
        this.setState({sms:sms})
        $('#AlertModal').modal('show')
      }
      else if(validHours(hours)===false){
        var sms = "Please,cheack the hours report again, something is wrong there"  
        this.setState({sms:sms})
        $('#AlertModal').modal('show')
      }
      else{
        var sms="";
        this.setState({sms:sms})
        this.props.update(this.state.EmployeeReport,this.state.EmployeeReport[this.state.select].name)
      }
     
         
     }

     change(e){
       
        var Chang=this.state.EmployeeReport;
        Chang[this.state.select].Hours[ e.target.name-0][1]=document.getElementById( e.target.id).value
        this.setState({
            EmployeeReport:Chang
        })
     }

     componentWillMount() {
  
      this.setState({ 
                      EmployeeReport:                  this.props.info.Employees,
                      select:                          this.props.info.selectEmployee,
                      projSelect:                      this.props.info.projSelect
                    })
  
    }
  

    componentWillReceiveProps(nextProps) {

      if(nextProps.info.projSelect!==this.state.projSelect ||  nextProps.info.Employees.length!==this.state.EmployeeReport){
              
        this.setState({ 
                  EmployeeReport:nextProps.info.Employees,
                  select:nextProps.info.selectEmployee,
                  projSelect:nextProps.projSelect
        })
      
      }
                
      
                 
  
      }

    render() {
      
   var  arrayCategories=this.props.projectSet[this.state.projSelect].Categories.map((elem)=>{
                       
     return ( <option className="text-dark" value={elem}>{elem}</option> );
})
 


    var arrayForm=  this.state.EmployeeReport[this.state.select].Hours.map((elem,index)=>{
                       
                        return (
                          <div class="form-group row "> 
                            <label class="control-label col-5" for="name">{elem[0]}</label>
                            <input class="form-control col-3 mr-1" style={{width:"60px" ,height:"38px"}}  id={this.state.EmployeeReport[this.state.select].name+"_"+index} name={index+''} type="number" onChange={this.change} value={elem[1]}/>
                            <button class="btn btn-dark " style={{height:"38px", width:"40px"}} id={"del"+index+""} type="button" onClick={this.delete}><i class="fa fa-trash" aria-hidden="true"></i></button>
                          </div>
                        )})



      return (
        <div  id ="EmployeeReport" >
         <div className="container">
         <h4 className="col-auto text-dark text-center  mb-5 mt-2 "> <u>{this.state.EmployeeReport[this.state.select].name}</u></h4>
         
          <a  onClick={this.props.cancel}><i class="fas fa-arrow-left text-danger" style={{fontSize:"20px",position:"absolute", top:"20px",left:"40px"}}></i></a>
        
         </div>
            <hr/>
            <div className="container">

                  <div class="col-auto ml-1 my-1">
                                                                <label class="mr-sm-3" for="inlineFormCustomSelect">Employees</label>
                                                                <ul> 
                                                                    <li className="ListElem row " >
                                                                      
                                                                            <select class=" col-8 Elem shadow border border-primary custom-select mr-3 mb-3" id="addCategories" >
                                                                                            {arrayCategories}
                                                                            </select>
                                                                      
                                                                      <div className="col-3 "> <button className=" btn btn-primary " style={{width:"40px"}}  onClick={this.add} ><i onClick={this.add} class="fas fa-plus"></i></button></div>
                                                                    </li>
                                                                    <hr className="col-10" />
                                                                      {arrayForm}
                                                                </ul>
                    </div>

            <hr/>
            
            <Sign_Print DataSign={this.DataSign} data={this.state.EmployeeReport[this.state.select].Signature}/>
            <div class="custom-control custom-checkbox mt-3 mb-3">
              <input type="checkbox" class="custom-control-input" id="customCheck1"/>
              <label class="custom-control-label" for="customCheck1">By signing ths Daily Report Im agreement that the hours reported are correct and that i did not suffer any Injury/Accident or did not witness any Injury/Accident from other employee </label>
            </div>
                  <div class="form-group">
                
                    <button class="btn btn-success " name="submit" type="submit" onClick={this.Update} >Done</button>
                    
                  </div>
                  <Alert sms={this.state.sms}/>
                  </div>   
        </div>
      );
    }
  }
  
  function Alert(props){
    
    return props.sms===""? (<div/>):
     (
          <div class="modal fade" id="AlertModal" tabindex="-1" role="dialog" aria-labelledby="AlertModalTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                  <div class="w-100 alert alert-warning alert-dismissible fade show" role="alert">
                    <strong class="w-80">ALMOST DONE!!!</strong>  {props.sms}
                    <button class="w-20" style={{width:"40px"}} type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  </div>
                </div>
          </div>
    )
}

  export default EmployeeInfo;