// Nesneler-objects, anahatar ve değer çiftlerinden oluşan koleksiyonlardır.
// özellikler (keys) adı verilen benzersiz tanımlayıcılarla eşlenen veri parçalarıdır (değerler).

const tekkenCharacter = {
    player: "Hwoarang",
    fightingStyle: 'Tae Kwon Doe',
    human: true
};

// yukarıda ki object'e başka bir anahtar eklemek istersek eğer,

tekkenCharacter.origin = "South Korea";

// tırnak işaretli bir veri aktarmak istiyorsak eğer,

tekkenCharacter['hair color'] = 'orange';

// değişkenli bir veri aktarmak istersek eğer,

const eyes = "eye color";
tekkenCharacter[eyes] = "brown";

console.log(tekkenCharacter);


const foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
  foods.bananas = 13;
  foods["grapes"] = 35;
  let fruit = "strawberries";
  foods[fruit] = 27;
  
  // Only change code above this line
  
  console.log(foods);