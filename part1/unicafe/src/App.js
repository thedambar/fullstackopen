import { useState } from 'react'

const Button = ({onClick, text}) => (<button onClick={onClick}>{text}</button>);

const Display = ({text, value}) => (<div>{text} {value}</div>);


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
      <h1>statistics</h1>
      <Display text='good' value={good} />
      <Display text='neutral' value={neutral} />
      <Display text='bad' value={bad} />
    </div>
  )
}

export default App;
