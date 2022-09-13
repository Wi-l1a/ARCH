export const setLSToken = (token) => {
    localStorage.setItem('token', token)
}
export const setLSUser = (user) => {
    localStorage.setItem('user', user)
}

export const getLSUser = () => {
    return localStorage.getItem('user')
}
export const getLSToken = () => {
    return localStorage.getItem('token')
}

export const removeLSToken = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')


}
