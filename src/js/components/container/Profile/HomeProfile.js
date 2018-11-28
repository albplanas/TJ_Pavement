import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';

class HomeProfile extends Component {
    constructor(props) {
        super(props);
          
        
        this.Select=this.Select.bind(this)
     }

     Select(){
            var Supervisor=document.getElementById("inlineFormCustomSelectSuperv").value;
            var date=document.getElementById("inlineFormCustomSelectDate").value;

            //date
            var dayNow=Date.now();
            var dayBefore=new Date(date);
            var dayBefore=Date.parse(dayBefore);
            
            var dayAgo=parseInt((dayNow-dayBefore)/86400000)
            
            var newV = dayAgo===0? true :false
            this.props.onSelectReport(true,newV,Supervisor,date)
            
           
     }


    render() {

         //Supervisor
 var listSupervisor=this.props.Supervisor.map(elem=>elem);
     
 var arraySupervisor= listSupervisor.map(elem=>{ return ( <option className="text-dark" value={elem}>{elem}</option> )})
 //Date
 
        
        var time = new Date().getTime();
        

        var arrayDate=[];

        for(var i=0;i<8;i++){
            var Time = time-i*86400000;
            var date = new Date(Time);
            date=date.toDateString()
            arrayDate=arrayDate.concat(<option className="text-dark" value={date}>{date}</option> )
        }

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
                                <div class="form-group  ">
                                    <label class=" text-white" for="inlineFormCustomSelectDate">Date</label>
                                    <select class="custom-select  mb-3" id="inlineFormCustomSelectDate">
                                        {arrayDate}
                                    </select>
                                </div>
                          
                        
                        <div class="container">
                            
                                    <button class="btn  shadow  text-white btn-primary " id="initBtn" href="#"  role="button" name="newReport" onClick={this.Select} >         
                                    <i class="fas fa-edit"></i> {'\u00A0'} Get Report  

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
        onSelectReport: (value,newValue,name,date) => dispatch({type: actionTypes.OPENREPORT , value:value, newValue:newValue,name:name,date:date})
    };
};
  export default connect(mapStateToProps,mapDispatchToProps)(HomeProfile);