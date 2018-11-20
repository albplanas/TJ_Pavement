import React from "react";
import { connect } from 'react-redux';


import Profile from './Profile/Profile'


function Home(props) {

      return (
         <Profile/>

      );
    }
  
  

  const mapStateToProps = state => {
    return {
        login:state.globalState.login
    };
  };
  

  
  export default connect(mapStateToProps)(Home);



