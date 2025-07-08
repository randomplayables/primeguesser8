import React from 'react'
import { Guess } from '../types'

interface FeedbackProps {
  lastGuess?: Guess
}

const Feedback: React.FC<FeedbackProps> = ({ lastGuess }) => {
  if (!lastGuess) {
    return <p className="feedback">Enter a guess to start the game.</p>
  }

  const { value, result } = lastGuess

  switch (result) {
    case 'correct':
      return <p className="feedback success">{`Great job! ${value} is the correct prime number!`}</p>
    case 'not-prime':
      return <p className="feedback error">{`${value} is not a prime number. Try again!`}</p>
    case 'too-low':
      return <p className="feedback warning">{`${value} is too low. Aim higher!`}</p>
    case 'too-high':
      return <p className="feedback warning">{`${value} is too high. Try a smaller number!`}</p>
    default:
      return null
  }
}

export default Feedback
