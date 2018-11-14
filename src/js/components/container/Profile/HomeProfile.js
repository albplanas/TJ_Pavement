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

         //Supervisor
 var listSupervisor=this.props.Supervisor.map(elem=>elem);
     
 var arraySupervisor= listSupervisor.map(elem=>{ return ( <option className="text-dark" value={elem}>{elem}</option> )})
      return (


        <div id="Log">
                    <section>
                        <div class="layer"></div>
                        <div class="login-form">
                        <h1>Sign In</h1>
                                <div class="form-group  ">
                                    <label class=" text-white" for="inlineFormCustomSelectSuperv">Supervisor</label>
                                    <select class="custom-select  mb-3" id="inlineFormCustomSelectSuperv">
                                        {arraySupervisor}
                                    </select>
                                </div>
                          
                        
                        <div class="container">
                            
                                    <button class="btn w-75 ml-4 text-white btn-primary " href="#"  role="button" name="newReport" onClick={this.Select} >         
                                    <i class="fas fa-edit"></i> {'\u00A0'} New Report  

                                    </button>  
                               
                         
                        
                            </div>
                        </div>
                    </section>
        </div>
        

      );
    }
  }
  
  const mapStateToProps = state => {
    return {
        Supervisor:state.globalState.Supervisor
    };
  };
 const mapDispatchToProps = dispatch => {
    return {
        onSelectReport: (value,name) => dispatch({type: actionTypes.OPENREPORT , value:value,name:name})
    };
};
  export default connect(mapStateToProps,mapDispatchToProps)(HomeProfile);