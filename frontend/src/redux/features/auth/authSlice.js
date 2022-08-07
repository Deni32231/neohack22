import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

const initialState = {
    firstName: null,
    lastName: null,
    role: null,
    isLoading: false,
    status: null
}

export const registerUser = createAsyncThunk('auth/registerUser', async ({createAt, email, firstName, lastName, password, role}) => {
    try {
        const { data } = await axios.post('/users/sighUp', {
            email,
            firstName,
            lastName,
            password,
            role
        })
        localStorage.setItem('email', data.email);
        return data
    } catch (error) {
        console.log(error)
    }
})

export const loginUser = createAsyncThunk('auth/login', async ({createAt, email, firstName, lastName, password, role}) => {
    try {
        const { data } = await axios.post('/users/sighIn', {
            email,
            firstName,
            lastName,
            password,
            role
        })
        localStorage.setItem('email', data.email);
        return data
    } catch (error) {
        console.log(error)
    }
})

export const getId = createAsyncThunk('auth/myId', async (email) => {
    try {
        const { data } = await axios.get(`/users/${email}`)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.firstName = null;
            state.lastName = null;
            state.role = null;
            state.isLoading = false;
            state.status = null;
        }
    },
    extraReducers: {

        // Register user
        [registerUser.pending]: (state) => {
            state.isLoading = true;
            state.status = null;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = 'OK';
            
            try {
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.role = action.payload.role;
            } catch {
                state.status = 'Failed';
            }
        },
        [registerUser.reject]: (state) => {
            state.status = 'Failed';
            state.isLoading = false;
        },

        // Login user

        [loginUser.pending]: (state) => {
            state.isLoading = true;
            state.status = null;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = 'OK';
            try {
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.role = action.payload.role;
            } catch {
                state.status = 'Failed'
            }
        },
        [loginUser.reject]: (state) => {
            state.status = 'Failed';
            state.isLoading = false;
        },


        // getId


        [getId.pending]: (state) => {
            state.isLoading = true;
            state.status = null;
        },
        [getId.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = 'OK';
            try {
                state.userId = action.payload.id
            } catch {
                state.status = 'Failed';
            }
            
        },
        [getId.reject]: (state) => {
            state.status = 'Failed';
            state.isLoading = false;
        },
    }
});

export const {logout} = authSlice.actions;
export const checkIsAuth = (state) => Boolean(state.auth.role)


export default authSlice.reducer;