// var anahtar sözcüğü :  global oalrak veya bir fonksiyon içinde bildirilmişse yerel olarak kullanılabilir.
// let anahtar sözcüğü :  bir blok, deyim veya ifade içinde, değişkenin kapsamı o blok, deyim veya ifadeyle sınırlıdır.

function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  