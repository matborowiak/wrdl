import { useState, useEffect } from 'react'
import { InputForm } from './components/InputForm'
import { ResultBoard } from './components/ResultBoard'
import { useGuessHistory } from './hooks/useGuessHistory'
import { resolveGuess } from './utils/resolveGuess'
import './App.css'

const dictionary = ['eagle', 'bison', 'dogie', 'horse', 'mouse']

// const getRandomInt= (max) => {
//   return Math.floor(Math.random() * max);
// }

function App() {
  const [guess, setGuess] = useState('')
  const [wordToGuess, setWordToGuess] = useState('dogie')
  const [charactersToRender, setCharactersToRender] = useState([])
  const storedGuesses = useGuessHistory(charactersToRender)

  useEffect(() => {
    const resolvedGuess = resolveGuess(guess, wordToGuess)
    setCharactersToRender(resolvedGuess)
  }, [guess, wordToGuess])

  return (
    <div className="App">
      <h1>Guess your word</h1>
      <ResultBoard storedGuesses={storedGuesses} />
      <InputForm setGuess={setGuess} />
    </div>
  )
}

export default App
