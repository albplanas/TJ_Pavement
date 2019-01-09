import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../store/actions';






import Home from "./Home/Home" 
import Login from "./TopBar/Login/Login"
import OrderCenter from "./Order/OrderCenter";
import CustomerCenter from "./Customer/CostumerCenter"
import Doc from "./Documents_Downloads/Doc"
import Job from "./Jobs/JobsCenter"


class Seccion extends Component {
    constructor(props) {
        super(props);
        this.state = {
          door:1
        };
    
       
      }



    componentWillMount(){
      
      this.setState({
          door:this.props.door
      })
    }

    componentWillReceiveProps(nextProps){
        
        if(nextProps.door!==this.state.door){
            
            this.setState({
                door:nextProps.door
            })
        }
    }

    render() { 
        
        
   
      return this.state.door==='door-home'?(<Home/>) :
             this.state.door==='door-login'?(<Login/>):
             this.state.door==='door-order'?(<OrderCenter/>):
             this.state.door==='door-customer'?(<CustomerCenter/>):
             this.state.door==='door-doc'?(<Doc/>):
             this.state.door==='door-job'?(<Job/>):(<div/>)

    
  }
}
  const mapStateToProps = state => {
    return {
            door:state.globalState.door
    };
  };
 const mapDispatchToProps = dispatch => {
    return {
        onDoorSelect: (value) => dispatch({type: actionTypes.DOOR , value:value})
    };
};
  export default connect(mapStateToProps,mapDispatchToProps )(Seccion);