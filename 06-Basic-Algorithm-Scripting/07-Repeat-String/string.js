function repeatStringNumTimes(str, num) {
  
    if (num <= 0) {
      return "";
    }
  
    let result = "";
  
    for (let i = 0; i < num; i++) {
      result += str;
    }
  
    return result;
  }
  
  
  let repeatedString = repeatStringNumTimes("abc", 3);
  console.log(repeatedString); // Çıktı: "abcabcabc"
  