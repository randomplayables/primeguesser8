export function isPrime(num: number): boolean {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

export function getPrimesInRange(min: number, max: number): number[] {
  const primes: number[] = [];
  const start = Math.max(min, 2);
  for (let i = start; i <= max; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

export function getRandomPrime(min: number, max: number): number {
  const primes = getPrimesInRange(min, max);
  if (primes.length === 0) {
    throw new Error(`No prime numbers found in range ${min} to ${max}`);
  }
  const index = Math.floor(Math.random() * primes.length);
  return primes[index];
}