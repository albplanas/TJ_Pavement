import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';

class HomeProfile extends Component {
    constructor(props) {
        super(props);
          
        
        this.Select=this.Select.bind(this)
     }

     Select(e){
            this.props.onSelectReport(true,e.target.name)
     }


    render() {

        
      return (
        <div >
             <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                    <img className="navbar-brand" src="http://jvaengineering.com/wp-content/uploads/2016/12/logo-112-2-png.png" style={{width:"100px",height:"50px"}}/>
                    <button id="mainButton" class="navbar-toggler bg-info" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                          <i class="fas fa-bars text-white" aria-hidden="true"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ">
                        <li class="nav-item dropdown float-right">
                            <a class="nav-link  text-white bg-primary " href="#"  role="button"  >         
                            <i class="fas fa-calendar-alt"></i> {'\u00A0'}  Schedule  
                            </a>
                           
                        </li>
                        <li class="nav-item dropdown float-right">
                            <a class="nav-link  text-white bg-primary " href="#"  role="button" onClick={this.Select} >         
                            <i class="fas fa-edit"></i> {'\u00A0'} Report  

                            </a>
                           
                        </li>
                        </ul>
                    </div>
            </nav>
        </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
        
    };
  };
 const mapDispatchToProps = dispatch => {
    return {
        onSelectReport: (value,name) => dispatch({type: actionTypes.OPENREPORT , value:value,name:name})
    };
};
  export default connect(mapStateToProps,mapDispatchToProps)(HomeProfile);