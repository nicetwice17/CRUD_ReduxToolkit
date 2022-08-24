import axios from "axios";

export const usersApi = {
    getUsersApi: async () => {
        return await axios.get('https://reqres.in/api/users').then(res => res.data)
    },
    createUserApi: async (user) => {
        return await axios.post(`https://reqres.in/api/users`, user).then(res => res.data)
    },
    updateUserApi: async (id, user) => {
        return await axios.put(`https://reqres.in/api/users/${id}`, user).then(res => res.data)
    },
    deleteUserApi: async (id) => {
        return await axios.delete(`https://reqres.in/api/users/${id}`).then(res => res)
    }
}