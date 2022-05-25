import { useState, useEffect } from 'react'
import { InputForm } from './components/InputForm'
import { ResultHistory } from './components/ResultHistory'
import { Result } from './components/Result'

import { useGuessHistory } from './hooks/useGuessHistory'
import { resolveGuess } from './utils/resolveGuess'
import './App.css'

const dictionary = ['eagle', 'bison', 'dogie', 'horse', 'mouse']

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

const randomGuessWord = dictionary[getRandomInt(dictionary.length)]

function App() {
  const [wordToGuess, setWordToGuess] = useState(randomGuessWord)
  const [guess, setGuess] = useState('')
  const [charactersToRender, setCharactersToRender] = useState([])
  const storedGuesses = useGuessHistory(charactersToRender)

  // resolve
  useEffect(() => {
    const resolvedGuess = resolveGuess(guess, wordToGuess)
    setCharactersToRender(resolvedGuess)
  }, [guess, wordToGuess])

  return (
    <div className="App">
      <h1>Guess your word</h1>
      <ResultHistory storedGuesses={storedGuesses} />
      <Result charactersToRender={charactersToRender} />
      <InputForm setGuess={setGuess} />
    </div>
  )
}

export default App
