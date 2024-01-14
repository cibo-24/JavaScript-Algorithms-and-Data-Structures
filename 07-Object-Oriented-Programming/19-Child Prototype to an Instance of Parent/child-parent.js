function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
// Dog artık Animal'in prototype'larını aldı. Bu durumda oluşturulan yeni constructor artık animal prototype'larını alır.


Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();