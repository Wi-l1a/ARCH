import * as axios from "axios";


const instanse = axios.create({
    baseURL: "https://touristbish.herokuapp.com/",
    headers: {
        'Content-Type': 'application/json',
    }
})

export const ToursAPI = {
    getAllTours() {
        return instanse.get('main/contact//').then(response => response.data)
    },
    signUP(userData) {
        return instanse.post('auth/users/', userData).then(response => response.data)
    },
    signIN(userData) {
        return instanse.post('auth/jwt/create/', userData).then(response => response.data)
    },
    autorization(token) {
        const header = { 'Authorization': `Bearer ${token}` }
        return instanse.get('auth/users/me/', { headers: header }).then(res => res.data)
    }
}


