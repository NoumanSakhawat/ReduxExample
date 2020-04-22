import { INCREMENT, DECREMENT, RESET } from "../actions/types";

export default (state = 0, action) => {

    if (action.type === INCREMENT) {
        return state + 1;
    }
    else if (action.type === DECREMENT) {
        if (state === 0) {
            return state
        }
        return state - 1;
    }
    else if (action.type === RESET) {
        return 0;
    }
    else {
        return state;
    }
}