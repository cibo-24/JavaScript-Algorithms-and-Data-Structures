function bouncer(arr) {
    
    let filteredArray = arr.filter(function(value) {
     
      return Boolean(value);
    });
  
   
    return filteredArray;
  }
  

  let result = bouncer([7, "ate", "", false, 9]);
  console.log(result); // Çıktı: [7, "ate", 9]
  