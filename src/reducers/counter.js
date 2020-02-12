import { INCREMENT_OPERATION, DECREMENT_OPERATION } from '../constants/constants.js';

const initialState = {
    initialValueCount: 0
}

const counterReducer = (state = initialState, {type}) => {
    switch (type) {
        case INCREMENT_OPERATION:
            return {
                ...state,
                initialValueCount: state.initialValueCount + 1,
            };
        case DECREMENT_OPERATION:
            return {
                ...state,
                initialValueCount: state.initialValueCount - 1
            };
        default:
            return state;
    }
}


export default counterReducer;