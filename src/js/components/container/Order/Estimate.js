import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';






class Estimate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          door:1,
          select:1
        };
        
        this.onLoad=this.onLoad.bind(this)
       
      }

      onLoad(){
       var data= localStorage.getItem("data");
       if(data){
         var value= JSON.parse(data);
         if(value.setup===true){
              
              document.getElementById('map').style.width="50%";

              var newData={
                destination:value.destination,
                distance:value.distance,
                duration:value.duration,
                setup:false
            }
            
            var dataString=JSON.stringify(newData)
            console.log(dataString)
              localStorage.setItem("data",dataString);
         }
         
       }
      }

      componentWillMount(){
               

        this.setState({
            select:this.props.select
        })
      }
  
      componentWillReceiveProps(nextProps){
        
          if(nextProps.select!==this.state.select){
              
              this.setState({
                select:nextProps.select
              })
          }
      }

  
      componentDidMount(){
       
        const script = document.createElement("script");

        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDB5LteV7414moBuOPjaI7CSGAPNzMfmhs&libraries=places&callback=initMap";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }

    render() { 
        
                   
      return (
        <div className="ServiceChild container">
              <button id="Go_Estimate" className="btn controls btn-info " style={{width:"auto", height:"34px",marginLeft:"10px"}}>Go</button>
              <input id="destination-input" class="controls" type="text"
              placeholder="Enter a destination location" onChange={this.onLoad} onSelect={this.onLoad} />



            <div id="map" ></div>
                
             
        </div>

      )
           

    
  }
}



  const mapStateToProps = state => {
    return {
            door:state.globalState.door,
            select:state.globalState.serviceSelect
    };
  };
 const mapDispatchToProps = dispatch => {
    return {
        onDoorSelect: (value) => dispatch({type: actionTypes.DOOR , value:value}),
        onChangeSelect: (value) => dispatch({type: actionTypes.SERVICESDOOR , value:value})
    };
};
  export default connect(mapStateToProps,mapDispatchToProps )(Estimate);