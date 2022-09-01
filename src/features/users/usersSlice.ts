import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {usersApi} from "./usersApi";
import {UpdateUserInterface} from "./interfaces/interfaces"

const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState({
    usersLoadingStatus: <string | null> null,
});

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        try {
            const response = await usersApi.getUsersApi()
            return response
        } catch (err) {
            console.log('error', err)
        }
    }
)

export const createUser = createAsyncThunk(
    'users/createUser',
    async (payload: object) => {
        try {
            const response = await usersApi.createUserApi(payload)
            return response
        } catch (err) {
            console.log('error', err)
        }
    }
)

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async (payload: UpdateUserInterface) => {
        try {
            const response = await usersApi.updateUserApi(payload.id, payload.data)
            return response
        } catch (err) {
            console.log('error', err)
        }
    }
)

export const deleteUser = createAsyncThunk(
    'users/deleteUser',
    async (id: number) => {
        try {
            await usersApi.deleteUserApi(id)
            return id
        } catch (err) {
            console.log('error', err)
        }
    }
)


const usersSlice = createSlice({
        name: 'users',
        initialState: initialState,
        reducers: {
            createUser: usersAdapter.addOne,
            updateUser: usersAdapter.updateOne,
            deleteUser: usersAdapter.removeOne
        },

        extraReducers: (builder) => {
            builder
                .addCase(fetchUsers.pending, state => {state.usersLoadingStatus = 'loading'})
                .addCase(fetchUsers.fulfilled, (state, action) => {
                    state.usersLoadingStatus = 'success';
                    usersAdapter.setAll(state, action.payload.data)
                })
                .addCase(fetchUsers.rejected, state => {
                    state.usersLoadingStatus = 'error';
                })

            builder
                .addCase(deleteUser.pending, state => {state.usersLoadingStatus = 'loading'})
                .addCase(deleteUser.fulfilled, (state, action: any) => {
                    usersSlice.caseReducers.deleteUser(state, action.payload)
                    state.usersLoadingStatus = 'success';
                })
                .addCase(deleteUser.rejected, state => {
                    state.usersLoadingStatus = 'error';
                })

            builder
                .addCase(createUser.pending, state => {state.usersLoadingStatus = 'loading'})
                .addCase(createUser.fulfilled, (state, action: any) => {
                    usersSlice.caseReducers.createUser(state, action.payload)
                    state.usersLoadingStatus = 'success';
                })
                .addCase(createUser.rejected, state => {
                    state.usersLoadingStatus = 'error';
                })

            builder
                .addCase(updateUser.pending, state => {state.usersLoadingStatus = 'loading'})
                .addCase(updateUser.fulfilled, (state, {payload}: any) => {
                    const {id, ...changes} = payload
                    usersSlice.caseReducers.updateUser(state, {id, changes})
                    state.usersLoadingStatus = 'success';
                })
                .addCase(updateUser.rejected, state => {
                    state.usersLoadingStatus = 'error';
                })
        }
    }
)

const { reducer } = usersSlice;

export default reducer;

