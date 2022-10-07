import { useState } from 'react'

const Button = ({onClick, text}) => (<button onClick={onClick}>{text}</button>);

const StatisticsLine = ({text, value}) => (<tr><td>{text}</td><td>{value}</td></tr>);

const Statistics = ({good, bad, neutral}) => {
  if (good + bad + neutral === 0) {
    return (
      <>
      <h1>statistics</h1>
      <div>No feedback given.</div>
      </>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text='good' value={good} />
          <StatisticsLine text='neutral' value={neutral} />
          <StatisticsLine text='bad' value={bad} />
          <StatisticsLine text='average' value={(good - bad) / (good + bad + neutral)} />
          <StatisticsLine text='positive' value={(good / (good + bad + neutral) * 100) + ' %'} />
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good+1)} text='good' />
      <Button onClick={() => setNeutral(neutral+1)} text='neutral' />
      <Button onClick={() => setBad(bad+1)} text='bad' />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App;
