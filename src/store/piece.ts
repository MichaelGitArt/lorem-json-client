import type { MaybeRef } from '@vueuse/core'
import { cloneDeep } from 'lodash-es'
import { useUserStore } from './user'
import * as pieceService from '@/services/pieces.service'
import type { IPiece } from '@/types/Piece'

interface PieceState {
  pieces: any[]
}

const piecePlaceholder: IPiece = {
  _id: 'create',
  name: 'Example',
  json: '{ "value": 10 }',
}

export const usePieceStore = defineStore('piece', {
  state: (): PieceState => ({
    pieces: [],
  }),

  actions: {
    async  getPiece(idRef: MaybeRef<string>): Promise<IPiece> {
      const id = unref(idRef)

      if (id === 'create')
        return cloneDeep(piecePlaceholder)

      const { data } = await pieceService.getPiece(id)

      if (!data.success)
        return cloneDeep(piecePlaceholder)

      return data.data
    },

    async  deletePiece(idRef: MaybeRef<string>): Promise<IPiece> {
      const id = unref(idRef)

      const userStore = useUserStore()

      const { data } = await pieceService.deletePiece({
        id,
        token: userStore.token!,
      })

      return data.success
    },

    async  getPieces(): Promise<IPiece[]> {
      const userStore = useUserStore()

      const pieces = await pieceService.getPieces({
        token: userStore.token!,
      }).then(res => res.data.data)

      this.pieces = pieces

      return pieces
    },

    async createPiece({ name, json }: { name: string; json: string }) {
      const userStore = useUserStore()

      const { data } = await pieceService.createPiece({
        name,
        json,
        token: userStore.token!,
      })

      if (data.success) {
        this.pieces.push(data.data)
        return data.data
      }

      return null
    },

    async updatePiece({ name, json, id }: { name: string; json: object; id: string }) {
      const userStore = useUserStore()

      const { data } = await pieceService.updatePiece({
        piece: {
          name,
          json: JSON.stringify(json),
        },
        id,
        token: userStore.token!,
      })

      return data.data
    },

  },
})
