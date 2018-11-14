import * as actionTypes from '../actions';

const initialState = {

    login: false,
    driver:false,
    newReport:false,
    Supervisor:["Adrian","Primo"],
    Project:["DB Services NE","TJ Company","Citywide Storm Repair-M0130","North CruiseBlvd-Phase IB","Entrada Neighborhood Drainage","Sw 5St from 29Ave. to 27 Ave."],
    Employees:[{
        name:"Adrian",
        Categories:["A","B"]
    },{
        name:"Primo",
        Categories:["A","B"]
    },{
        name:"Rober",
        Categories:["A","B"]
    }],
    WholeList:["Rafael","Rublio","etc"]
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
                            [action.name]:action.value,
                        }  
        case actionTypes.DELETEWORKER:
                        return {
                            ...state,
                            Employees:action.list,
                        }                                               
    }
    return state;
};

export default reducer;