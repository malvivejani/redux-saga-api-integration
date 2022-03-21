import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../types/loginTypes"

export const loginRequest = (credentials: any, onLoginSuccess: any) => {
    return {
        type: LOGIN_REQUEST,
        payload: credentials,
        onSuccess: onLoginSuccess
    }
}

export const loginSuccess = (login: any) => {
    return {
        type: LOGIN_SUCCESS,
        payload: login,
    }
}

export const loginFailure = (error: any) => {
    return {
        type: LOGIN_FAILURE,
        payload: error,
    }
}