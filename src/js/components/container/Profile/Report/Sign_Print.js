import React,{Component} from "react";
import SignaturePad from "signature_pad"





class Sign_Print extends Component {
    constructor(props) {
        super(props);
        this.state={
            signaturePad    :undefined,
            data:[],
            signPass:false
        }
     
        this.change=this.change.bind(this);
       
    }

    change(){
        
      
     
        this.setState({
            data: this.state.signaturePad.toData()
        })
        this.props.DataSign(this.state.signaturePad.toData());

    }
  
     componentWillMount(){
        this.setState({
          data:[{color:"rgb(0,0,0)",points:[{time: 1542636683829, x: 170.5, y: 91.5},{time: 1542636683829, x: 120.5, y: 91.5}]}]
        })
     }
     componentDidMount(){
           
        var signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
            backgroundColor: 'rgba(255, 255, 255, 0)',
            penColor: 'rgb(0, 0, 0)'
          });
        
         
          
        


          var cancelButton = document.getElementById('clear');
          
          cancelButton.addEventListener('click', function (event) {
            signaturePad.clear();
          });

          function resizeCanvas() {
            var ratio =  Math.max(window.devicePixelRatio || 1, 1);
            document.getElementById('signature-pad').width = document.getElementById('signature-pad').offsetWidth * ratio;
            document.getElementById('signature-pad').height =document.getElementById('signature-pad').offsetHeight * ratio;
            document.getElementById('signature-pad').getContext("2d").scale(ratio, ratio);
            signaturePad.clear(); // otherwise isEmpty() might return incorrect value
        }
        
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        
   

        this.setState({signaturePad:signaturePad});
        
        }

     render(){
        
         
        
        return  (
            <div class="Signpad">
              <h3 className="text-white mt-2 ml-3 text-warning">Please,Sign below </h3>
              <canvas id="signature-pad"   class="signature-pad border border-dark shadow mt-3 mb-3"  onMouseMove ={this.change} onTouchMove={this.change} >
              </canvas>
              <div class="btn-group w-80 mt-3 mr-3 float-right" role="group" aria-label="Basic example">
                <button id="clear" type="button" class="btn btn-light text-danger">Clear</button>
                <button id="done" type="button" class="btn btn-dark text-success"onClick={this.props.done}>Done</button>
            </div>
         

            </div>
        )
     }
 
}

export default Sign_Print;