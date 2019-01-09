import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';
import TopBar from "../TopBar/TopBar";
import JobApply from "./Application";








class JobCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
                tab:"job"
        };
    
       this.ChooseTab=this.ChooseTab.bind(this)
      }


      ChooseTab(e){
                e.preventDefault();
                var tab= e.target.id;
              
                this.setState({
                    tab:tab
                })
      }



    /*componentWillMount(){
      
            this.setState({
                tab:this.props.doorChild
            })
      
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.doorChild!==this.state.tab){
            this.setState({
                tab:nextProps.doorChild
            })
        }
        
    }
*/

    componentDidMount(){
        window.addEventListener("resize", ()=>{});
    }


    render() { 
        
       
       console.log("im there")
   
      return (
        <div id="JobCenter">
            <TopBar/>
            <div className="container">
                        <nav>
                                <div class="nav nav-tabs" id="nav-tabs" role="tablist">
                                    <a class={this.state.tab==="job"?"nav-item nav-link active":"nav-item nav-link"}         onClick={this.ChooseTab} id="job" data-toggle="tab" href="#nav-jobs" role="tab" aria-controls="nav-jobs" aria-selected="false">{window.innerWidth<770?<i class="far fa-comments "></i>:"Application"}</a>
                                </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContents">
                               
                                <div class={this.state.tab==="job"?"tab-pane fade show active":"tab-pane fade"}  id="nav-jobs" role="tabpanel" aria-labelledby="nav-job-tab">
                               
                                                    <JobApply/>
                                </div>
                              
                               
                        </div>
            </div>
        </div>       
            
      )

    
  }
}
  const mapStateToProps = state => {
    return {
            doorChild:state.globalState.doorChild
    };
  };
 const mapDispatchToProps = dispatch => {
    return {
        onChildSelect: (value) => dispatch({type: actionTypes.DOORCHILD , value:value})
    };
};
  export default connect(mapStateToProps,mapDispatchToProps )(JobCenter);