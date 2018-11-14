import React,{Component} from "react";


class EmployeeInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
         
        }
        
 
     
       
     }

     


    render() {

    


      return (
        <div id ="EmployeeReport" >
         <a style={{fontSize:"20px",position:"absolute",right:"6vw",top:"20px",color:"red"}} onClick={this.props.cancel}><i class=" fas fa-times-circle"   /></a> 
          
        </div>
      );
    }
  }
  


  export default EmployeeInfo;