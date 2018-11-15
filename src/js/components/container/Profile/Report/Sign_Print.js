import React,{Component} from "react";
import SignaturePad from "signature_pad"





class Sign_Print extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
        this.Hover=this.Hover.bind(this)
        
    }

    Hover(e){
        console.log(e.clientX)
        
        
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

        }

     render(){

        return (
            <div>
              
              <canvas id="signature-pad"   class="signature-pad border border-dark shadow"  >
              </canvas>
              <div class="btn-group ml-3" role="group" aria-label="Basic example">
                <button id="clear" type="button" class="btn btn-secondary text-warning">Clear</button>
               
            </div>
         

            </div>
        )
     }
 
}

export default Sign_Print;