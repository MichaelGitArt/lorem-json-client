import { axiosClient } from './axiosClient'

export const getPieces = ({ token }: {token: string}) =>
  axiosClient.post('/get-pieces', {
    token,
  })

export const getPiece = (id: any) =>
  axiosClient.post('/get-single-piece', {
    id,
  })

export const createPiece = (data: any) =>
  axiosClient.post('/create-piece', data)
