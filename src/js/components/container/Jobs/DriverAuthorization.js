import React,{Component} from "react";
import Sign_Print from "../Helper/Signature";



class DriverAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }

   
    }

    render(){
        return (
            <div class="container">

        <p>I,{this.props.name} here by authorize the department of Motor Vehicles to finish,
             for this one time only information pertaining to my driving record to the requestor TJ Pavement Corp. for insurence purposes  </p>
           <Sign_Print name={this.props.name}/>
        </div>    
        )
    }
    
}

export default DriverAuth;