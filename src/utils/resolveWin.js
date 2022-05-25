export const resolveWin = (guessArray) => {
  if (guessArray.length === 0) return false
  return guessArray.every(({ isInPosition }) => isInPosition === true)
}
