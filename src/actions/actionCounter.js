import { INCREMENT_OPERATION, DECREMENT_OPERATION } from '../constants/constants.js';

export const incrementCount = () => ({
    type: INCREMENT_OPERATION
});

export const decrementCount = () => ({
    type: DECREMENT_OPERATION
});