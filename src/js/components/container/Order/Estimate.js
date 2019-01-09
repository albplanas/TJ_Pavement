import React,{Component} from "react";
import { connect } from 'react-redux';

import * as actionTypes from './../../../../store/actions';



import logo2 from './../../../../img/logos/tjp.png';


class Estimate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card:false
        };
        
        this.onLoad=this.onLoad.bind(this)
        this.Card=this.Card.bind(this)
      }
      Card(){
        this.setState({
          card:true
        })
      }
      onLoad(){
       var data= localStorage.getItem("data");
       if(data){
         var value= JSON.parse(data);
         if(value.setup===true){


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
               

        
      }
  
      componentWillReceiveProps(nextProps){
        
         
      }

  
      componentDidMount(){
       
        const script = document.createElement("script");

        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDB5LteV7414moBuOPjaI7CSGAPNzMfmhs&libraries=places&callback=initMap";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }

    render() { 
        
      var cardStyle= this.state.card===true?{display:"block",maxWidth: "18rem"}:{display:"none",maxWidth: "18rem"}
                   
      return (
        <div className="ServiceChild mt-3">

              

              <h5 class="mt-5 mb-2">Choose a location to deliver our products</h5>
              <button id="Go_Estimate" className="btn controls btn-info " style={{width:"auto", height:"34px",marginLeft:"10px"}} onClick={this.Card}>Go</button>
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
            
    };
  };
 const mapDispatchToProps = dispatch => {
    return {
        onDoorSelect: (value) => dispatch({type: actionTypes.DOOR , value:value}),
       
    };
};
  export default connect(mapStateToProps,mapDispatchToProps )(Estimate);