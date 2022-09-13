import { ToursAPI } from "../../API"
import { getLSToken, setLSToken, getLSUser, setLSUser } from './../../localStorage/index';



const initialState = {
    email: null,
    name: null,
    password: null,
    token: null,

}
const SET_TOKEN = 'SET_TOKEN'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const SET_USER_NAME = 'SET_USER_NAME'
const REMOVE_TOKEN = 'REMOVE_TOKEN'
const REMOVE_NAME = 'REMOVE_NAME'

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case SET_USER_NAME:
            return {
                ...state,
                email: action.userData.email,
                name: action.userData.username
            }
        case REMOVE_TOKEN:
            return {
                ...state,
                token: null
            }
        case REMOVE_NAME:
            return {
                ...state,
                name: null
            }
        default:
            return state
    }
}

export const setToken = (token) => ({ type: SET_TOKEN, token })
const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })
const setUserName = (userData) => ({ type: SET_USER_NAME, userData })
export const removeToken = () => ({ type: REMOVE_TOKEN })
export const removeUserName = () => ({ type: REMOVE_NAME })




export const signUp = (userData, navigate) => (dispatch) => {
    dispatch(toggleIsLoading(true))
    ToursAPI.signUP(userData)
        .then(data => data.email ? navigate('/login') : null)
        .catch(err => console.error(err))
        .finally(() => dispatch(toggleIsLoading(false)))
}

const autentication = (token) => (dispatch) => {
    ToursAPI.autorization(token)
        .then(data => {
            dispatch(setUserName(data))
            setLSUser(data.username)
        })
}
export const signIn = (userData) => (dispatch) => {
    dispatch(toggleIsLoading(true))
    ToursAPI.signIN(userData)
        .then(data => {
            dispatch(setToken(data.access))
            setLSToken(data.access)
            const token = getLSToken()

            dispatch(autentication(token))
        })
        .catch(err => console.error(err))
        .finally(() => dispatch(toggleIsLoading(false)))
}



export default userReducer;