import React,{Component} from "react";
import SignatureCanvas from 'react-signature-canvas'





class Sign_Print extends Component {
    constructor(props) {
        super(props);
        this.state={
            
            data:[],
            name:"",
            pass:true,
            pngImg:""
        }
     
        this.PNG=this.PNG.bind(this)
       
    }
PNG(){
    return document.querySelector("canvas").toDataURL("image/png");
   
}
componentWillMount(){
    
   this.setState({
       name:this.props.name
   })
}

componentWillReceiveProps(nextProps){
    if(nextProps.name!==this.state.name){
        this.setState({
            name:nextProps.name
        })
    }
    
}

     render(){
    
       
       var name= this.props.name;
       console.log("name",name)
        return     (
            
            <div class="Signpad" id ={this.props.name}>
              
                                  
                                    <div className="row">
                                            <div class="col-5">
                                                <center style={{paddingTop:"125px"}}>{Date(Date.now()).slice(0,10)}</center>
                                                <hr/>
                                                <center><p>Date</p></center>
                                            </div>
                                            
                                            <div class="col-7">
                                                    <div className="row">
                                                        <div className="col-9"><center><SignatureCanvas penColor='black' canvasProps={{width: 375, height: 150, className: 'sigCanvas' ,dotSize:0.5,minWidth : 0.1,maxWidth :1, minDistance:3 }} ref={(ref) => { this.sigCanvas = ref }} /></center></div>
                                                        <div className="col-3"><button className="btn btn-warning shadow" data-toggle="tooltip" data-placement="top" title="Clear SignPad" onClick={()=>{this.sigCanvas.clear()}}><i class="fas fa-eraser"></i></button></div>
                                                    </div>
                                                    
                                                    <hr/>
                                                <center><p>Signature</p></center>
                                            </div>
                                    </div>
                                  
                                   
                                
                                   

            </div>
            
        )
     }
 
}

export default Sign_Print;

