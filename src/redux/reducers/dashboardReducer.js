import { INCREMENTDASHBOARD, DECREMENTDASHBOARD, RESETDASHBOARD } from "../actions/types";

export default (state = 0, action) => {

    if (action.type === INCREMENTDASHBOARD) {
        return state + 1;
    }
    else if (action.type === DECREMENTDASHBOARD) {
        if (state === 0) {
            return state
        }
        return state - 1;
    }
    else if (action.type === RESETDASHBOARD) {
        return 0;
    }
    else {
        return state;
    }
}