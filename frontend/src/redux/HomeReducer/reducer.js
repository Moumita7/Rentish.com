import * as types from './actionTypes'

const initialState = {
    city:"",
    location:"",
    date:{}
}

export const HomeReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.POST_CITY: {
            return {
                ...state, city:payload
            }
        }
        case types.POST_LOCATION: {
            
            return {
                ...state, location:payload
            }
        }
        case types.POST_DATE: {
            
            return {
                ...state, date:payload
            }
        }
        default: return state
    }
}