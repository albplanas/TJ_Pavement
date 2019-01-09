import React,{Component} from "react";



class DriverApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
              experience:[{id:Math.random()*1000000,class:"",type:"",from:"",to:"",miles:""}],
              accident:[{id:Math.random()*1000000,date:"",type:"",fatalities:"",injuries:"",spills:""}],
              violations:[]
        }

        this.Add=this.Add.bind(this);
        this.Delete=this.Delete.bind(this);
        this.onChange=this.onChange.bind(this);
    }

    Add(e){
          e.preventDefault();  
          var id = e.target.id !==""?e.target.id: e.target.parentNode.id!==""?e.target.parentNode.id:e.target.parentNode.parentNode.id;
          console.log(id)
       if(id==="experience"){
        this.setState({
            [id]:this.state[id].concat({id:Math.random()*1000000,class:"",type:"",from:"",to:"",miles:""})
             })
       }  
       else if(id==="accident"){
        this.setState({
            [id]:this.state[id].concat({id:Math.random()*1000000,date:"",type:"",fatalities:"",injuries:"",spills:""})
             })
       }
    }

    Delete(e){
        e.preventDefault();  
      
      var target = e.target.id !==""?e.target.id: e.target.parentNode.id!==""?e.target.parentNode.id:e.target.parentNode.parentNode.id;
      var name=target.split("_")[0]
      var id  =target.split("_")[1]
      
      console.log(name,id)
      
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
    console.log(name,ctg,id);
    console.log("named",this.state[name]);  
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
            <DriverExperience body={this.state.experience} add={this.Add} delete={this.Delete} change={this.onChange}/>
            <DriverAccident   body={this.state.accident} add={this.Add} delete={this.Delete} change={this.onChange}/>
            <ParkingViolations   body={this.state.accident} add={this.Add} delete={this.Delete} change={this.onChange}/>
            <div class="row">

                        <div class="col-md-6">
                                <label className="text-info mt-3" for="deniedQuestion">Have you ever been denied a license, permit or privilge to operate a mothor?</label>
                                <div class="custom-control custom-radio" id="deniedQuestion">
                                    <input type="radio" id="denied1" name="denied" class="custom-control-input"/>
                                    <label class="custom-control-label" for="denied1">Yes</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                    <input type="radio" id="denied2" name="denied" class="custom-control-input"/>
                                    <label class="custom-control-label" for="denied2">No</label>
                                </div>  
                        </div>
                        <div class="col-md-6">
                                <label className="text-info mt-3" for="deniedStatus">If yes ,explain below.</label>
                                <textarea class="form-control" id="deniedStatus" rows="3"></textarea>
                        </div>

                        
            </div>
            <div class="row">

                        <div class="col-md-6">
                                <label className="text-info mt-3" for="revockedQuestion">Has any license, permit or privilge ever been suspended or revocked ?</label>
                                <div class="custom-control custom-radio" id="revockedQuestion">
                                    <input type="radio" id="revocked1" name="revocked" class="custom-control-input"/>
                                    <label class="custom-control-label" for="revocked1">Yes</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                    <input type="radio" id="revocked2" name="revocked" class="custom-control-input"/>
                                    <label class="custom-control-label" for="revocked2">No</label>
                                </div>  
                        </div>
                        <div class="col-md-6">
                                <label className="text-info mt-3" for="revockedStatus">If yes ,explain below.</label>
                                <textarea class="form-control" id="revockedStatus" rows="3"></textarea>
                        </div>


             </div>
        </div>    
        )
    }
    
}

function  ParkingViolations(props){

   

    var RowsBody=props.body.map(elem=>{

        return (
            <tr>
                            <th id={"accident_"+elem.id} scope="row" onClick={props.delete}><i class="fas fa-trash-alt text-danger"></i></th>
                            <td id={"accident_date_"+elem.id}> 
                                    <input class="form-control" type="date"  min="1980-01-01" max="2030-01-01" id={"accident_date_"+elem.id+"_"}/> 
                            </td>
                            <td id={"accident_violations_"+elem.id}>
                                    <textarea class="form-control" id={"accident_violations_"+elem.id+"_"} aria-label="With textarea" placeholder="Violations" onChange={props.change}/>
                                    
                            </td>
                            <td id={"accident_type_"+elem.id}>
                                    <select id={"accident_type_"+elem.id+"_"} class="custom-select " value={elem.type} onChange={props.change}>
                                        <option value="" >                          Select</option>
                                        <option value="Straight truck">             FL</option>
                                        <option value="Tractor and semitrailer">    TX</option>
                                        <option value="Tractor and two trailers">   MN</option>
                                        <option value="Other">                      NY</option>
                                    </select>
                            </td>
                           
                            <td id={"accident_spills_"+elem.id}>


                            <select id={"accident_type_"+elem.id+"_"} class="custom-select " value={elem.type} onChange={props.change}>
                                        <option value="" >                          Select</option>
                                        <option value="Straight truck">             Forfeited</option>
                                        <option value="Tractor and semitrailer">    Collateral</option>
                                        <option value="Tractor and two trailers">   Points</option>
                                    </select>
                            
                                              
                            </td>
             </tr>
        )
    })
    return (
        <div>
            <label className="text-info mt-3 mb-2" for="DrEx">Traffic convictions and forfeitures for the pats 3 years</label>
                <table id ="DrEx"class="table table-hover table-striped mb-3">
                        <thead>
                            <tr>
                            <th scope="col" id="accident" onClick={props.add}><i class="fas fa-plus-circle fa-lg fa-spin text-primary "></i></th>
                            <th scope="col">Date</th>
                            <th scope="col"> Violation</th>
                            <th scope="col">Location</th>
                            <th scope="col">Penaliry</th>
                            
                            
                            </tr>
                        </thead>
                        <tbody>
                           {RowsBody}
                        </tbody>
                        </table>
    </div>        
    )
}



