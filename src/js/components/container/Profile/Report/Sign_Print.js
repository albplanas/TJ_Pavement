import React,{Component} from "react";
import SignatureCanvas from 'react-signature-canvas'





class Sign_Print extends Component {
    constructor(props) {
        super(props);
        this.state={
            
            data:[],
            index:0,
            pass:true
        }
     
        
       
    }

componentWillMount(){
    
   this.setState({
       index:this.props.index
   })
}

componentWillReceiveProps(nextProps){
    if(nextProps.index!==this.state.index){
        this.setState({
            index:nextProps.index
        })
    }
    
}

     render(){
     console.log("state",this.state)
       
        
        return     (
            
            <div class="Signpad" >
              
                                  
                                    <h3 className="text-white mt-2 ml-3 text-warning">Please, Sign below. </h3>
                                    <SignatureCanvas penColor='green' canvasProps={{width: 500, height: 400, className: 'sigCanvas' }} ref={(ref) => { this.sigCanvas = ref }} />
                                    <div class="btn-group btn-block  " style={{marginLeft:"25%",height:"40px",width:"200px"}} role="group" aria-label="Basic example">
                                        <button id="clear" style={{height:"40px"}} type="button" class="btn btn-light text-danger" onClick={()=>{this.sigCanvas.clear()}}>Clear</button>
                                        <button id="done"  style={{height:"40px"}} type="button" class="btn btn-dark  text-success" onClick={()=>{this.props.done(this.sigCanvas.toData(),this.state.index)}}>Done</button>
                                    </div>
                                
                                   

            </div>
            
        )
     }
 
}

export default Sign_Print;