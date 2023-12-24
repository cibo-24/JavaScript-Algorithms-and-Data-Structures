// Arrays'ın içerisinden index numarasına göre veriyi kaldırmak için splice() metodunu kullanabiliriz.
// splice(), en fazla 3 parametre alabilir.


let array = ["today", "was", "not", "so", "great"];
array.splice(2,2); // today, was, great

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1,4);
// Only change code above this line
console.log(arr);