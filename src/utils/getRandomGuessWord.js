import { getRandomInt } from './getRandomInt'

export const getRandomGuessWord = () => {
  const dictionary = ['eagle', 'bison', 'dogie', 'horse', 'mouse']

  return dictionary[getRandomInt(dictionary.length)]
}
