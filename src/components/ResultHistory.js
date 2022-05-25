import { Result } from './Result'

export const ResultHistory = ({ storedGuesses }) =>
  storedGuesses.map((charactersToRender, index) => {
    return <Result key={index} charactersToRender={charactersToRender} />
  })
