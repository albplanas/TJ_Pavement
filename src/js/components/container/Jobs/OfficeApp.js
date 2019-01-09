import React,{Component} from "react";
import Sign_Print from "../Helper/Signature";



class OfficeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {

            education:[{id:Math.random()*1000000,school:"",year:"",degree:""}],
            employment:[{id:Math.random()*1000000,from:"",to:"",company:"",address:"",telephone:"",supervisor:"",position:"",salary:"",leave:""}]

        }
        this.Add=this.Add.bind(this);
        this.Delete=this.Delete.bind(this);
        this.onChange=this.onChange.bind(this);
   
    }


    Add(e){
        e.preventDefault();  
        var id = e.target.id !==""?e.target.id: e.target.parentNode.id!==""?e.target.parentNode.id:e.target.parentNode.parentNode.id;
        console.log("e,e.target")
     if(id==="education"){
      this.setState({
          [id]:this.state[id].concat({id:Math.random()*1000000,school:"",year:"",degree:""})
           })
     }  
     else if(id==="employment"){
        this.setState({
            [id]:this.state[id].concat({id:Math.random()*1000000,from:"",to:"",company:"",address:"",telephone:"",supervisor:"",position:"",salary:"",leave:""})
             })
        
     }

  }

  Delete(e){
      e.preventDefault();  
    
    var target = e.target.id !==""?e.target.id: e.target.parentNode.id!==""?e.target.parentNode.id:e.target.parentNode.parentNode.id;
    var name=target.split("_")[0]
    var id  =target.split("_")[1]
    



    this.setState({
            [name]:this.state[name].filter(elem=>elem.id+""!==id+'')
     })
}

onChange(e){
  e.preventDefault(); 

  var target = e.target.id !==""?e.target.id: e.target.parentNode.id!==""?e.target.parentNode.id:e.target.parentNode.parentNode.id;
  var name=target.split("_")[0]
  var ctg =target.split("_")[1]
  var id  =target.split("_")[2]

  var newest=this.state[name].map(elem=>{
                              var Obj = Object.assign({},elem);
                              Obj[ctg]= elem.id+""===id+""? document.getElementById(target).value : Obj[ctg]
                              return Obj
                      })
  console.log("newest",newest);    

  this.setState({
      [name]:newest
  })
  
}



    render(){
        return (
            <div class="container">

            <Education body={this.state.education} add={this.Add} delete={this.Delete} change={this.onChange}/>
            <EmploymentHistory body={this.state.employment} delete={this.Delete} add={this.Add}/> 



        </div>    
        )
    }
    
}


function Education(props){

    console.log("props.body",props.body)
    var RowsBody=props.body.map(elem=>{

        return (
            <tr>

                            <th id={"education_"+elem.id} scope="row" onClick={props.delete}><i class="fas fa-trash-alt text-danger"></i></th>
                            <td id={"education_school_"+elem.id}>
                                     <input id={"education_school_"+elem.id+"_"} type="text" name="school" class="form-control " value={elem.school} placeholder="School's name" onChange={props.change}/>
                            </td>
                            <td id={"education_year_"+elem.id}>
                                     <input id={"education_year_"+elem.id+"_"} type="number" name="years" class="form-control " value={elem.year}  placeholder="years completed" onChange={props.change}/>
                            </td>
                            <td id={"education_degree_"+elem.id}> 
                                <select id={"education_degree_"+elem.id+"_"} class="custom-select" value={elem.degree} onChange={props.change} >
                                    <option value="" >              Select</option>
                                    <option value="PHD">              PHD</option>
                                    <option value="Master">           Master</option>
                                    <option value="Bachelor">        Bachelor</option>
                                    <option value="Associate">        Associate</option>
                                    <option value="Height School">    Height School</option>
                                    <option value="Middle School">    Middle School</option>
                                    <option value="Elementary School">Elementary School</option>
                                </select> 
                            </td>

                           
             </tr>
        )
    })
    return (
        <div>
            <label className="text-info mt-3 mb-2" for="DrEx">Driving Experience</label>
                <table id ="DrEx"class="table table-hover table-striped mb-3">
                        <thead>
                            <tr>
                            <th scope="col" id="education" onClick={props.add}><i class="fas fa-plus-circle fa-lg fa-spin text-primary "></i></th>
                            <th scope="col">Learning Center</th>
                            <th scope="col"> Years Completed</th>
                            <th scope="col">Degree</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                           {RowsBody}
                        </tbody>
                        </table>
    </div> 
     )

}

function EmploymentHistory(props){

    var EmployeedCards=props.body.map(elem=>{
        return (
            <div class="card border shadow border-dark mt-1 mb-3">

                <div class="card-header ">
                 {elem.company}
                <button id={"employment_"+elem.id} type="button" class="close text-danger" aria-label="Close" onClick={props.delete}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="card-body">
                    <div className="container">

                    <div class="row mb-3">
                                <div class="col-md-6">
                                        <label className="text-info" for="company">Company</label>
                                        <input type="text" value={elem.company} class="form-control" name="company" required minlength="4" maxlength="15" />
                                </div>
                                <div class="col-md-6">
                                        <label className="text-info " for="addresscompany">Address</label>
                                        <input type="text" value={elem.address} name="addresscompany" class="form-control" required minlength="4" maxlength="20" />
                                </div>
                        </div>

                    <div class="row mb-3">
                                <div class="col-md-6">
                                        <label for="from" className="text-info">Start month:</label>
                                         <input type="month"  class="form-control" name="from"  min="1960-03" value={elem.from}/>
                                </div>
                                <div class="col-md-6">
                                        <label for="to" className="text-info">End month:</label>
                                         <input type="month" class="form-control" name="to"  min="1960-03" value={elem.to}/>
                                </div>
                    </div> 

                        <div class="row mb-3">
                                    <div class="col-md-6">
                                            <label for="supervisor" className="text-info">Supervisor</label>
                                            <input type="text" value={elem.supervisor} class="form-control" name="supervisor" required minlength="4" maxlength="15" />
                                    </div>
                                    <div class="col-md-6">
                                            <label for="telephone" className="text-info">Company's Telephone:</label>
                                            <input type="tel" class="form-control" name="telephone" value={elem.telephone} />
                                    </div>
                        </div> 


                        <div class="row mb-3">
                                    <div class="col-md-4">
                                            <label for="position" className="text-info">Last Position</label>
                                            <input type="text" value={elem.position} class="form-control" name="position" required minlength="4" maxlength="15" />
                                    </div>
                                    <div class="col-md-3">
                                            <label for="salary" className="text-info">Salary per week</label>
                                            <input type="number" class="form-control" name="salary" value={elem.salary} />
                                    </div>
                                    <div class="col-md-5">
                                            <label for="leave" className="text-info">Reason for leaving:</label>
                                            <textarea  class="form-control" name="leave" value={elem.leave} />
                                    </div>
                        </div>          
                    </div>
                </div>
            </div>
        )
    })
    return (
            <div >
                    <h6 className="text-info mt-5">Employment History</h6>
                    <hr/>
                    <div class="input-group mt-3 mb-3 w-50  ">
                         <input type="text" class="form-control" placeholder="Write the employment's name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                         <div class="input-group-append">
                                <button id="employment" class="btn btn-primary " type="button" onClick={props.add}><i class="fas fa-plus "></i></button>
                         </div>
                    </div>
                    <div className="container">
                         {EmployeedCards}
                    </div>
                    
            </div>
        )        
}

export default OfficeApp;