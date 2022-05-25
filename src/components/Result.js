import { setResultStyle } from '../utils/setResultStyle'

export const Result = ({ charactersToRender }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {charactersToRender.map(
        ({ guessCharacter, exists, isInPosition }, index) => (
          <h1 key={index} style={setResultStyle(exists, isInPosition)}>
            {guessCharacter}
          </h1>
        )
      )}
    </div>
  )
}
