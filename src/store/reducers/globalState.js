import * as actionTypes from '../actions';

const initialState = {

    login: true,
    driver:false

}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case actionTypes.LOGIN:
                        return {
                            ...state,
                            login:action.value
                        }
                                                
    }
    return state;
};

export default reducer;