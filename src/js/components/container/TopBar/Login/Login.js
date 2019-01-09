import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../../../store/actions';







class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
                login:true
        };
    
        this.close=this.close.bind(this);
       
      }

    change(e){
        e.preventDefault();
        this.setState({
            login:!this.state.login
        })
    }

    close(){
        this.props.onDoorSelect("door-home")
    }



    componentWillMount(){
      
      
    }

    componentWillReceiveProps(nextProps){
        
        
    }


    componentDidMount(){
        $(function() {
            $(".btn").click(function() {
                $(".form-signin").toggleClass("form-signin-left");
            $(".form-signup").toggleClass("form-signup-left");
            $(".frame").toggleClass("frame-long");
            $(".signup-inactive").toggleClass("signup-active");
            $(".signin-active").toggleClass("signin-inactive");
            $(".forgot").toggleClass("forgot-left");   
            $(this).removeClass("idle").addClass("active");
            });
        });
        
        $(function() {
            $(".btn-signup").click(function() {
          $(".nav").toggleClass("nav-up");
          $(".form-signup-left").toggleClass("form-signup-down");
          $(".success").toggleClass("success-left"); 
          $(".frame").toggleClass("frame-short");
            });
        });
        
        $(function() {
            $(".btn-signin").click(function() {
          $(".btn-animate").toggleClass("btn-animate-grow");
          $(".welcome").toggleClass("welcome-left");
          $(".cover-photo").toggleClass("cover-photo-down");
          $(".frame").toggleClass("frame-short");
          $(".profile-photo").toggleClass("profile-photo-down");
          $(".btn-goback").toggleClass("btn-goback-up");
          $(".forgot").toggleClass("forgot-fade");
            });
        });

    }


    render() { 
        
       
   
      return (
        <div class="wall">

        
                <div class="container">
                            <div class="frame">
                            
                                <div class="nav">
                                
                                <ul class="links">
                                    <li class="signin-active"><a class="btn">Sign in</a></li>
                                    <li class="signup-inactive"><a class="btn">Sign up </a></li>
                                </ul>
                                <i class="fas fa-times fa-lg text-danger " onClick={this.close} ></i>
                                </div>
                                <div ng-app ng-init="checked = false">
                                                    <form class="form-signin" action="" method="post" name="form">
                                    <label for="username">Username</label>
                                    <input class="form-styling" type="text" name="username" placeholder=""/>
                                    <label for="password">Password</label>
                                    <input class="form-styling" type="password" name="password" placeholder=""/>
                                    <input type="checkbox" id="checkbox"/>
                                    <label for="checkbox" ><span class="ui"></span>Keep me signed in</label>
                                    <div class="btn-animate">
                                        <a class="btn-signin">Sign in</a>
                                    </div>
                                                    </form>
                                    
                                                    <form class="form-signup" action="" method="post" name="form">
                                    <label for="fullname">Full name</label>
                                    <input class="form-styling" type="text" name="fullname" placeholder=""/>
                                    <label for="email">Email</label>
                                    <input class="form-styling" type="email" name="email" placeholder=""/>
                                    <label for="tel">Phone</label>
                                    <input class="form-styling" type="email" name="email" placeholder=""/>
                                    <label for="password">Password</label>
                                    <input class="form-styling" type="password" name="password" placeholder=""/>
                                    <label for="confirmpassword">Confirm password</label>
                                    <input class="form-styling" type="password" name="confirmpassword" placeholder=""/>
                                    <a ng-click="checked = !checked" class="btn-signup text-white">Sign Up</a>
                                                    </form>
                                
                                        <div  class="success">
                                        
                                            <div class="successtext">
                                            <p> Thanks for signing up! Check your email for confirmation.</p>
                                            </div>
                                        </div>
                                </div>
                                
                                <div class="forgot">
                                    <a href="#">Forgot your password?</a>
                                </div>
                                

                            </div>
                

            </div>
        </div>       
            
      )

    
  }
}
  const mapStateToProps = state => {
    return {
            door:state.globalState.door
    };
  };
 const mapDispatchToProps = dispatch => {
    return {
        onDoorSelect: (value) => dispatch({type: actionTypes.DOOR , value:value})
    };
};
  export default connect(mapStateToProps,mapDispatchToProps )(Login);