import { userStore } from './user'
import * as pieceService from '@/services/pieces.service'

interface PieceState {
  pieces: any[]
}

export const pieceStore = reactive<PieceState>({
  pieces: [],
})

export const getPieces = async() => {
  const pieces = await pieceService.getPieces({
    token: userStore.value.token!,
  }).then(res => res.data.data)

  pieceStore.pieces = pieces

  return pieces
}

export const createPiece = async({ name, json }: { name: string; json: string }) => {
  const piece = await pieceService.createPiece({
    name,
    json,
    token: userStore.value.token!,
  })

  if (piece) {
    pieceStore.pieces.push(piece)
    return piece
  }

  return null
}
