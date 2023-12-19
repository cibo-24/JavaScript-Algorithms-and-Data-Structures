// rest parametresi: dizi olarak ele alınabilir, böylece dizi elemalarını işlemek için dizi metodları veya döngüler kullanabiliriz.
// bir fonksiyona değişken sayıda argüman göndermek ve bu argümanları dizi içinde işlemek için kullanılır.
// rest parametresi içerisine değişken sayıda yani farklı değişkenler alabilir.

const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
  
  console.log(sum(1, 2, 3, 4, 5));
  console.log(sum('string',null,[1,2,3]));