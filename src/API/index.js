import * as axios from "axios";



const instanse = axios.create({
    baseURL: "https://touristbish.herokuapp.com/",
    headers: {
        'Content-Type': 'application/json',
    }
})

export const ToursAPI = {
    getAllTours() {
        return instanse.get("main/contact//").then(response => response.data)
    }
}


