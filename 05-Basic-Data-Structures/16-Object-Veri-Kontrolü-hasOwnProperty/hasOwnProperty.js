// object içerisinde ki belirli bir özelliğin olup olmadığını kontrol etmek için 2 yol vardır.
// hasOwnProperty() ve in anahtar sözcüğüdür.

let users = {
    id: 2321323,
    name: 'Kenan',
    no: true,
    working: true,
};

users.hasOwnProperty('Alan');
'Alan' in users;

// bu iki yolda object içerisinde ki veriyi kontrol eder ve boolean dönderir.


let users2 = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
   return userObj.hasOwnProperty("Alan") &&
      userObj.hasOwnProperty("Jeff") &&
      userObj.hasOwnProperty("Sarah") &&
      userObj.hasOwnProperty("Ryan");
  }