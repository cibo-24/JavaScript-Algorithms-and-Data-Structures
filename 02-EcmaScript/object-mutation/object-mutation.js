// const veri tutucu her zaman verinin değiştirilmesini engelleyemeyez.
// bunu sağlamak için Object.freeze işlevini kullanabiliriz. Bu katı modu aktif hale getirir.

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
     Object.freeze(MATH_CONSTANTS);
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();
  console.log(PI); 
  