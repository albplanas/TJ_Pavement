import * as actionTypes from '../actions';

const initialState = {

    login: false,
    driver:false,
    openReport:false
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