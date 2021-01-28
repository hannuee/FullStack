import React, { useState } from 'react'

// Tools:
const randomIntFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const createArrayOfZeroes = (amount) => {
  let zeroesArray = new Array(amount)
  for (var i = 0; i < zeroesArray.length; i++) {
    zeroesArray[i] = 0
  }
  return zeroesArray
}
const copyArrayAndAddOneToIndex = (arrayToBeCopied, index) => {
  const copy = [...arrayToBeCopied]
  copy[index] += 1
  return copy
}
const indexOfBiggestNumber = (array) => {
  let biggestIndex = 0
  for (var i = 0; i < array.length; i++) {
    if (array[biggestIndex] < array[i]) biggestIndex = i
  }
  return biggestIndex
}

// Components:
const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const randomClick = () => setSelected(randomIntFromRange(0, anecdotes.length - 1))

  // Voting mechanism:
  const [votes, setVotes] = useState(createArrayOfZeroes(anecdotes.length))
  const voteClick = () => setVotes(copyArrayAndAddOneToIndex(votes, selected))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br />
      has {votes[selected]} votes<br />
      <Button text="vote" handleClick={voteClick} />
      <Button text="next anecdote" handleClick={randomClick} />
      <h1>Anecdote with most votes</h1>
      {anecdotes[indexOfBiggestNumber(votes)]}
    </div>
  )
}

export default App

