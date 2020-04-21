/**
 * @brief Authentication functions
 * @author Andrécio Costa
 * @date 17/04/2020
 */

export const TOKEN_KEY = "@pokeworld-Token"

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const login = (token) =>  localStorage.setItem(TOKEN_KEY, token)

export const logout = () => localStorage.removeItem(TOKEN_KEY)