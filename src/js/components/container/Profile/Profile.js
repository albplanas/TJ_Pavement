import React,{Component} from "react";
import { connect } from 'react-redux';

import HomeProfile from "./HomeProfile";
import ReportForm from  "./reportForm";
import OldProjectReport from  "./OldProjectReport";

import * as actionTypes from './../../../../store/actions';

const IdLabor=[[1,"Cement Mason / Concrete Finisher"],[3,"Foreman"],[4,"OPERATOR-Asphalt Paver"],[5,"Asphalt Shoveler Non"],[6,"Backhoe"],[7,"Bobcat"],[8,"Bulldozer"],[9,"Concrete Finisher"],[10,"Concrete Laborer"],[11,"Concrete Truck"],[12,"Dump Truck"],[13,"Excavator"],[14,"Grader"],[15,"Labor"],[16,"Loader"],[17,"Lowboy"],[18,"Mechanic"],[19,"Milling"],[20,"Pipe"],[21,"Roll"],[23,"Driver in JVA Truck"],[25,"Concret Labor NON REGULAR"],[26,"Grader Checker NON REGULAR"],[27,"Grader Checker Trainee"],[28,"Mason Trainee"],[29,"Traffic Control Specialist Trainee"],[30,"Labor NON REGULAR"],[31,"Erosion Control Specialist Trainee"],[32,"Pipe Labor NON REGULAR"],[33,"Asphalt Shoveler NON REGULAR"],[35,"Office staff"],[37,"Bulldozer NON REGULAR"],[38,"Concrete Finisher NON REGULAR"],[39,"Backhoe NON REGULAR"],[41,"Bobcat NON REGULAR"],[42,"Grader NON REGULAR"],[43,"Loader NON REGULAR"],[44,"Milling NON REGULAR"],[45,"Asphalt Paver NON REGULAR"],[46,"Roll NON REGULAR"],[47,"Off Holiday Salary"],[48,"Off Holiday Wages"],[49,"Off Sick Day Salary"],[50,"Off Sick Day Wages"],[51,"Off Vacation Salary"],[52,"Off Vacation Wages"],[53,"Owner"],[54,"Dump Truck NON REGULAR"],[55,"Lowboy Trcuk NON Regular"],[56,"Salary"],[58,"Asphalt Paver"],[60,"Office Salary - Concrete"],[64,"Backhoe Loader-NON REGULAR"],[65,"OPERATOR-Asphalt Paver"],[66,"OPERATOR-Backhoe Loader"],[72,"Asphalt Shoveler"],[73,"Operator - Asphalt Paver"],[85,"Truck Driver - Dump"],[87,"Laborer - Common / General"],[88,"Laborer / Common Gen"],[89,"Laborer Pipe Layers"],[90,"Laborer - Power Tool Operator"],[91,"Operator - Bachoe / Excavator"],[92,"Operator - Bachoe Loader"],[93,"Operator - Bobcat / Skid Loader"],[94,"Operator Bulldozer"],[95,"Operator - Concrete Finishing Machine"],[96,"Operator Excavator"],[97,"Operator - Greader / Blade"],[99,"Operator - Roller"],[100,"Operator  Roller"],[101,"Truck Driver Dump"],[103,"Operator - Loader"],[104,"Operator -Milling Machine"],[105,"Operator - Paver"],[106,"Flagman"],[107,"Laborer Concrete Finish"],[108,"Truck Drivers Distributor"],[109,"Truck Drivers Vactor Truck"]]
const IdEmployee=[["Ivan Ameijide",5],["Heraldo Baragana",11],["Lian Cardenas Galindo",14],["Juan Cartaya Pedroso",17],["Victor Angel Chirinos",18],["Juan Jose Consuegra Caballero",19],["Fidel Cortina",22],["Jorge Luis Corzo Albarado",23],["Ramon Crespo",24],["Jose L. Cruz",25],["Jose Antonio Cueli",26],["Francisco Cuenca",27],["Carlos Delgado",28],["Celestino C. Diaz",29],["Asdrubal Falcon",33],["Wilfredo Galindo",37],["Yaidel Garcia Monzon",38],["Yunier Garcia",39],["Romelio Gonzalez Lima",41],["Jesus V. Gonzalez",44],["Diego Granada",46],["Luis Hernandez",48],["Savanes Joseph",50],["Alfredo Julia",51],["Francisco Leal Munoz",52],["Yuniesky Liriano Gonzalez",54],["Armando Llorca",56],["Miguel Manzanet",61],["Johnatan Mesa",67],["Samuel Mojica",69],["Edison S. Montenegro",70],["Arthur Davis Moore",71],["Carlos A. Morales",72],["Orlenis Mosquera",73],["Manuel Moya",74],["Francisco Olivera",78],["Pablo O. Orta",80],["David Ortega",81],["Juan P. Ortega",82],["Luis E. Palacio",83],["Mikel Perez Mayo",87],["Jorge L. Perez",88],["Jose Perez",89],["Manuel Rego",91],["Jesus E. Reyes",92],["Luis Giraldo Rodriguez Botello",93],["Juan Antonio Rodriguez",95],["Berto Ramon Rojas Gonzalez",96],["Adrian V. Saavedra",98],["Dilver Salazar",99],["Hanoi Sanchez",101],["Jorge R. Santana",103],["Darian Sierra",104],["Pablo Manuel Torres",107],["Caridad Trujillo",108],["Orlando Valdes Pando",109],["Alberto Valdes",110],["Andres Villavicencio",113],["Lazaro Estrada",187],["Calixto Zelaya",197],["Christian Lizardo",198],["Julius Diaz",201],["Julio C Santiesteban",204],["Jorge Arrate",226],["Alahin Hernandez",238],["Joel Martinez",254],["Pedro Saldana",255],["Ernesto Gonzalez",258],["Advian Rodriguez",262],["Bernabe Antonio Aguirre",265],["Luis A Llopiz",270],["Fidel Hernandez",274],["Arnaldo Gonzalez",275],["Jose Jimenez",277],["Pablo A Torres",278],["Denis Castellanos",279],["Richard Do Vale",280],["Randolf Betancourt",283],["Alfredo Munoz",284],["Angel M Cruz",298],["Alexander Luis",301],["Ruben Hernandez",308],["Ariel Duran",310],["Yaniel Peguero",311],["Omar A Ruiz",316],["Marcelino E Hernandez",319],["Giraldo Chavez",329],["David Delgado",330],["Ismael Castillo",339],["Roberto  Mejia",341],["Michel Fernandez",348],["Pedro E Novo",350],["Juan Rodriguez",351],["Yosniel Prado",357],["Pedro Lago",369],["Nicolas Pierrot",371],["Jose Carlos Consuegra",372],["Damian Oliva",373],["Yarine Machado",375],["Orlando Sanfeliz",382],["Eddy Batista",384],["Peter Gracia",386],["Klayther Marrero",388],["Luis Velez",389],["Zoilo  Pacheco",390],["Yendy Estevez",392],["Rafael Garofalo",396],["Jorge Garcia",404],["Leonardo Miranda",405],["Elieser Cordovez",407],["Gonzalo Estrada",410]];
const IdCategories=[["Asphalt Paver",1],["Cement Mason / Concrete Finisher",2],["Employee - Salary",4],["Employee Hourly Wage",5],["Employee Hourly Wage - Other Company",6],["LABORER - Concrete Laborer",7],["LABORER - Grader Checker",8],["LABORER - Grader Checker Trainee",9],["LABORER - Mason Trainee",10],["LABORER - Traffic control Specialist Trainee",11],["Labor NON REGULAR",12],["LABORER - Erosion Control Specialist Trainee",13],["Pipe Labor NON REGEULAR",14],["Asphalt Shoveler NON REGULAR",15],["Office - Salary",16],["Office Salary - Concrete",18],["Bulldozer NON REGULAR",19],["Concrete Finisher NON REGULAR",20],["OPERATOR - Backhoe",21],["Bobcat NON REGULAR",22],["Grader NON REGULAR",24],["Loader NON REGULAR",25],["Milling NON REGEULAR",26],["OPERATOR–Paver",27],["Roller NON REGULAR",28],["Paid Time Off - Holiday Salary",29],["Paid Time Off - Holiday Wages",30],["Paid Time Off - Sick Salary",31],["Paid Time Off - Sick Wages",32],["Paid Time Off - Vacation Salary",33],["Paid Time Off - Vacation Wages",34],["Shareholder Compensation–Salary",35],["Dump Truck NON Regular",36],["TRUCK DRIVER – Lowboy",37],["Yard - Salary",38],["OPERATOR-Backhoe Loader",42],["Asphalt Shoveler",44],["Operator - Asphalt Paver",45],["Truck Driver - Dump",46],["Laborer - Common / General",47],["Labores - Power Tool Operator",48],["Laborer / Common Gen",49],["Laborer Pipe Layers",50],["Operator - Bachoe Loader",51],["Operator - Bulldozer",52],["Operator - Excavator",53],["Operator - Roller",54],["Operator - Bachoe / Excavator",55],["Operator - Bobcat / Skid Loader",56],["Operator - Concrete Finishing Machine",57],["Operator - Greader / Blade",58],["Operator  Roller",60],["Truck Driver Dump",62],["Operator - Loader",63],["Operator - Milling Machine",64],["Operator - Paver",65],["Flagman",66],["Laborer Concrete Finish",67],["Truck Drivers Distributor",68],["Truck Drivers Vactor Truck",69]];
const ProjectList=[["20150195",8],["E6J13",9],["M2015-022",18],["E6K59",23],["E6K96",29],["B30836",31],["2017-035.0",33],["T201617013",35],["T201617012",36],["033-17",37],["B30966",38],["10-18",40],["M0130",41],["2017-0350B",42],["T6448",43]]                



