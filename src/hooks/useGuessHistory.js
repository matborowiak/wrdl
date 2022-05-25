import { useState, useEffect } from 'react'

export const useGuessHistory = (charactersToRender) => {
  const [storedGuesses, storeGuesses] = useState([])
  useEffect(() => {
    const storeArray = storedGuesses
    storeArray.push(charactersToRender)

    storeGuesses(storeArray)
  }, [charactersToRender, storedGuesses])

  return storedGuesses
}
