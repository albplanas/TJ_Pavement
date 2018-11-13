import React,{Component} from "react";
import { connect } from 'react-redux';

class Profile extends Component {
    constructor(props) {
        super(props);
          
        this.state = {
              username:'',
              password:""  
        }
        this.change=this.change.bind(this);
     }

     change(e){
        this.setState({
            [e.target.name]:document.getElementById(e.target.id).value
        })
     }

    render() {
      return (
        <div id="Prof">
             <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                    <img className="navbar-brand" src="http://jvaengineering.com/wp-content/uploads/2016/12/logo-112-2-png.png" style={{width:"100px",height:"50px"}}/>
                    <button id="mainButton" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                          <i class="fas fa-bars text-info" aria-hidden="true"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ">
                        <li class="nav-item dropdown float-right">
                            <a class="nav-link  text-white bg-primary " href="#"  role="button" >         
                               Schedule  <i class="fas fa-calendar-alt"></i> 
                            </a>
                           
                        </li>
                        <li class="nav-item dropdown float-right">
                            <a class="nav-link dropdown-toggle text-white bg-primary " href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Send  
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item text-dark" href="#">Report</a>
                            </div>
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

  export default connect(mapStateToProps)(Profile);