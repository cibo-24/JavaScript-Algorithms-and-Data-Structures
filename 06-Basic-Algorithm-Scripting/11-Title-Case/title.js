function titleCase(str) {
    let titleCaseArray = str.split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  
    
    return titleCaseArray.join(' ');
  }
  
  
  let result = titleCase("I'm a little tea pot");
  console.log(result); // Çıktı: "I'm A Little Tea Pot"
  