import { useState } from 'react'

export const InputForm = ({ setGuess }) => {
  const [guessInputValue, setGuessInputValue] = useState('')

  const inputSubmitHandler = (e) => {
    e.preventDefault()
    const guess = e.target.elements.guess.value
    if (guess.length === 5) {
      setGuess(guess)
    } else {
      console.log('input must be 5 characters long')
    }
  }
  const onChangeHandler = (e) => {
    setGuessInputValue(e.target.value)
  }
  return (
    <form onSubmit={inputSubmitHandler}>
      <input value={guessInputValue} onChange={onChangeHandler} name="guess" />
      <input type="submit" />
    </form>
  )
}
