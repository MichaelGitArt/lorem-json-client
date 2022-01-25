import { axiosClient } from './axiosClient'

export const login = (data: any) =>
  axiosClient.post('/login', data)

export const register = (data: any) =>
  axiosClient.post('/register', data)
