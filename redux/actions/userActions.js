import axios from 'axios';
import { LOGIN_SUCCESS, REGISTER_SUCCESS, AUTH_ERROR } from './types';

// Registro de usuario
export const register = (userData) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:4000/api/register', userData);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data.token });
        // Guardar token en AsyncStorage o manejar el estado de usuario autenticado
    } catch (err) {
        dispatch({ type: AUTH_ERROR, payload: err.response.data });
    }
};

// Login de usuario
export const login = (credentials) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:4000/api/login', credentials);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
        // Guardar token en AsyncStorage o manejar el estado de usuario autenticado
    } catch (err) {
        dispatch({ type: AUTH_ERROR, payload: err.response.data });
    }
};
