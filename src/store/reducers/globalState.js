import * as actionTypes from '../actions';



const OldReportsList =[["2018-11-19",5,0,15,36,8],["2018-11-19",11,0,3,42,0],["2018-11-19",18,0,15,36,8],["2018-11-19",19,null,6,41,4],["2018-11-19",19,null,7,41,4],["2018-11-19",22,0,56,41,0],["2018-11-19",24,0,3,38,0],["2018-11-19",27,0,8,36,8],["2018-11-19",28,null,7,36,5],["2018-11-19",28,0,15,36,3],["2018-11-19",33,null,87,42,4],["2018-11-19",33,null,107,42,5],["2018-11-19",37,0,72,41,10],["2018-11-19",39,0,20,36,8.5],["2018-11-19",41,null,107,42,5],["2018-11-19",41,0,87,42,4],["2018-11-19",50,0,72,41,10],["2018-11-19",51,null,107,8,3],["2018-11-19",51,0,87,8,5],["2018-11-19",52,0,87,42,8],["2018-11-19",54,0,56,36,0],["2018-11-19",61,null,93,42,6],["2018-11-19",61,0,91,42,2],["2018-11-19",67,0,15,36,8.5],["2018-11-19",69,0,19,41,10],["2018-11-19",70,0,6,36,8.5],["2018-11-19",71,0,7,41,10],["2018-11-19",72,0,15,41,8],["2018-11-19",73,0,91,38,10],["2018-11-19",74,null,94,42,2],["2018-11-19",74,0,91,42,6],["2018-11-19",78,0,19,41,10],["2018-11-19",80,0,56,41,0],["2018-11-19",81,0,21,36,8.5],["2018-11-19",82,0,6,36,9],["2018-11-19",83,0,15,36,8.5],["2018-11-19",87,0,21,41,10],["2018-11-19",88,0,3,42,0],["2018-11-19",89,0,3,8,0],["2018-11-19",91,null,89,38,5],["2018-11-19",91,0,87,38,5],["2018-11-19",99,null,99,42,2],["2018-11-19",99,0,87,42,6],["2018-11-19",103,0,15,36,8.5],["2018-11-19",104,0,7,41,10],["2018-11-19",107,0,103,42,8],["2018-11-19",109,0,87,42,8],["2018-11-19",110,null,91,8,4],["2018-11-19",110,0,87,8,4],["2018-11-19",187,null,107,8,3],["2018-11-19",187,0,87,8,5],["2018-11-19",197,0,72,41,10],["2018-11-19",201,0,16,36,0],["2018-11-19",204,0,72,41,10],["2018-11-19",238,null,107,42,5],["2018-11-19",238,0,87,42,4],["2018-11-19",255,0,19,41,10],["2018-11-19",274,0,20,36,8],["2018-11-19",278,null,103,8,4],["2018-11-19",278,0,87,8,4],["2018-11-19",279,null,107,42,5],["2018-11-19",279,0,87,42,4],["2018-11-19",283,0,16,36,8.5],["2018-11-19",284,0,87,8,8],["2018-11-19",301,0,56,36,0],["2018-11-19",308,null,107,42,5],["2018-11-19",308,0,87,42,4],["2018-11-19",339,0,20,36,8],["2018-11-19",341,null,89,38,5],["2018-11-19",341,0,87,38,5],["2018-11-19",348,null,87,8,8],["2018-11-19",350,0,6,41,8],["2018-11-19",351,0,8,36,8],["2018-11-19",357,null,93,38,5],["2018-11-19",357,0,87,38,5],["2018-11-19",373,0,15,36,8],["2018-11-19",375,0,15,41,8],["2018-11-19",380,null,3,42,0],["2018-11-19",404,0,16,36,9],["2018-11-19",407,null,107,8,3],["2018-11-19",407,0,87,8,5],["2018-11-19",410,null,107,8,3],["2018-11-19",410,0,87,8,5],["2018-11-20",5,0,15,36,8],["2018-11-20",11,0,3,42,0],["2018-11-20",18,0,15,36,8],["2018-11-20",19,null,6,41,4],["2018-11-20",19,null,7,41,4],["2018-11-20",22,0,56,41,0],["2018-11-20",24,0,3,38,0],["2018-11-20",27,0,8,36,8],["2018-11-20",28,null,6,36,6.5],["2018-11-20",28,0,15,36,2],["2018-11-20",29,0,21,41,9.5],["2018-11-20",33,null,87,42,4],["2018-11-20",33,null,107,42,4],["2018-11-20",37,0,72,41,9.5],["2018-11-20",39,0,20,36,8],["2018-11-20",41,null,107,42,4],["2018-11-20",41,0,87,42,4],["2018-11-20",50,0,72,41,9.5],["2018-11-20",52,null,99,42,1],["2018-11-20",52,0,87,42,7],["2018-11-20",54,0,56,36,0],["2018-11-20",61,null,103,42,4],["2018-11-20",61,0,93,42,4],["2018-11-20",67,null,15,36,3],["2018-11-20",67,0,15,36,8],["2018-11-20",69,0,7,41,9.5],["2018-11-20",70,0,6,36,8],["2018-11-20",71,0,7,41,6.5],["2018-11-20",72,0,15,41,8],["2018-11-20",73,0,91,38,9],["2018-11-20",74,null,97,42,4],["2018-11-20",74,0,91,42,4],["2018-11-20",78,0,58,41,9.5],["2018-11-20",80,0,56,41,0],["2018-11-20",81,null,6,36,3],["2018-11-20",81,0,6,36,8],["2018-11-20",82,0,6,36,11],["2018-11-20",83,0,15,36,8.5],["2018-11-20",87,0,72,41,9.5],["2018-11-20",88,0,3,42,0],["2018-11-20",89,0,3,8,0],["2018-11-20",91,null,89,38,5],["2018-11-20",91,0,87,38,4],["2018-11-20",99,null,99,42,1],["2018-11-20",99,0,87,42,7],["2018-11-20",103,null,20,36,4.5],["2018-11-20",103,0,15,36,4],["2018-11-20",104,0,7,41,9.5],["2018-11-20",107,0,103,42,8],["2018-11-20",109,null,99,42,1],["2018-11-20",109,0,87,42,7],["2018-11-20",110,null,91,8,5],["2018-11-20",110,0,87,8,3],["2018-11-20",197,0,72,41,9.5],["2018-11-20",201,0,16,36,8],["2018-11-20",204,0,72,41,8.5],["2018-11-20",238,null,107,42,4],["2018-11-20",238,0,87,42,4],["2018-11-20",255,0,58,41,9.5],["2018-11-20",274,0,20,36,11],["2018-11-20",278,null,93,8,4],["2018-11-20",278,0,87,8,4],["2018-11-20",279,null,107,42,4],["2018-11-20",279,0,87,42,4],["2018-11-20",283,null,15,36,3],["2018-11-20",283,0,16,36,8],["2018-11-20",301,0,56,36,0],["2018-11-20",308,null,107,42,4],["2018-11-20",308,0,87,42,4],["2018-11-20",339,0,20,36,11],["2018-11-20",341,null,89,38,5],["2018-11-20",341,0,87,38,4],["2018-11-20",348,null,87,8,8],["2018-11-20",350,null,6,41,4],["2018-11-20",350,0,7,41,4],["2018-11-20",351,0,8,36,9],["2018-11-20",357,null,93,38,2],["2018-11-20",357,0,87,38,7],["2018-11-20",373,0,15,36,8],["2018-11-20",375,0,15,41,8],["2018-11-20",380,null,3,42,0],["2018-11-20",404,0,16,36,11],["2018-11-21",19,null,6,41,4],["2018-11-21",19,null,7,41,4],["2018-11-21",22,0,56,41,0],["2018-11-21",24,0,3,38,0],["2018-11-21",27,0,8,36,8],["2018-11-21",28,null,8,36,5],["2018-11-21",28,null,14,36,1],["2018-11-21",28,0,15,36,2],["2018-11-21",29,0,21,41,8],["2018-11-21",37,0,72,41,8],["2018-11-21",39,0,16,36,8],["2018-11-21",50,0,72,41,8],["2018-11-21",52,null,99,42,2],["2018-11-21",52,0,87,42,6],["2018-11-21",54,0,56,36,0],["2018-11-21",61,null,93,42,1],["2018-11-21",61,0,91,42,7],["2018-11-21",67,0,15,36,5],["2018-11-21",69,0,7,41,8],["2018-11-21",70,0,6,36,8],["2018-11-21",71,0,7,41,8],["2018-11-21",72,0,15,41,8],["2018-11-21",73,0,91,38,8],["2018-11-21",74,null,97,42,7],["2018-11-21",74,0,94,42,1],["2018-11-21",78,0,58,41,8],["2018-11-21",80,0,3,41,0],["2018-11-21",81,0,6,36,5],["2018-11-21",82,0,6,36,5],["2018-11-21",83,0,15,36,8],["2018-11-21",87,0,7,41,8],["2018-11-21",88,0,3,42,0],["2018-11-21",89,0,3,36,0],["2018-11-21",91,null,89,38,7],["2018-11-21",91,0,87,38,1],["2018-11-21",99,null,93,42,1],["2018-11-21",99,0,87,42,7],["2018-11-21",103,0,15,36,8],["2018-11-21",104,null,7,41,8],["2018-11-21",107,0,103,42,8],["2018-11-21",109,null,99,42,2],["2018-11-21",109,0,87,42,6],["2018-11-21",110,null,21,36,4],["2018-11-21",110,0,15,36,4],["2018-11-21",197,0,72,41,8],["2018-11-21",204,0,72,41,8],["2018-11-21",255,0,58,41,8],["2018-11-21",274,0,20,36,8],["2018-11-21",278,null,16,36,4],["2018-11-21",278,0,15,36,4],["2018-11-21",283,0,16,36,5],["2018-11-21",301,0,56,36,0],["2018-11-21",339,0,20,36,5],["2018-11-21",341,null,89,38,7],["2018-11-21",341,0,87,38,1],["2018-11-21",348,null,87,8,8],["2018-11-21",350,0,6,41,8],["2018-11-21",351,0,8,36,8],["2018-11-21",357,null,93,38,1],["2018-11-21",357,0,87,38,7],["2018-11-21",375,0,15,41,8],["2018-11-21",380,null,3,42,0],["2018-11-21",404,0,16,36,5],["2018-11-23",28,0,6,36,5],["2018-11-23",67,0,15,36,5],["2018-11-23",70,0,6,36,5],["2018-11-23",81,0,16,36,7],["2018-11-23",82,0,6,36,7],["2018-11-23",103,0,21,36,5]]

