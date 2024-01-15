function palindrome(str) {
    
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }
  

  console.log(palindrome("eye")); // Output: true
  console.log(palindrome("RaceCar")); // Output: true
  console.log(palindrome("2A3*3a2")); // Output: true
  console.log(palindrome("not a palindrome")); // Output: false
  