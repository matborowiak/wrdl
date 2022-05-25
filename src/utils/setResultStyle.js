export const setResultStyle = (exists, isInPosition) => {
  if (exists && isInPosition) return { color: 'green' }
  if (exists) return { color: 'yellow' }
  return { color: 'grey' }
}
