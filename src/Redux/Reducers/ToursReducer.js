
import { ToursAPI } from '../../API/index';

const initialState = {
    isLoading: false,
    toursArr: [],
    contactsArr: []
}
const SET_TOURS_ARR = 'SET_TOURS_ARR'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const SET_CONTACTS_ARR = 'SET_CONTACTS_ARR'


const ToursReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOURS_ARR:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_TOURS_ARR:
            return {
                ...state,
                toursArr: action.toursArr
            }
        case SET_CONTACTS_ARR:
            return {
                ...state,
                contactsArr: action.contactsArr
            }

        default:
            return state

    }

}

const setToursArr = (toursArr) => ({ type: SET_TOURS_ARR, toursArr })
const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })
const setContactsArr = (contactsArr) => ({ type: SET_CONTACTS_ARR, contactsArr })

export const getAllContacts = () => (dispatch) => {
    dispatch(toggleIsLoading(true))
    ToursAPI.getAllContact()
        .then(data => dispatch(setContactsArr(data)))
        .catch(err => console.error(err))
        .finally(() => dispatch(toggleIsLoading(false)))
}

export default ToursReducers