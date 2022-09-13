import * as axios from "axios";


const instanse = axios.create({
    baseURL: "https://touristbish.herokuapp.com/",
    headers: {
        'Content-Type': 'application/json',
    }
})

export const ToursAPI = {
    getAllTours() {
        return instanse.get("main/location//").then(response => response.data)
    },
    getDetailById(id) {
        return instanse.get('main/location//' + id + '/').then(response => response.data)
    },
    getTransport() {
        return instanse.get('main/transport//').then(response => response.data)
    },
    getHotel() {
        return instanse.get("main/hotel//").then(response => response.data)
    },

}


