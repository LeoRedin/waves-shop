import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER
} from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload };
        case REGISTER_USER:
            return { ...state, registerSuccess: action.payload };
        case AUTH_USER:
            const { payload: userData } = action;
            return { ...state, userData };
        case LOGOUT_USER:
            return { ...state };
        default:
            return state;
    }
}
