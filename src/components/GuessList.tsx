import React from 'react'
import { Guess } from '../types'
import Feedback from './Feedback'

type GuessListProps = {
  guesses: Guess[]
}

const GuessList: React.FC<GuessListProps> = ({ guesses }) => {
  if (guesses.length === 0) {
    return null
  }

  return (
    <ul>
      {guesses.map((guess, index) => (
        <li key={index}>
          <span>{guess.value}</span>
          <Feedback
            isPrime={guess.isPrime}
            isCorrect={guess.isCorrect}
            hint={guess.hint}
          />
        </li>
      ))}
    </ul>
  )
}

export default GuessList