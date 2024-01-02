function booWho(bool) {
 
    return typeof bool === 'boolean';
  }
  
  let result = booWho(null);
  console.log(result); // Output: false
  