const IdLabor=[[1,"Cement Mason / Concrete Finisher"],[3,"Foreman"],[4,"OPERATOR-Asphalt Paver"],[5,"Asphalt Shoveler Non"],[6,"Backhoe"],[7,"Bobcat"],[8,"Bulldozer"],[9,"Concrete Finisher"],[10,"Concrete Laborer"],[11,"Concrete Truck"],[12,"Dump Truck"],[13,"Excavator"],[14,"Grader"],[15,"Labor"],[16,"Loader"],[17,"Lowboy"],[18,"Mechanic"],[19,"Milling"],[20,"Pipe"],[21,"Roll"],[23,"Driver in JVA Truck"],[25,"Concret Labor NON REGULAR"],[26,"Grader Checker NON REGULAR"],[27,"Grader Checker Trainee"],[28,"Mason Trainee"],[29,"Traffic Control Specialist Trainee"],[30,"Labor NON REGULAR"],[31,"Erosion Control Specialist Trainee"],[32,"Pipe Labor NON REGULAR"],[33,"Asphalt Shoveler NON REGULAR"],[35,"Office staff"],[37,"Bulldozer NON REGULAR"],[38,"Concrete Finisher NON REGULAR"],[39,"Backhoe NON REGULAR"],[41,"Bobcat NON REGULAR"],[42,"Grader NON REGULAR"],[43,"Loader NON REGULAR"],[44,"Milling NON REGULAR"],[45,"Asphalt Paver NON REGULAR"],[46,"Roll NON REGULAR"],[47,"Off Holiday Salary"],[48,"Off Holiday Wages"],[49,"Off Sick Day Salary"],[50,"Off Sick Day Wages"],[51,"Off Vacation Salary"],[52,"Off Vacation Wages"],[53,"Owner"],[54,"Dump Truck NON REGULAR"],[55,"Lowboy Trcuk NON Regular"],[56,"Salary"],[58,"Asphalt Paver"],[60,"Office Salary - Concrete"],[64,"Backhoe Loader-NON REGULAR"],[65,"OPERATOR-Asphalt Paver"],[66,"OPERATOR-Backhoe Loader"],[72,"Asphalt Shoveler"],[73,"Operator - Asphalt Paver"],[85,"Truck Driver - Dump"],[87,"Laborer - Common / General"],[88,"Laborer / Common Gen"],[89,"Laborer Pipe Layers"],[90,"Laborer - Power Tool Operator"],[91,"Operator - Bachoe / Excavator"],[92,"Operator - Bachoe Loader"],[93,"Operator - Bobcat / Skid Loader"],[94,"Operator Bulldozer"],[95,"Operator - Concrete Finishing Machine"],[96,"Operator Excavator"],[97,"Operator - Greader / Blade"],[99,"Operator - Roller"],[100,"Operator  Roller"],[101,"Truck Driver Dump"],[103,"Operator - Loader"],[104,"Operator -Milling Machine"],[105,"Operator - Paver"],[106,"Flagman"],[107,"Laborer Concrete Finish"],[108,"Truck Drivers Distributor"],[109,"Truck Drivers Vactor Truck"]]


