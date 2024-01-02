function confirmEnding(str, target) {
  
    let ending = str.slice(-target.length);
  
    return ending === target;
  }
  
  let result = confirmEnding("Bastian", "n");
  console.log(result); // Çıktı: true