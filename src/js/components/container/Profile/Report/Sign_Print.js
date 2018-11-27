import React,{Component} from "react";
import SignaturePad from "signature_pad"





class Sign_Print extends Component {
    constructor(props) {
        super(props);
        this.state={
            signaturePad    :undefined,
            data:[],
            signPass:false,
            index:""
        }
     
        this.change=this.change.bind(this);
       
    }

    change(){
        
      
     
        this.setState({
            data: this.state.signaturePad.toData()
        })
        this.props.DataSign(this.state.signaturePad.toData(),this.props.index);

    }
  
     componentWillMount(){
        this.setState({
          data:[{color:"rgb(0,0,0)",points:[{time: 1542636683829, x: 170.5, y: 91.5},{time: 1542636683829, x: 120.5, y: 91.5}]}]
          ,
          index:this.props.index
        })
     }
     componentDidMount(){
        var i= this.state.index;
        var signaturePad = new SignaturePad(document.getElementById("signature-pad"+i), {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            penColor: 'rgb(0, 0, 0)'
          });
        
         
          
        


          var cancelButton = document.getElementById('clear');
          
          cancelButton.addEventListener('click', function (event) {
            signaturePad.clear();
          });

          function resizeCanvas() {
            var ratio =  Math.max(window.devicePixelRatio || 1, 1);
            document.getElementById("signature-pad"+i).width = document.getElementById("signature-pad"+i).offsetWidth * ratio;
            document.getElementById("signature-pad"+i).height =document.getElementById("signature-pad"+i).offsetHeight * ratio;
            document.getElementById("signature-pad"+i).getContext("2d").scale(ratio, ratio);
            signaturePad.clear(); // otherwise isEmpty() might return incorrect value
        }
        
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        
   

        this.setState({signaturePad:signaturePad});
        
        }

     render(){
        
       var i= this.state.index;
       
       
        var style={
            marginLeft:"5%"
        }
        return  (
            
            <div class="Signpad">
              
                                  
                                    <h3 className="text-white mt-2 ml-3 text-warning">Please,Sign below </h3>
                                    <canvas id={"signature-pad"+i}   class="signature-pad border border-dark shadow mt-3 mb-3 " style={style}  onMouseMove ={this.change} onTouchMove={this.change} >
                                    </canvas>
                                    <div class="btn-group btn-block  " style={{marginLeft:"25%",height:"40px",width:"200px"}} role="group" aria-label="Basic example">
                                        <button id="clear" style={{height:"40px"}} type="button" class="btn btn-light text-danger">Clear</button>
                                        <button id="done"  style={{height:"40px"}} type="button" class="btn btn-dark  text-success"onClick={this.props.done}>Done</button>
                                    </div>
                                
                                   

            </div>
            
        )
     }
 
}

export default Sign_Print;