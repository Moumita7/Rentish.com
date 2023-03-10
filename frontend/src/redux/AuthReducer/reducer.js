import * as types from "./actionTypes"

const initialState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    registerUser: {},
    token: ""
}
const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    
    // console.log("dvf",type,payload)
    switch (type) {
        case types.SIGNUP_REQUEST:
            return { ...state, isLoading: true }
        case types.SIGNUP_SUCCESS:
            return { ...state, isLoading: false, registerUser: payload }
        case types.SIGNUP_FAILURE:
            return { ...state, isLoading: false, isError: true }
        case types.LOGIN_REQUEST:
            return { ...state, isLoading: true }
        case types.LOGIN_SUCCESS:
            return { ...state, isLoading: false, isAuth: true, token: payload.token,registerUser:payload.user }
        case types.LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true, isAuth: false }

        default:
            return { state }
    }
}


export { reducer }