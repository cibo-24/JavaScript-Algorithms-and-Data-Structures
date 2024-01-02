function frankenSplice(arr1, arr2, n) {
    
    let arr2Copy = arr2.slice();

    arr2Copy.splice(n, 0, ...arr1);
  
    return arr2Copy;
  }


  let result = frankenSplice([1, 2, 3], [4, 5, 6], 1);
  console.log(result); // Output: [4, 1, 2, 3, 5, 6]
  