const IdEmployee=[["Ivan Ameijide",5],["Heraldo Baragana",11],["Lian Cardenas Galindo",14],["Juan Cartaya Pedroso",17],["Victor Angel Chirinos",18],["Juan Jose Consuegra Caballero",19],["Fidel Cortina",22],["Jorge Luis Corzo Albarado",23],["Ramon Crespo",24],["Jose L. Cruz",25],["Jose Antonio Cueli",26],["Francisco Cuenca",27],["Carlos Delgado",28],["Celestino C. Diaz",29],["Asdrubal Falcon",33],["Wilfredo Galindo",37],["Yaidel Garcia Monzon",38],["Yunier Garcia",39],["Romelio Gonzalez Lima",41],["Jesus V. Gonzalez",44],["Diego Granada",46],["Luis Hernandez",48],["Savanes Joseph",50],["Alfredo Julia",51],["Francisco Leal Munoz",52],["Yuniesky Liriano Gonzalez",54],["Armando Llorca",56],["Miguel Manzanet",61],["Johnatan Mesa",67],["Samuel Mojica",69],["Edison S. Montenegro",70],["Arthur Davis Moore",71],["Carlos A. Morales",72],["Orlenis Mosquera",73],["Manuel Moya",74],["Francisco Olivera",78],["Pablo O. Orta",80],["David Ortega",81],["Juan P. Ortega",82],["Luis E. Palacio",83],["Mikel Perez Mayo",87],["Jorge L. Perez",88],["Jose Perez",89],["Manuel Rego",91],["Jesus E. Reyes",92],["Luis Giraldo Rodriguez Botello",93],["Juan Antonio Rodriguez",95],["Berto Ramon Rojas Gonzalez",96],["Adrian V. Saavedra",98],["Dilver Salazar",99],["Hanoi Sanchez",101],["Jorge R. Santana",103],["Darian Sierra",104],["Pablo Manuel Torres",107],["Caridad Trujillo",108],["Orlando Valdes Pando",109],["Alberto Valdes",110],["Andres Villavicencio",113],["Lazaro Estrada",187],["Calixto Zelaya",197],["Christian Lizardo",198],["Julius Diaz",201],["Julio C Santiesteban",204],["Jorge Arrate",226],["Alahin Hernandez",238],["Joel Martinez",254],["Pedro Saldana",255],["Ernesto Gonzalez",258],["Advian Rodriguez",262],["Bernabe Antonio Aguirre",265],["Luis A Llopiz",270],["Fidel Hernandez",274],["Arnaldo Gonzalez",275],["Jose Jimenez",277],["Pablo A Torres",278],["Denis Castellanos",279],["Richard Do Vale",280],["Randolf Betancourt",283],["Alfredo Munoz",284],["Angel M Cruz",298],["Alexander Luis",301],["Ruben Hernandez",308],["Ariel Duran",310],["Yaniel Peguero",311],["Omar A Ruiz",316],["Marcelino E Hernandez",319],["Giraldo Chavez",329],["David Delgado",330],["Ismael Castillo",339],["Roberto  Mejia",341],["Michel Fernandez",348],["Pedro E Novo",350],["Juan Rodriguez",351],["Yosniel Prado",357],["Pedro Lago",369],["Nicolas Pierrot",371],["Jose Carlos Consuegra",372],["Damian Oliva",373],["Yarine Machado",375],["Orlando Sanfeliz",382],["Eddy Batista",384],["Peter Gracia",386],["Klayther Marrero",388],["Luis Velez",389],["Zoilo  Pacheco",390],["Yendy Estevez",392],["Rafael Garofalo",396],["Jorge Garcia",404],["Leonardo Miranda",405],["Elieser Cordovez",407],["Gonzalo Estrada",410]];
const EmployeeList=IdEmployee.map((elem,index)=>{
    return elem[0]
}) 

