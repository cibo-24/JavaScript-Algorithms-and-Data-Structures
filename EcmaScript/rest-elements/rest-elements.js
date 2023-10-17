function removeFirstTwo(list) {
    const [, , ...rest] = list;
    return rest;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);
  
  console.log(sourceWithoutFirstTwo); 