
import { ToursAPI } from '../../API/index';

const initialState = {
    isLoading: false,
    toursArr: []
}
const SET_TOURS_ARR = 'SET_TOURS_ARR'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'


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

        default:
            return state

    }

}

const setToursArr = (toursArr) => ({ type: SET_TOURS_ARR, toursArr })
const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })

export const getAllTour = () => (dispatch) => {
    dispatch(toggleIsLoading(true))
    ToursAPI.getAllTours()
        .then(data => console.log(data))
        .catch(err => console.error(err))
        .finally(() => dispatch(toggleIsLoading(false)))
}

export default ToursReducers