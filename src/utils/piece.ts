import type { MaybeRef } from '@vueuse/core'
import type { ComputedRef } from 'vue'

export const genPieceApiLink = (pieceId: MaybeRef<string | null>): ComputedRef<string> => {
  return computed(() => unref(pieceId) === null ? '...' : `${import.meta.env.VITE_SERVER_URL}/api/piece/${unref(pieceId)}`)
}
