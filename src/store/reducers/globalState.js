import * as actionTypes from '../actions';

const CatList=["Laborer Common/ General","Laborer Pipelayers","Labored Concrete Finish","Asphalt Shoveler",
                "Operator bachoe/ Excavator","Operator Bobcat","Operator Bulldozer","Operator Concrete Finishing Machine",
               "Operator Grade/ Blade","Operator Loader","Operator Roller","Operator Milling machine","Operator Paver","Truck Driver Dump"
                ]
               

const initialState = {

    login: false,
    supervisorSelect:'',
    dateSelect:'',

    newReport:false,
    Supervisor:["Adrian","Primo"],
    ProjectSelect:0,
    Project:[{
                 name:"DB Services NE",
                 Categories: CatList
            },{
                name:"TJ Company" ,
                Categories:CatList    
            },{
                name:"Citywide Storm Repair-M0130",
                Categories:["Laborer Common/ General","Laborer Power Tool Operator","Operator Bulldozer","Operator Bachoe Loader","Operator Roller","Operator Asphalt Paver","Truck Driver Dump"]
                    },{
                name:"North Cruise Blvd-Phase IB"  ,
                Categories:CatList
                    },{
                name:"Entrada Neighborhood Drainage"  ,
                Categories:CatList
                    },{
                name:"Sw 5St from 29Ave. to 27 Ave.",
                Categories:CatList
                    }],
                    
    Employees:[],
    WholeList:["Adrian V. Saavedra","Advian Rodriguez","Alahin Hernandez","Alberto Valdes","Alexander Luis","Alfredo Julia","Alfredo Munoz","Andres Villavicencio","Angel M Cruz","Ariel Duran","Armando Llorca","Arnaldo Gonzalez","Arthur Davis Moore","Asdrubal Falcon","Bernabe Antonio Aguirre","Berto Ramon Rojas Gonzalez","Calixto Zelaya","Caridad Trujillo","Carlos Delgado","Carlos A. Morales","Celestino C. Diaz","Christian Lizardo","Damian Oliva","Darian Sierra","David Delgado","David Ortega","Denis Castellanos","Diego Granada","Dilver Salazar","Eddy Batista","Edison S. Montenegro","Elieser Cordovez","Ernesto Gonzalez","Fidel Cortina","Fidel Hernandez","Francisco Cuenca","Francisco Leal Munoz","Francisco Olivera","Giraldo Chavez","Gonzalo Estrada","Hanoi Sanchez","Heraldo Baragana","Ismael Castillo","Ivan Ameijide","Jesus E. Reyes","Jesus V. Gonzalez","Joel Martinez","Johnatan Mesa","Jorge Arrate","Jorge Garcia","Jorge L. Perez","Jorge Luis Corzo Albarado","Jorge R. Santana","Jose Jimenez","Jose Perez","Jose Antonio Cueli","Jose Carlos Consuegra","Jose L. Cruz","Juan Cartaya Pedroso","Juan Rodriguez","Juan Antonio Rodriguez","Juan Jose Consuegra Caballero","Juan P. Ortega","Julio C Santiesteban","Julius Diaz","Klayther Marrero","Lazaro Estrada","Leonardo Miranda","Lian Cardenas Galindo","Luis Hernandez","Luis Velez","Luis A Llopiz","Luis E. Palacio","Luis Giraldo Rodriguez Botello","Manuel Moya","Manuel Rego","Marcelino E Hernandez","Michel Fernandez","Miguel Manzanet","Mikel Perez Mayo","Nicolas Pierrot","Omar A Ruiz","Orlando Sanfeliz","Orlando Valdes Pando","Orlenis Mosquera","Pablo A Torres","Pablo Manuel Torres","Pablo O. Orta","Pedro Lago","Pedro Saldana","Pedro E Novo","Peter Gracia","Rafael Garofalo","Ramon Crespo","Randolf Betancourt","Richard Do Vale","Roberto  Mejia","Romelio Gonzalez Lima","Ruben Hernandez","Samuel Mojica","Savanes Joseph","Victor Angel Chirinos","Wilfredo Galindo","Yaidel Garcia Monzon","Yaniel Peguero","Yarine Machado","Yendy Estevez","Yosniel Prado","Yunier Garcia","Yuniesky Liriano Gonzalez","Zoilo  Pacheco"]
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
                            newReport:action.value

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