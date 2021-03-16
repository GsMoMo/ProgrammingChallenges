const productFib = (prod) => {
  let index = 3;
  let fn = 0;
  let fn_1 = 0;

  do {
    fn = fib(index);
    fn_1 = fib(index + 1);

    index++;

    if (prod % fn === 0) {
      if (prod / fn == fn_1) {
        return [fn, fn_1, true]
      }

    } else {
      continue;
    }

  } while ((fn * fn_1) < prod);

  return [fn, fn_1, false];
}

const fib = (n) => {
  if (n < 2) {
    return n;
  } else {
    return (fib(n - 1) + fib(n - 2));
  }
}

console.log(fib(8))