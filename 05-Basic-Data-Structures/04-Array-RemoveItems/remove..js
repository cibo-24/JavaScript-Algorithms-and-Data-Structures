// Dizinin sonundan veri silmek için pop() ve shift() metodları kullanılır.
// pop(), dizinin sonundan elemanları siler.
// shift(), dizinin başından elemanları siler.

let greetings = ["what up?",2,"see ya!"];
greetings.pop(); // "what up?" 2
greetings.shift(); // 2

function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));