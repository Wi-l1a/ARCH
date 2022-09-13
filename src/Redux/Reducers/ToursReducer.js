
import { ToursAPI } from '../../API/index';

const initialState = {
    isLoading: false,
    toursArr: [],
    Detailtours: {},
    hotelArr: []

}
const SET_TOURS_ARR = 'SET_TOURS_ARR'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const SET_DETAIL_TOUR = 'SET_DETAIL_TOUR'
const SET_HOTEL_ARR = 'SET_HOTEL_ARR'


const ToursReducers = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_TOURS_ARR:
            return {
                ...state,
                toursArr: action.toursArr
            }
        case SET_DETAIL_TOUR:
            return {
                ...state,
                Detailtours: action.Detailtours
            }
        case SET_HOTEL_ARR:
            return {
                ...state,
                hotelArr: action.hotelArr
            }

        default:
            return state

    }

}

const setToursArr = (toursArr) => ({ type: SET_TOURS_ARR, toursArr })
const setHotel = (hotelArr) => ({ type: SET_HOTEL_ARR, hotelArr })
const setDetailTour = (Detailtours) => ({ type: SET_DETAIL_TOUR, Detailtours })
const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })

export const getAllTour = () => (dispatch) => {
    dispatch(toggleIsLoading(true))
    ToursAPI.getAllTours()
        .then(data => dispatch(setToursArr(data)))
        .catch(err => console.error(err))
        .finally(() => dispatch(toggleIsLoading(false)))
}


export const getDetailTour = (id) => (dispatch) => {
    dispatch(toggleIsLoading(true))
    ToursAPI.getDetailById(id)
        .then(data => dispatch(setDetailTour(data)))
        .catch(err => console.error(err))
        .finally(() => dispatch(toggleIsLoading(false)))
}

export const getDetailTransport = () => (dispatch) => {
    dispatch(toggleIsLoading(true))
    ToursAPI.getTransport()
        .then(data => dispatch(setToursArr(data)))
        .catch(err => console.error(err))
        .finally(() => dispatch(toggleIsLoading(false)))
}

export const getHotelArr = () => (dispatch) => {
    dispatch(toggleIsLoading(true))
    ToursAPI.getHotel()
        .then(data => dispatch(setHotel(data)))
        .catch(err => console.error(err))
        .finally(() => dispatch(toggleIsLoading(false)))
}





export default ToursReducers