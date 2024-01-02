function getIndexToIns(arr, num) {

    let sortedArray = arr.slice().sort(function(a, b) {
      return a - b;
    });

    let index = 0;
    while (index < sortedArray.length && sortedArray[index] < num) {
      index++;
    }
  
    return index;
  }
  
  let result = getIndexToIns([40, 60], 50);
  console.log(result); // Çıktı: 1
  