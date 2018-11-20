import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../../../store/actions';






class OldReport extends Component {
    constructor(props) {
        super(props);

        this.state={
                    info:[]
        }
    
     }
     componentWillMount() {

      this.setState({
                     info: this.props.info
                    })
  
    }
  
  
  
    //Update the list
   componentWillReceiveProps(nextProps) {
              
                  if(nextProps.info[0][4]!==this.state.info[0][4]){
                    this.setState({info: nextProps.info })
                  }
    }


    render() {

console.log(this.props.info)   
console.log(this.state.info)
   var   EmployeeReport=this.state.info.map(elem=>{

                         var  HoursReport=elem.Hours.map(hour=>{
                                return (
                                  <tr class="info">
                                                                        
                                      <td>{hour.categories}</td>
                                      <td className="text-right">{hour.hour}</td>
                                  </tr>
                                )    
                          })

                          return (
                                    <div>
                                                          <h5 className="text-primary">{elem.name} </h5>                                                           
                                                          <table class="table">
                                                            <tbody>
                                                              { HoursReport}
                                                            </tbody>
                                                          </table>
                                                        
                                    </div>                   
                          )
                        })


      return (
      <div class=" shadow border-secundary" id="oldreport">
              < main id="main-doc">
                      <section class="main-section" id="Introduction">
                      <a onClick={this.props.cancel}><i class="fas fa-arrow-left text-danger" style={{fontSize:"20px",position:"absolute", top:"40px",left:"40px"}}></i></a>
                        <header class="text-center"><h3><u>Assistance report</u></h3></header>
                        <article>  
                          <p class="text-center"><strong>{this.props.project}</strong></p>
                          <p class="text-center"><strong>{this.props.date}</strong></p>
                        </article>
                      </section>
                      <hr className="bg-dark"/>
                      <section class="main-section" >
                       
                        <article>
                   
                            <div class="container">
                              {EmployeeReport}
                            </div>

                         </article>
                      </section>
                    
                       
            </main>
      </div>
      )
    }
  }
  

  const mapStateToProps = state => {
    return {
        Employees:state.globalState.Employees,
        Project:state.globalState.Project,
        Supervisor:state.globalState.Supervisor,
        WholeList:state.globalState.WholeList,
        ProjectSelect:state.globalState.ProjectSelect,
        date:state.globalState.dateSelect,
        supervisorSelect:state.globalState.supervisorSelect,

    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      onSelectReport: (value,name,date) => dispatch({type: actionTypes.OPENREPORT , value:value,name:name,date:date}),
        onDeleteWorker: (list) => dispatch({type: actionTypes.DELETEWORKER , list:list}),
        onProjectSelect:(value) => dispatch({type: actionTypes.PROJECTSELECT , value:value})
    };
};
  export default connect(mapStateToProps,mapDispatchToProps)(OldReport);