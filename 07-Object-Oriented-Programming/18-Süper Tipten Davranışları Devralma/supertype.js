function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line
// Animal objectinin prototype'lerini kopyalayıp yeni bir object oluşturmak için aşağıda ki gibi bir yol izledik.

// let duck = new Animal(); ile aşağıda ki aynı şeyi ifade eder ancak aşağıdakini kullanmak daha iyidir.
let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line