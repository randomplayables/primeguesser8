import React, { useState, FormEvent } from 'react';

interface GuessInputProps {
  onGuess: (guess: number) => void;
  disabled: boolean;
}

const GuessInput: React.FC<GuessInputProps> = ({ onGuess, disabled }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = parseInt(inputValue, 10);
    if (!isNaN(parsed)) {
      onGuess(parsed);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={disabled}
        min="2"
        placeholder="Enter a prime number"
      />
      <button type="submit" disabled={disabled || inputValue.trim() === ''}>
        Guess
      </button>
    </form>
  );
};

export default GuessInput;
