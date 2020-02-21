class Fibonacci {
  array = [];

  constructor(n) {
    this.fibonacci(n);
  }

  fibonacci(n) {
    let a = 1,
      b = 0,
      temp;

    while (n >= 0) {
      this.array.push(a);
      temp = a;
      a = a + b;
      b = temp;
      n--;
    }

    return b;
  }

  printSequence() {
    console.log(this.array);
  }

  printSum() {
    const reducer = (acc, current) => acc + current;
    let sum = this.array.reduce(reducer);
    console.log(sum);
  }
}

let f = new Fibonacci(10);
f.printSequence();
f.printSum();
