import React from "react";
import { connect } from 'react-redux';

import Login from './Login'
import Profile from './Profile/Profile'


function Home(props) {


      return (
        
             props.login === false ?  <Login/> : <Profile/>

      );
    }
  
  

  const mapStateToProps = state => {
    return {
        login:state.globalState.login
    };
  };
  

  
  export default connect(mapStateToProps)(Home);



