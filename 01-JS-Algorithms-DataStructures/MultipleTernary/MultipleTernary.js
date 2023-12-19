function checkSign(num) {
    return num === 0 ? "zero" : num > 0 ? "positive" : "negative";
  }
  
  console.log(checkSign(10));  // "positive"
  console.log(checkSign(-5));  // "negative"
  console.log(checkSign(0));   // "zero"
  console.log("https://github.com/cibo-24");