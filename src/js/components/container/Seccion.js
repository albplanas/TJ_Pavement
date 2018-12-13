import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../store/actions';






import Home from "./Home/Home" 


class Seccion extends Component {
    constructor(props) {
        super(props);
        this.state = {
          door:1
        };
    
       
      }



    componentWillMount(){
      var num= this.props.door[this.props.door.length-1]-0
      this.setState({
          door:num
      })
    }

    componentWillReceiveProps(nextProps){
        var num= nextProps.door[nextProps.door.length-1]-0
        if(nextProps.door!==this.state.door){
            
            this.setState({
                door:num
            })
        }
    }

    render() { 
        
        
   
      return this.state.door===1?(<Home/>) :(<div/>)

    
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