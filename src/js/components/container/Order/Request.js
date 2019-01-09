import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';







class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
             
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
        <div id="Request">
                <form id="contact-form" method="post" action="contact.php" role="form">

                <div class="messages"></div>

                    <div class="controls">

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_name">Firstname *</label>
                                    <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_lastname">Lastname *</label>
                                    <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_email">Email *</label>
                                    <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="form_phone">Phone *</label>
                                    <input id="form_phone" type="tel" name="phone" class="form-control" placeholder="Please enter your phone number *" required="required" data-error="Valid phone number is required."/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                           
                        </div>
                        <div class="row">
                                <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="form_need">Please specify your need *</label>
                                            <select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                                                <option value=""></option>
                                                <option value="Request quotation">Request quotation</option>
                                                <option value="Request order status">Request order status</option>
                                                <option value="Request copy of an invoice">Request copy of an invoice</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="form_message">Message *</label>
                                    <textarea id="form_message" name="message" class="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <input type="submit" class="btn btn-success btn-send" value="Send message"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p class="text-muted">
                                    <strong>*</strong> means that these fields are required by TJ Pavement team for customer services proposes</p>
                            </div>
                        </div>
                    </div>

                    </form>
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
  export default connect(mapStateToProps,mapDispatchToProps )(Request);