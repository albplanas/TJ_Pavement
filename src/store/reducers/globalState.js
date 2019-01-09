import * as actionTypes from '../actions';



        

const initialState = {

        login:false,
        door:"door-home",
        doorChild:""
   
}
const reducer = (state = initialState, action) => {


    switch(action.type){

        case actionTypes.DOOR:
        return {
            ...state,
            door:action.value
        }
        case actionTypes.DOORCHILD:
        return {
            ...state,
            doorChild:action.value
        }
        
    }
    return state;
};

export default reducer;