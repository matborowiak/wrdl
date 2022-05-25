import { useState } from 'react'

export const InputForm = ({ setGuess }) => {
  const [guessInputValue, setGuessInputValue] = useState('')
  const [showErrorLabel, setShowErrorLabel] = useState(false)

  const inputSubmitHandler = (e) => {
    e.preventDefault()
    const guess = e.target.elements.guess.value

    if (guess.length === 5) {
      setGuess(guess)
      setShowErrorLabel(false)
    } else {
      setShowErrorLabel(true)
      console.log('input must be 5 characters long')
    }
  }

  const onChangeHandler = (e) => {
    setGuessInputValue(e.target.value)
  }

  return (
    <form style={style.form} onSubmit={inputSubmitHandler}>
      <div style={style.input}>
        {showErrorLabel && (
          <label style={style.label} to="guess">
            input must be 5 characters long
          </label>
        )}
        <input
          value={guessInputValue}
          onChange={onChangeHandler}
          name="guess"
        />
      </div>
      <input type="submit" />
    </form>
  )
}

const style = {
  form: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '200px',
    margin: 'auto',
  },
  input: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '200px',
  },
  label: {
    color: 'red',
    position: 'absolute',
    bottom: '-48px',
  },
}
