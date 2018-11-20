import React,{Component} from "react";
import { connect } from 'react-redux';

import HomeProfile from "./HomeProfile";
import ReportForm from  "./reportForm";
import OldProjectReport from  "./OldProjectReport";

class Profile extends Component {

    render() { 
        

      return (
        this.props.getReport ===true ?     this.props.newReport===true ? <ReportForm/> : <OldProjectReport /> : <HomeProfile/>)}
  }
  
  const mapStateToProps = state => {
    return {
        getReport :state.globalState.getReport,
        newReport :state.globalState.newReport,
        date      :state.globalState.dateSelect
    };
  };

  export default connect(mapStateToProps)(Profile);