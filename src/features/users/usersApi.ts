import axios from "axios";

export const usersApi = {
    getUsersApi: async () => {
        return await axios.get('https://reqres.in/api/users').then(res => res.data)
    },
    createUserApi: async (user: object) => {
        return await axios.post(`https://reqres.in/api/users`, user).then(res => res.data)
    },
    updateUserApi: async (id: number, user: object) => {
        return await axios.put(`https://reqres.in/api/users/${id}`, user).then(res => res.data)
    },
    deleteUserApi: async (id: number) => {
        return await axios.delete(`https://reqres.in/api/users/${id}`).then(res => res)
    }
}