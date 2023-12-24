// ... spread operatürü, diziden kolayca eleman kopyalanmasını sağlar.

let array = [true, true, undefined, null];
let thatArray = [...array];

// yeni dizi thatArray artık array dizisinin elemanlarını almış oldu.

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // change code below this line
      newArr.push([...arr]);
      // change code above this line
      num--;
    }
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(copyMachine([true, false, true], 2));