EmployeeList.sort();


const IdCategories=[["Asphalt Paver",1],["Cement Mason / Concrete Finisher",2],["Employee - Salary",4],["Employee Hourly Wage",5],["Employee Hourly Wage - Other Company",6],["LABORER - Concrete Laborer",7],["LABORER - Grader Checker",8],["LABORER - Grader Checker Trainee",9],["LABORER - Mason Trainee",10],["LABORER - Traffic control Specialist Trainee",11],["Labor NON REGULAR",12],["LABORER - Erosion Control Specialist Trainee",13],["Pipe Labor NON REGEULAR",14],["Asphalt Shoveler NON REGULAR",15],["Office - Salary",16],["Office Salary - Concrete",18],["Bulldozer NON REGULAR",19],["Concrete Finisher NON REGULAR",20],["OPERATOR - Backhoe",21],["Bobcat NON REGULAR",22],["Grader NON REGULAR",24],["Loader NON REGULAR",25],["Milling NON REGEULAR",26],["OPERATOR–Paver",27],["Roller NON REGULAR",28],["Paid Time Off - Holiday Salary",29],["Paid Time Off - Holiday Wages",30],["Paid Time Off - Sick Salary",31],["Paid Time Off - Sick Wages",32],["Paid Time Off - Vacation Salary",33],["Paid Time Off - Vacation Wages",34],["Shareholder Compensation–Salary",35],["Dump Truck NON Regular",36],["TRUCK DRIVER – Lowboy",37],["Yard - Salary",38],["OPERATOR-Backhoe Loader",42],["Asphalt Shoveler",44],["Operator - Asphalt Paver",45],["Truck Driver - Dump",46],["Laborer - Common / General",47],["Labores - Power Tool Operator",48],["Laborer / Common Gen",49],["Laborer Pipe Layers",50],["Operator - Bachoe Loader",51],["Operator - Bulldozer",52],["Operator - Excavator",53],["Operator - Roller",54],["Operator - Bachoe / Excavator",55],["Operator - Bobcat / Skid Loader",56],["Operator - Concrete Finishing Machine",57],["Operator - Greader / Blade",58],["Operator  Roller",60],["Truck Driver Dump",62],["Operator - Loader",63],["Operator - Milling Machine",64],["Operator - Paver",65],["Flagman",66],["Laborer Concrete Finish",67],["Truck Drivers Distributor",68],["Truck Drivers Vactor Truck",69]];
const CatList=IdCategories.map((elem,index)=>{
   
    return elem[0]
})  




