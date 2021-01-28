import React, { useState } from 'react'

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({text, value}) => <p>{text} {value}</p>

const Statistics = ({good, neutral, bad}) => {
  const feedbackAll = () => (good + neutral + bad)
  const feedbackAverage = () => {
    if ((good + neutral + bad) === 0) return 0
    return (good - bad)/(good + neutral + bad)
  }
  const feedbackPositivePercent = () => {
    if ((good + neutral + bad) === 0) return 0
    return ((good)/(good + neutral + bad))*100 + " %"
  }

  if ((good + neutral + bad) === 0) return <><h1>Statistics</h1><p>No feedback given</p></>

  return (
    <>
      <h1>Statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={feedbackAll()} />
      <StatisticLine text="average" value={feedbackAverage()} />
      <StatisticLine text="positive" value={feedbackPositivePercent()} />
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => setGood(good + 1)
  const neutralClick = () => setNeutral(neutral + 1)
  const badClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" handleClick={goodClick} />
      <Button text="neutral" handleClick={neutralClick} />
      <Button text="bad" handleClick={badClick} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
