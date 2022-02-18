import { axiosClient } from './axiosClient'

export const getPieces = ({ token }: { token: string }) =>
  axiosClient.post('/get-pieces', {
    token,
  })

export const getPiece = (id: string) =>
  axiosClient.post('/get-piece', {
    id,
  })

export const deletePiece = ({ id, token }: { id: string; token: string }) =>
  axiosClient.post('/delete-piece', {
    id,
    token,
  })

export const createPiece = (data: any) =>
  axiosClient.post('/create-piece', data)

export const updatePiece = ({ id, token, piece }: { id: string; token: string; piece: object }) =>
  axiosClient.post('/update-piece', {
    id,
    token,
    piece,
  })
