import React,{Component} from "react";
import { connect } from 'react-redux';

import HomeProfile from "./HomeProfile";
import ReportForm from  "./reportForm";

class Profile extends Component {

    render() {      
      return (
        this.props.openReport ===true ? <ReportForm/> : <HomeProfile/>)}
  }
  
  const mapStateToProps = state => {
    return {
        openReport:state.globalState.openReport
    };
  };

  export default connect(mapStateToProps)(Profile);