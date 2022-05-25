import { useEffect } from 'react'
import { Result } from './Result'

export const ResultBoard = ({ storedGuesses }) => {
  console.log({ storedGuesses })
  return storedGuesses.map((charactersToRender, index) => {
    return <Result key={index} charactersToRender={charactersToRender} />
  })
}
