function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;


// Only change code above this line
Dog.prototype.bark = function () {
  console.log("Woof!");
}
let beagle = new Dog();
beagle.eat();
beagle.bark();