import React,{Component} from "react";
import { connect } from 'react-redux';
import * as actionTypes from './../../../store/actions';
class Login extends Component {
    constructor(props) {
        super(props);
          
        this.state = {
              username:'',
              password:""  
        }
        this.Sign=this.Sign.bind(this)
        this.change=this.change.bind(this);
     }

     change(e){
        this.setState({
            [e.target.name]:document.getElementById(e.target.id).value
        })
     }
     Sign(){
        
        this.props.onLOGIN(true)
    }
    render() {
      return (
        <div id="Log">
                    <section>
                        <div class="layer"></div>
                        <div class="container-fluid">
                            <div class="login-form">
                            <h1>Sign In</h1>
                            <div>
                                <input type="number" id="username" name="username" placeholder="Phone number"  onChange={this.change} value={this.state.username}/>
                                <input type="password" id = "password" name="password" placeholder="password" onChange={this.change} value={this.state.password}/>
                                < button className="btn btn-primary" onClick={this.Sign} >Login </button>
                            </div>
                          
                            </div>
                        </div>
                    </section>
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
        onLOGIN: (value) => dispatch({type: actionTypes.LOGIN, value:value})
    };
};
  
  export default connect(mapStateToProps,mapDispatchToProps)(Login);