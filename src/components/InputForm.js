import { useState } from 'react'
import { RestartButton } from './RestartButton'

export const InputForm = ({ setGuess }) => {
  const [guessInputValue, setGuessInputValue] = useState('')
  const [showErrorLabel, setShowErrorLabel] = useState(false)

  const inputSubmitHandler = (e) => {
    e.preventDefault()
    const guess = e.target.elements.guess.value

    if (guess.length === 5) {
      setGuess(guess)
      setShowErrorLabel(false)
      setGuessInputValue('')
    } else {
      setShowErrorLabel(true)
    }
  }

  const onChangeHandler = (e) => {
    setGuessInputValue(e.target.value)
  }

  return (
    <form style={styles.form} onSubmit={inputSubmitHandler}>
      <div>
        <input
          value={guessInputValue}
          onChange={onChangeHandler}
          name="guess"
        />
        <input type="submit" />
        <RestartButton />
      </div>

      {showErrorLabel && (
        <label style={styles.label} to="guess">
          {'Input must be 5 characters long !'}
        </label>
      )}
    </form>
  )
}

const styles = {
  form: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    maxWidth: '300px',
    margin: 'auto',
  },
  label: {
    color: 'red',
    position: 'absolute',
    bottom: '-48px',
  },
}