const ProjectList=[["20150195",8],["E6J13",9],["M2015-022",18],["E6K59",23],["E6K96",29],["B30836",31],["2017-035.0",33],["T201617013",35],["T201617012",36],["033-17",37],["B30966",38],["10-18",40],["M0130",41],["2017-0350B",42],["T6448",43]]                
var Proj= ProjectList.map((elem,index)=>{
            return {
                name:elem[0],
                id: elem[1],
                Categories:CatList
            }
    })          

const initialState = {

    login: false,
    supervisorSelect:'',
    dateSelect:'',

    newReport:false,
    getReport:false,

    Supervisor:["Adrian","Primo"],
    ProjectSelect:0,
    Project:Proj,
                    
    Employees:[],
    WholeList:EmployeeList,
    OldReportsList:OldReportsList,
    IdCategories:IdCategories,
    IdEmployee:IdEmployee,
    IdLabor:IdLabor
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case actionTypes.LOGIN:
                        return {
                            ...state,
                            login:action.value
                        }
        case actionTypes.OPENREPORT:
                        return {
                            ...state,
                            supervisorSelect:action.name,
                            dateSelect:action.date,
                            getReport:action.value,
                            newReport:action.newValue

                        }  
        case actionTypes.DELETEWORKER:
                        return {
                            ...state,
                            Employees:action.list,
                        }   
        case actionTypes.PROJECTSELECT:
                        return {
                            ...state,
                            ProjectSelect:action.value,
                        }                                                              
    }
    return state;
};

export default reducer;