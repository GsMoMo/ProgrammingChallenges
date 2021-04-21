let fibonacci = n => (n === 0 || n === 1)? n : fibonacci(n - 1) + fibonacci(n - 2)

const memorize = fn => {
  let cache = {}

  return (...args) => {
    if (cache[args] === undefined) cache[args] = fn.apply(this, args)

    return cache[args]
  }
}

fibonacci = memorize(fibonacci)

console.log(fibonacci(50))