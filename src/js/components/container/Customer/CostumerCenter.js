import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';
import TopBar from "../TopBar/TopBar";
import Application from "../Jobs/Application";








class CustomerCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
                tab:"order"
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



    componentWillMount(){
      
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


    componentDidMount(){
        window.addEventListener("resize", ()=>{});
    }


    render() { 
        
       
       
   
      return (
        <div id="CustomerCenter">
            <TopBar/>
            <div className="container">
                        <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class={this.state.tab==="account"?"nav-item nav-link active":"nav-item nav-link"}  onClick={this.ChooseTab} id="account" data-toggle="tab" href="#nav-account" role="tab" aria-controls="nav-account" aria-selected="true">{window.innerWidth<770?<i class="fas fa-clipboard-list"></i>:"Accounting"}</a>
                                </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                                <div class={this.state.tab==="account"?"tab-pane fade show active":"tab-pane fade"}  id="nav-account" role="tabpanel" aria-labelledby="nav-account-tab">order</div>
                                
                               
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
  export default connect(mapStateToProps,mapDispatchToProps )(CustomerCenter);