function  DriverAccident(props){

    console.log(props)

    var RowsBody=props.body.map(elem=>{

        return (
            <tr>
                            <th id={"accident_"+elem.id} scope="row" onClick={props.delete}><i class="fas fa-trash-alt text-danger"></i></th>
                            <td id={"accident_date_"+elem.id}> 
                                    <input class="form-control" type="date"  min="1980-01-01" max="2030-01-01" id={"accident_date_"+elem.id+"_"}/> 
                            </td>
                            <td id={"accident_type_"+elem.id}>
                                    <select id={"accident_type_"+elem.id+"_"} class="custom-select " value={elem.type} onChange={props.change}>
                                        <option value="" >                          Select</option>
                                        <option value="Straight truck">             Head-on</option>
                                        <option value="Tractor and semitrailer">    Rear-end</option>
                                        <option value="Tractor and two trailers">   Up Set</option>
                                        <option value="Other">                      Other</option>
                                    </select>
                            </td>
                           

                            <td id={"accident_fatalities_"+elem.id}>
                                    < input id={"accident_fatalities_"+elem.id+"_"} type="number"  class="form-control " placeholder="Number of fatalities"onChange={props.change}/>
                            </td>
                            <td id={"accident_injuries_"+elem.id}>
                                    <input id={"accident_miles_"+elem.id+"_"} type="number"  class="form-control " placeholder="Number of injuries" onChange={props.change}/>
                            </td>
                            <td id={"accident_spills_"+elem.id}>
                            <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id={"spills_1"+elem.id} name={"spills_1"+elem.id} class="custom-control-input"/>
                                                    <label class="custom-control-label" for={"spills_1"+elem.id}>Yes</label>
                                            </div>
                                            <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id={"spills_2"+elem.id} name={"spills_1"+elem.id} class="custom-control-input"/>
                                                    <label class="custom-control-label" for={"spills_2"+elem.id}>No</label>
                                            </div>
                            </td>
             </tr>
        )
    })
    return (
        <div>
            <label className="text-info mt-3 mb-2" for="DrEx">Accident Record for past 3 years or more</label>
                <table id ="DrEx"class="table table-hover table-striped mb-3">
                        <thead>
                            <tr>
                            <th scope="col" id="accident" onClick={props.add}><i class="fas fa-plus-circle fa-lg fa-spin text-primary "></i></th>
                            <th scope="col">Date</th>
                            <th scope="col"> Type</th>
                            <th scope="col"> Fatalities</th>
                            <th scope="col">Injuries</th>
                            <th scope="col">Chemical Spills</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                           {RowsBody}
                        </tbody>
                        </table>
    </div>        
    )
}

function DriverExperience(props){



    var RowsBody=props.body.map(elem=>{

        return (
            <tr>
                            <th id={"experience_"+elem.id} scope="row" onClick={props.delete}><i class="fas fa-trash-alt text-danger"></i></th>
                            <td id={"experience_class_"+elem.id}>
                                    <select id={"experience_class_"+elem.id+"_"} class="custom-select " value={elem.class} onChange={props.change}>
                                        <option value="" >                          Select</option>
                                        <option value="Straight truck">             Straight truck</option>
                                        <option value="Tractor and semitrailer">    Tractor and semitrailer</option>
                                        <option value="Tractor and two trailers">   Tractor and two trailers</option>
                                        <option value="Other">                      Other</option>
                                    </select>
                            </td>
                            <td id={"experience_type_"+elem.id}> 
                                <select id={"experience_type_"+elem.id+"_"} class="custom-select" value={elem.type} onChange={props.change} >
                                    <option value="" >              Select</option>
                                    <option value="Tank">              Tank</option>
                                    <option value="Van">              Van</option>
                                    <option value="Flat">              Flat</option>
                                    <option value="Other">              Other</option>
                                </select> 
                            </td>

                            <td id={"experience_from_"+elem.id}>
                                    <input id={"experience_from_"+elem.id+"_"} type="month" class="form-control"  min="1970-01" max="2025-01" value={elem.from===""? "2010-01":elem.from} onChange={props.change}/>
                            </td>
                            <td id={"experience_to_"+elem.id}>
                                    <input id={"experience_to_"+elem.id+"_"} type="month" class="form-control"   min={elem.from===""? "2010-01":elem.from} max="2030-01" value={elem.to===""? "2010-01":elem.to}onChange={props.change}/>
                            </td>
                            <td id={"experience_miles_"+elem.id}>
                                     <input id={"experience_miles_"+elem.id+"_"} type="number"  class="form-control " placeholder="Miles"onChange={props.change}/>
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
                            <th scope="col" id="experience" onClick={props.add}><i class="fas fa-plus-circle fa-lg fa-spin text-primary "></i></th>
                            <th scope="col"> Class</th>
                            <th scope="col"> Type</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Miles</th>
                            </tr>
                        </thead>
                        <tbody>
                           {RowsBody}
                        </tbody>
                        </table>
    </div>        
    )
}

export default DriverApp;