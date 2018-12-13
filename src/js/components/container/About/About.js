import React,{Component} from "react";


import about1 from './../../../../img/about/1.jpg';
import about2 from './../../../../img/about/2.jpg';
import about3 from './../../../../img/about/3.jpg';
import about4 from './../../../../img/about/4.jpg';


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter:0
    };

   
  }



  componentDidMount(){
          
    setInterval(()=>{ 
      var c=this.state.counter+1; 
      
      this.setState({
        counter:c
      })
    }, 3000);  
    
      
      
  }

  render(){

    return (
      <section id="about">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading text-uppercase">About</h2>
                <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <ul class="timeline">
                 <List inverted={false}   src={about1} head={"2009-2011"} subhead={"Our Humble Beginnings"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"}/>
                 <List inverted={true}src={about2} head={"March 2011"} subhead={"An Agency is Born"}  text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"}/>
                 <List inverted={false}src={about3} head={"December 2012"} subhead={"Our Humble Beginnings"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"}/>
                 <List inverted={true}src={about4} head={"July 2014"} subhead={"Our Humble Beginnings"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!"}/>
                 
                <Apply num={this.state.counter}/>
                
                </ul>
              </div>
            </div>
          </div>
        </section>
      )

  }
            
          }
function Apply(props){
  
  return props.num%2===0? ( 
  <li class="timeline-inverted">
        <div class="timeline-image bg-warning text-danger">
          <h4>Be Part
            <br/>Of Our
            <br/>Story!</h4>
        </div>
    </li>
    ):(
          <li class="timeline-inverted">
              <div class="timeline-image bg-danger">
                <h4>Apply
                  <br/>Here
                  <br/>Now!</h4>
              </div>
        </li>
    )
 

}
function List(props){
    return (
        <li class={props.inverted===false? "":"timeline-inverted" }>
        <div class="timeline-image">
          <img class="rounded-circle img-fluid" src={props.src}  alt=""/>
        </div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <h4>{props.head}</h4>
            <h4 class="subheading">{props.subhead}</h4>
          </div>
          <div class="timeline-body">
            <p class="text-muted">{props.text}</p>
          </div>
        </div>
      </li>
    )
}


  export default About;

 