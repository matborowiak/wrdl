export const resolveGuess = (guess, wordToGuess) => {
  const guessCharacters = guess.split('')
  const charactersToGuess = wordToGuess.split('')
  const resolvedGuess = guessCharacters.map((guessCharacter, index) => {
    const exists = charactersToGuess.includes(guessCharacter)
    const isInPosition = charactersToGuess[index] === guessCharacter

    return {
      guessCharacter,
      exists,
      isInPosition,
    }
  })
  return resolvedGuess
}
