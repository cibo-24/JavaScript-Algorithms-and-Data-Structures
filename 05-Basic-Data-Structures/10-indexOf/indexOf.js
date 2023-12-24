// dizi içindeki verileri indexOf ile hangi index içerisinde olduğunu indexOf() metodu ile kontrol edebiliriz.

function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true : false;
  }
  console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
