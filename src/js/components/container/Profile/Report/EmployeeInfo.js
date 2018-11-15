import React,{Component} from "react";

import Sign_Print from "./Sign_Print"

class EmployeeInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
         EmployeeReport:[],
         select:"",
         projSelect:""
        }
        
        this.Update=this.Update.bind(this);
        this.change=this.change.bind(this);
     
       
     }

     Update(){
          this.props.update(this.state.EmployeeReport,this.state.EmployeeReport[this.state.select].name)
     }

     change(e){
       
        var Chang=this.state.EmployeeReport;
        Chang[this.state.select].Categories[ e.target.name-0]=document.getElementById( e.target.id).value
        this.setState({
            EmployeeReport:Chang
        })
     }

     componentWillMount() {
  
      this.setState({ EmployeeReport:this.props.info.Employees,
                      select:this.props.info.selectEmployee,
                      projSelect:this.props.info.projSelect
                    })
  
    }
  

    componentWillReceiveProps(nextProps) {

      if(nextProps.info.projSelect!==this.state.projSelect ||  nextProps.info.Employees.length!==this.state.EmployeeReport){
              
        this.setState({ 
                  EmployeeReport:nextProps.info.Employees,
                  select:nextProps.info.selectEmployee,
                  projSelect:nextProps.info.projSelect
        })
      
      }
                
      
                 
  
      }

    render() {

 

    var arrayForm= this.props.projectSet[this.state.projSelect].Categories.map((elem,index)=>{
                       
                        return (
                          <div class="form-group row ml-5"> 
                            <label class="control-label col-7" for="name">{elem}</label>
                            <input class="form-control  col-3" id={elem+"_"+this.state.EmployeeReport[this.state.select].name} name={index+''} type="number" onChange={this.change} value={this.state.EmployeeReport[this.state.select].Categories[index]}/>
                          </div>
                        )
    })



      return (
        <div  id ="EmployeeReport" >
         <div className="container">
         <h4 className="col-auto text-dark  mb-5 mt-2 "> <u>{this.state.EmployeeReport[this.state.select].name}</u></h4>
          <button type="button" class="btn border-danger text-danger rounded-circle Close-btn" id="close2" aria-label="Close" onClick={this.props.cancel}>
            <span aria-hidden="true" onClick={this.props.cancel} >&times;</span>
          </button>
        
        
         </div>
            <hr/>
            <div className="container">
            {arrayForm}

            <hr/>
            
            <Sign_Print/>
            <div class="custom-control custom-checkbox mt-3 mb-3">
              <input type="checkbox" class="custom-control-input" id="customCheck1"/>
              <label class="custom-control-label" for="customCheck1">By signing ths Daily Report Im agreement that the hours reported are correct and that i did not suffer any Injury/Accident or did not witness any Injury/Accident from other employee </label>
            </div>
                  <div class="form-group">
                    <button class="btn btn-success " name="submit" type="submit" onClick={this.Update}>Done</button>
                  </div>
                  </div>   
        </div>
      );
    }
  }
  


  export default EmployeeInfo;