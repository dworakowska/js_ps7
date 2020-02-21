const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const findPrimes = max => {
  let primes = [];
  for (let i = 0; i <= max; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};

let found = findPrimes(100);
console.log(found);
console.log(found.length);
