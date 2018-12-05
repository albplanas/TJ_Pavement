import React,{Component} from "react";
import { connect } from 'react-redux';
import * as actionTypes from './../../../../store/actions';
import OldReport from  "./Report/OldReport";


class OldProjectReport extends Component {
  constructor(props) {
    super(props);

    this.state={
          ProjectsName:'',
          selectReport:''
    }
    this.back=this.back.bind(this)
    this.SelectOldProject=this.SelectOldProject.bind(this);
    this.backBack=this.backBack.bind(this)

    this.NameById=this.NameById.bind(this);
    this.categoriesById=this.categoriesById.bind(this);
 }


        //Helper function
    
   NameById(id,arr) {
                    for (var j=0;j<arr.length;j++){
                        if(arr[j][1].toString()===id.toString()){
                            return arr[j][0] 
                        }
                                    
                    }
                    return undefined
           }
    categoriesById(idC,idL) {
       
        if(idC===null || idC==='null'){
          
            for (var j=0;j<this.props.IdLabor.length;j++){
                if(this.props.IdLabor[j][0].toString()===idL.toString()){
                    return this.props.IdLabor[j][1] 
                }
                            
            }
            return "undefined"  
        }
        else{
            for (var j=0;j<this.props.IdCategories.length;j++){
                if(this.props.IdCategories[j][1].toString()===idC.toString()){
                    return this.props.IdCategories[j][0] 
                }
                            
            }
            return "undefined"
        }
          
    }

 SelectOldProject(e){
     var id= e.target.id.slice(1,e.target.id.length)
     this.setState({selectReport:id})
 }

    back(){
        this.props.onSelectReport(false,false,this.props.Supervisor,this.props.date)
    }
    backBack(){
        this.setState({selectReport:''})
    }
  componentWillMount() {
   
    this.setState({ProjectsName:this.props.ProjectsName})

  }



  //Update the list
 componentWillReceiveProps(nextProps) {
               

    }
    render() { 
        var dayNow=Date.now();
        var dayBefore=new Date(this.props.date);
        var dayBefore=Date.parse(dayBefore);
       
       var dayAgo=parseInt((dayNow-dayBefore)/86400000)
      
       var ProjectList = this.state.ProjectsName.map(elem=>{
        
           return (
                      <div id={"f"+elem.id} onClick={this.SelectOldProject}>
                                    <a id={"s"+elem.id} href="#" class="list-group-item list-group-item-action flex-column align-items-start mb-3 bg-dark shadow">
                                        <div id={"t"+elem.id} class="d-flex w-100 justify-content-between">
                                        <h5 id={"e"+elem.id} class="mb-1 text-primary">{elem.name}</h5>
                                        <small id={"n"+elem.id} class="text-primary">{dayAgo===1? dayAgo+" day ago": dayAgo+" days ago"} </small>
                                        </div>
                                        <p id={"d"+elem.id} class="mb-1 text-white">Some comentaries over there ...</p>
                                    </a>
                                    </div>
           )
       })
/************************************** */

/******************************************** */
       if(this.state.selectReport!==""){
          
           var last = new Date(this.props.date);
           var Last=last.toISOString().slice(0,10);
           var reportName=this.state.ProjectsName.filter(elem => this.state.selectReport.toString()===elem.id.toString())
            
              var finalArray = this.props.OldReportsList.filter(elem=>elem[0].toString()===Last.toString() && elem[4].toString()===this.state.selectReport.toString())
              var conversionArray =[];
            

              for (var i=0;i<finalArray.length;i++){

                        var index =-1;
                        var name=this.NameById(finalArray[i][1],this.props.IdEmployee);
                        var ctg=this.categoriesById(finalArray[i][3],finalArray[i][2]);
                        var hr=finalArray[i][5] ;

                        
                            for (var j=0;j<conversionArray.length;j++){
                                if(conversionArray[j].name===name){
                                   index=j;
                                   break;
                                }
                                            
                            }


                 //Check id Employee
                index!==-1? conversionArray[index].Hours= conversionArray[index].Hours.concat({categories:ctg, hour:hr }): conversionArray.push({name:name, Hours:[{categories:ctg, hour:hr }]})
                 
              }
              
              
       }

      return this.state.selectReport===""? ( <div className='container mt-5'>
                                                    <a onClick={this.back}><i class="fas fa-arrow-left text-danger" style={{fontSize:"20px",position:"absolute", top:"50px"}}></i></a>
                                                    <h5 className="text-center">Report by Project's title</h5>
                                                    <hr/>
                                                  <div class="list-group">
                                                    {ProjectList}
                                                  </div>
                                            </div>) :
                                           <OldReport info ={conversionArray} cancel={this.backBack} date={this.props.date} project={reportName[0].name}/>
    }
  }
  
  const mapStateToProps = state => {
    return {
        ProjectsName:state.globalState.Project,
        date:state.globalState.dateSelect,
        Supervisor:state.globalState.Supervisor,
        OldReportsList:state.globalState.OldReportsList,
        IdCategories:state.globalState.IdCategories,
        IdEmployee:state.globalState.IdEmployee,
        IdLabor:state.globalState.IdLabor
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      onSelectReport: (value, newValue,name,date) => dispatch({type: actionTypes.OPENREPORT , value:value, newValue:newValue,name:name,date:date}),
        onDeleteWorker: (list) => dispatch({type: actionTypes.DELETEWORKER , list:list}),
        onProjectSelect:(value) => dispatch({type: actionTypes.PROJECTSELECT , value:value})
    };
};

  export default connect(mapStateToProps,mapDispatchToProps)(OldProjectReport);