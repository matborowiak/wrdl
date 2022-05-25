import { useState } from 'react'
import { InputForm } from './components/InputForm'
import { ResultHistory } from './components/ResultHistory'
import { Result } from './components/Result'
import { getRandomGuessWord } from './utils/getRandomGuessWord'

import { useGuessHistory } from './hooks/useGuessHistory'
import { resolveGuess } from './utils/resolveGuess'
import './App.css'

const randomGuessWord = getRandomGuessWord()

const ResultsBoard = ({ guess }) => {
  const resolvedGuess = resolveGuess(guess, randomGuessWord)
  const storedGuesses = useGuessHistory(resolvedGuess)

  return (
    <div>
      <ResultHistory storedGuesses={storedGuesses} />
      <Result charactersToRender={resolvedGuess} />
    </div>
  )
}

function App() {
  const [guess, setGuess] = useState('')

  return (
    <div className="App">
      <h1>Guess your word</h1>
      <ResultsBoard guess={guess} />
      <InputForm setGuess={setGuess} />
    </div>
  )
}

export default App
