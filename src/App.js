import { useState } from 'react'
import { InputForm } from './components/InputForm'
import { ResultHistory } from './components/ResultHistory'
import { RestartButton } from './components/RestartButton'
import { Result } from './components/Result'
import { getRandomGuessWord } from './utils/getRandomGuessWord'
import { resolveWin } from './utils/resolveWin'

import { useGuessHistory } from './hooks/useGuessHistory'
import { resolveGuess } from './utils/resolveGuess'
import './App.css'

const randomGuessWord = getRandomGuessWord()

function App() {
  const [guess, setGuess] = useState('')

  const resolvedGuess = resolveGuess(guess, randomGuessWord)
  const storedGuesses = useGuessHistory(resolvedGuess)
  const hasGuessed = resolveWin(resolvedGuess)

  if (hasGuessed) {
    return (
      <div className="App">
        <h1>YOU WON! KRAKEN RELEASED 🐙</h1>
        <Result charactersToRender={resolvedGuess} />
        <RestartButton />
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Guess your word</h1>
      <ResultHistory storedGuesses={storedGuesses} />
      <Result charactersToRender={resolvedGuess} />
      <InputForm setGuess={setGuess} />
    </div>
  )
}

export default App
