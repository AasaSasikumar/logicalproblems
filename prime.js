
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for(let i = 2; i < n; i++) {
        if(n % i === 0) return false;
    }
    return true;
}
const count=60
const numbers = Array.from({ length: count}, (v,k) => k + 1);
const primes = numbers.filter(n => isPrime(n))
console.log("Primes:", primes)