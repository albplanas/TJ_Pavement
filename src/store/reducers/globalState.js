import * as actionTypes from '../actions';



        

const initialState = {

    login: false,
    supervisorSelect:'',
    dateSelect:'',

    newReport:false,
    getReport:false,

    Supervisor:["Adrian","Primo"],
    ProjectSelect:0,
    Project:[],
                    
    Employees:[],
    WholeList:[],
    OldReportsList:[],


    IdCategories:[],
    IdEmployee:[],
    IdLabor:[],
    IdProject:[]
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ENDUPDATE:
                        console.log(action.value)
                        var arrayUpdate= action.value.map(elem=>{
                            return [elem.date]
                        })
                        return {
                            
                        }

        case actionTypes.STARTUPDATE:


                        const EmployeeList=action.value.IdEmployee.map((elem,index)=>{
                            return elem[0]
                        }) 

                        EmployeeList.sort();


                        const CatList=action.value.IdCategories.map((elem,index)=>{
                        
                            return elem[0]
                        })  
                        var Proj= action.value.Projects.map((elem,index)=>{
                                    return {
                                        name:elem[0],
                                        id: elem[1],
                                        Categories:CatList
                                    }
                            })  


             return {
                            ...state,
                            IdCategories:action.value.IdCategories,
                            IdEmployee:action.value.IdEmployee,
                            IdLabor:action.value.IdLabor,
                            IdProject:action.value.Projects,
                            OldReportsList:action.value.OldReportsList,
                            Project:Proj,
                            WholeList:EmployeeList
             }


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