class Profile extends Component {


  componentWillMount(){

    console.log(window.localStorage)
    var online = navigator.onLine


    if (online){

      console.log('online')
      //fetch data
            //I need to change that because this is completed with the call request
                        var TjStorage={
                          IdEmployee:IdEmployee,
                          Projects:ProjectList,
                          IdLabor:IdLabor,
                          IdCategories:IdCategories,
                          LastProjects:[]
                  }

                  var StringTjStorage= JSON.stringify(TjStorage);
               
                window.localStorage.setItem('TjStorage', StringTjStorage);


                //Redux Storage
                this.props.onStartUpdte(TjStorage)
                  
    }
    else{

              if(window.localStorage.length===0){
                  var TjStorage={
                        Employees:IdEmployee,
                        Projects:ProjectList,
                        Labor:IdLabor,
                        Categories:IdCategories,
                        LastProjects:[]
                        }
                var StringTjStorage= JSON.stringify(TjStorage);
                window.localStorage.setItem('TjStorage', TjStorage);
                this.props.onStartUpdte(TjStorage)
              }
              else{

                var value= window.localStorage.getItem('TjStorage');
                var DeStringValue = JSON.parse(value);
                
                console.log(DeStringValue)


              }
    }


  }

    render() { 
        
     

      return (
        this.props.getReport ===true ?     this.props.newReport===true ? <ReportForm/> : <OldProjectReport /> : <HomeProfile/>)}
  }
  
  const mapStateToProps = state => {
    return {
        getReport :state.globalState.getReport,
        newReport :state.globalState.newReport,
        date      :state.globalState.dateSelect
    };
  };
 const mapDispatchToProps = dispatch => {
    return {
      onStartUpdte: (value) => dispatch({type: actionTypes.STARTUPDATE , value:value}), 
    };
};
  export default connect(mapStateToProps,mapDispatchToProps )(Profile);