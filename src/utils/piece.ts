export const genPieceApiLink = (pieceId: string) => {
  return `${import.meta.env.VITE_SERVER_URL}/api/piece/${pieceId}`
}
