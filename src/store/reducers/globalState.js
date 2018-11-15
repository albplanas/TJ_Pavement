import * as actionTypes from '../actions';

const initialState = {

    login: false,
    supervisorSelect:'',
    dateSelect:'',

    newReport:false,
    Supervisor:["Adrian","Primo"],
    ProjectSelect:0,
    Project:[{
                 name:"DB Services NE",
                 Categories:["Operator-Bobcat","Operator-Bulldozer"]
            },{
                name:"TJ Company" ,
                Categories:["C","D"]       
            },{
                name:"Citywide Storm Repair-M0130",
                Categories:["E","F"]
                    },{
                name:"North CruiseBlvd-Phase IB"  ,
                Categories:["G","H"]     
                    },{
                name:"Entrada Neighborhood Drainage"  ,
                Categories:["A","B"]      
                    },{
                name:"Sw 5St from 29Ave. to 27 Ave.",
                Categories:["C","B"]
                    }],
                    
    Employees:[{
                    name:"Adrian",
                    Hours:[]
                },{
                    name:"Primo",
                    Hours:[]
                },{
                    name:"Rober",
                    Hours:[]
                }],
    WholeList:["Adrian","Primo","Rober","Rafael","Rublio","etc"]
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