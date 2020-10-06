import axios from 'axios'

const instance = axios.create({
    baseURL: '/api/',
})

export const authAPI = {
    login(login, password) {
        return instance.post('auth/login', { login, password })
    },
    registration(login, password) {
        return instance.post('auth/registration', { login, password })
    },
    socialLogin(socialId, name) {
        return instance.post('auth/socialLogin', { socialId, name })
    },
    me() {
        return instance.post('auth/me')
    },
    logout() {
        return instance.post('auth/logout')
    },
}

export const homeAPI = {
    getCompany() {
        return instance.post('home/company/get')
    },
}

export const adminAPI = {
    getUsersCount() {
        return instance.get('admin/users/count')
    },
    getUsers(offset, limit) {
        return instance.post('admin/users/get', { offset, limit })
    },
    setAdmins(ids) {
        return instance.post('admin/admins/add', { ids })
    },
    deleteAdmins(ids) {
        return instance.post('admin/admins/delete', { ids })
    },
    blockUsers(ids) {
        return instance.post('admin/users/block', { ids })
    },
    unblockUsers(ids) {
        return instance.post('admin/users/unblock', { ids })
    },
    deleteUsers(ids) {
        return instance.post('admin/users/delete', { ids })
    },
}

export const profileAPI = {
    getBonusesCount(userId) {
        return instance.post('profile/bonuses/count', { userId })
    },
    getBonuses(userId, offset, limit) {
        return instance.post('profile/bonuses/get', { userId, offset, limit })
    },
    getCompanyCount(userId) {
        return instance.post('profile/company/count', { userId })
    },
    getCompany(userId, offset, limit) {
        return instance.post('profile/company/get', { userId, offset, limit })
    },
    getUserInfo(userId) {
        return instance.post('profile/user/get', { userId })
    },
    setUserName(userId, name) {
        return instance.post('profile/user/set/name', { userId, name })
    },
    setUserSurname(userId, surname) {
        return instance.post('profile/user/set/surname', { userId, surname })
    },
    setUserCountry(userId, country) {
        return instance.post('profile/user/set/country', { userId, country })
    },
    setUserCity(userId, city) {
        return instance.post('profile/user/set/city', { userId, city })
    },
}

export const companyAPI = {
    getUserCompanies(userId) {
        return instance.post('company/userCompanies/getId', { userId })
    },
    getCompany(companyId) {
        return instance.post('company/company/get', { companyId })
    },
    getBonusesCount(companyId) {
        return instance.post('company/bonuses/count', { companyId })
    },
    getBonuses(companyId, offset, limit) {
        return instance.post('company/bonuses/get', { companyId, offset, limit })
    },
    buyBonus(bonusId, userId, companyId, bonusAmount) {
        return instance.post('company/bonuses/buy', { bonusId, userId, companyId, bonusAmount })
    },
    getCompanyImages(companyId) {
        return instance.post('company/images/get', { companyId })
    },
}

export const createCompanyAPI = {
    uploadImage(image) {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'courseworkit')

        return axios.post('https://api.cloudinary.com/v1_1/hnpgflfup/image/upload', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    },
    createCompany(userId, title, description, videoLink, targetAmount, expirationDate) {
        return instance.post('company/create', {
            userId,
            title,
            description,
            videoLink,
            targetAmount,
            expirationDate,
        })
    },
    createCompanyImages(companyId, images) {
        return instance.post('company/images/set', { companyId, images })
    },
}

export const createBonusAPI = {
    getCompaniesId(userId) {
        return instance.post('bonus/companiesId/get', { userId })
    },
    createBonus(title, amount, description, companyId) {
        return instance.post('bonus/create', { title, amount, description, companyId })
    },
}
