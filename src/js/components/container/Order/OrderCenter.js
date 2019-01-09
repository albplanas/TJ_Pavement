import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';
import TopBar from "../TopBar/TopBar";
import Estimate from "./Estimate"
import Request from "./Request"






class OrderCenter extends Component {
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
                console.log(tab)
                this.setState({
                    tab:tab
                })
      }



    componentWillMount(){
        console.log(this.props)
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
        <div id="OrderCenter">
            <TopBar/>
            <div className="container">
                        <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class={this.state.tab==="order"?"nav-item nav-link active":"nav-item nav-link"}  onClick={this.ChooseTab} id="order" data-toggle="tab" href="#nav-order" role="tab" aria-controls="nav-home" aria-selected="true">{window.innerWidth<770?<i class="fas fa-clipboard-list"></i>:"New Order"}</a>
                                    <a class={this.state.tab==="request"?"nav-item nav-link active":"nav-item nav-link"}         onClick={this.ChooseTab} id="request" data-toggle="tab" href="#nav-request" role="tab" aria-controls="nav-profile" aria-selected="false">{window.innerWidth<770?<i class="far fa-comments "></i>:"Request"}</a>
                                    <a class={this.state.tab==="call"?"nav-item nav-link active":"nav-item nav-link"}       onClick={this.ChooseTab} id="call" data-toggle="tab" href="#nav-call" role="tab" aria-controls="nav-contact" aria-selected="false">{window.innerWidth<770?<i class="fas fa-phone "></i>:"Call us"}</a>
                                    <a class={this.state.tab==="quote"?"nav-item nav-link active":"nav-item nav-link"}       onClick={this.ChooseTab} id="quote" data-toggle="tab" href="#nav-quote" role="tab" aria-controls="nav-contact" aria-selected="false">{window.innerWidth<770?<i class="fas fa-calculator "></i>:"Quote & Estimate"}</a>
                                    <a class={this.state.tab==="tips"?"nav-item nav-link active":"nav-item nav-link"}       onClick={this.ChooseTab} id="tips" data-toggle="tab" href="#nav-tips" role="tab" aria-controls="nav-contact" aria-selected="false">{window.innerWidth<770?<i class="far fa-lightbulb"></i>:"Tips"}</a>
                                </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                                <div class={this.state.tab==="order"?"tab-pane fade show active":"tab-pane fade"}  id="nav-order" role="tabpanel" aria-labelledby="nav-home-tab">order</div>
                                <div class={this.state.tab==="request"?"tab-pane fade show active":"tab-pane fade"}  id="nav-request" role="tabpanel" aria-labelledby="nav-profile-tab">
                                        
                                        <Request/>    

                                </div>
                                <div class={this.state.tab==="call"?"tab-pane fade show active":"tab-pane fade"}  id="nav-call" role="tabpanel" aria-labelledby="nav-contact-tab">call</div>
                                <div class={this.state.tab==="quote"?"tab-pane fade show active":"tab-pane fade"}  role="tabpanel" aria-labelledby="nav-contact-tab">
                                        <Estimate/>
                                </div>
                                <div class={this.state.tab==="tips"?"tab-pane fade show active":"tab-pane fade"}  id="nav-tips" role="tabpanel" aria-labelledby="nav-contact-tab">tips</div>
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
  export default connect(mapStateToProps,mapDispatchToProps )(OrderCenter);