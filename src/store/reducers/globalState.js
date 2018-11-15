import * as actionTypes from '../actions';

const initialState = {

    login: false,
    driver:false,
    openReport:false,
    Supervisor:[],
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
    }]
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
                            openReport:action.value,
                        }                                       
    }
    return state;
};

export default reducer;