import React, { useState } from 'react'

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => setGood(good + 1)
  const neutralClick = () => setNeutral(neutral + 1)
  const badClick = () => setBad(bad + 1)

  const feedbackAll = () => (good + neutral + bad)
  const feedbackAverage = () => {
    if ((good + neutral + bad) === 0) return 0
    return (good - bad)/(good + neutral + bad)
  }
  const feedbackPositivePercent = () => {
    if ((good + neutral + bad) === 0) return 0
    return ((good)/(good + neutral + bad))*100
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" handleClick={goodClick} />
      <Button text="neutral" handleClick={neutralClick} />
      <Button text="bad" handleClick={badClick} />
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {feedbackAll()}</p>
      <p>average {feedbackAverage()}</p>
      <p>positive {feedbackPositivePercent()} %</p>
    </div>
  )
}

export default App
