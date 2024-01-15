function sumAll(arr) {
    arr.sort((a, b) => a - b);
    const [lower, higher] = arr;
    let sum = 0;
    for (let i = lower; i <= higher; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(sumAll([1, 4]));
  
  // 1 ve 4 arasında ki sayıların toplamı