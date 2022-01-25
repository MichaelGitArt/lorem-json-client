import { axiosClient } from './axiosClient'

export const getPieces = () =>
  axiosClient.get('/pieces')
