function findElement(arr, func) {
    return arr.find(func);
  }
  
  
  let result = findElement([1, 2, 3, 4], num => num % 2 === 0);
  console.log(result); // Output: 2
  