const IP_URL = "http://192.168.0.3:5000"
const BACK_NET = "https://flymatepf.herokuapp.com"

import axios from 'axios'
import {
    GET_FLIGHTS,
    GET_ALL_FLIGHTS,
    GET_FLIGHTS_ERROR,
    GET_FLIGHTS_SUCCESS,
    GET_FLIGHTS_BY_ROUTE,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    SET_TICKET,
    POST_TICKET,
    CLEAR_GET_FLIGHTS_BY_ROUTE,
    GET_CITIES,
    SORT_PRICE,
    CLEAR_TICKETS,
    FILTER_PRICE,
    SET_FAVORITES,
    DELETE_FAVORITES,
    MODIFY_FROM_CART,
} from "../Constants/flights";


export function getFlights() {
    return async function (dispatch) {
        const res = await axios.get(`${BACK_NET}/api/tickets/allPackages`);
        dispatch({
            type: GET_FLIGHTS,
            payload: res.data
        })
    }
}

export function getAllFlights() {
    return async function (dispatch) {
        const res = await axios.get(`${BACK_NET}/api/flights/all`);
        dispatch({
            type: GET_ALL_FLIGHTS,
            payload: res.data
        })
    }
}

export function getCities() {
    return async function (dispatch) {
        const res = await axios.get(`${BACK_NET}/api/flights/cities`)
        dispatch({
            type: GET_CITIES,
            payload: res.data
        })
    }
}

export function getFlightsByRoute(departure, arrival, date) {
    return async function (dispatch) {
        const res = await axios.get(`${BACK_NET}/api/flights/search?departureCity=${departure}&arrivalCity=${arrival}&departureDate=${date}`);
        dispatch({
            type: GET_FLIGHTS_BY_ROUTE,
            payload: res.data
        })
    }
}

export function clearGetFlightsByRoute() {
    return async function (dispatch) {
        dispatch({
            type: CLEAR_GET_FLIGHTS_BY_ROUTE,
            payload: null
        })
    }
}

export function sortAction(payload) {
    return async function (dispatch) {
        dispatch({
            type: SORT_PRICE,
            payload: payload
        })
    }
}

export function filterPrice(payload) {
    return async function (dispatch) {
        dispatch({
            type: FILTER_PRICE,
            payload: payload
        })
    }
}

export function setFavorites(payload) {
    return async function (dispatch) {
        dispatch({
            type: SET_FAVORITES,
            payload: payload
        })
    }
}

export function deleteFavorites(payload) {
    return async function (dispatch) {
        dispatch({
            type: DELETE_FAVORITES,
            payload: payload
        })
    }
}

export const getSuccess = payload => {
    return {
        type: GET_FLIGHTS_SUCCESS,
        payload
    }
}

export const getError = () => {
    return {
        type: GET_FLIGHTS_ERROR
    }
}

export const addToCart = (ticket) => {
    return {
        type: ADD_TO_CART,
        payload: ticket
    }
}

export const setTicket = (ticket) => {
    return {
        type: SET_TICKET,
        payload: ticket
    }
}

export const clearTickets = () => {
    return {
        type: CLEAR_TICKETS
    }
}

export const postTicket = (ticket) => {
    return {
        type: POST_TICKET,
        payload: ticket
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id,
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const modifyFromCart = (modify) => {
    return {
        type: MODIFY_FROM_CART,
        payload: modify
    }
}

