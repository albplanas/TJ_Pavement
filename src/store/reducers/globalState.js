import * as actionTypes from '../actions';



        

const initialState = {

    door:"door-1",
    serviceSelect:1
   
}
const reducer = (state = initialState, action) => {


    switch(action.type){

        case actionTypes.DOOR:
        return {
            ...state,
            door:action.value
        }
        

        case actionTypes.SERVICESDOOR:
        return {
            ...state,
            serviceSelect:action.value
        }

        case actionTypes.LOGIN:
                        return {
                            ...state,
                            login:action.value
                        }
    }
    return state;
};

export default reducer;