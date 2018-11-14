import React,{Component} from "react";
import { connect } from 'react-redux';

import HomeProfile from "./HomeProfile";
import ReportForm from  "./reportForm";

class Profile extends Component {

    render() {      
      return (
        this.props.newReport ===true ? <ReportForm/> : <HomeProfile/>)}
  }
  
  const mapStateToProps = state => {
    return {
        newReport:state.globalState.newReport
    };
  };

  export default connect(mapStateToProps)(Profile);