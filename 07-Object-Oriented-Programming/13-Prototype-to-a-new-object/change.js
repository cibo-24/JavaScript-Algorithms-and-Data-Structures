function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    numLegs: 3,
    eat: function() {
      console.log("Dog is eating");
    },
    describe: function(){
      console.log("My dog is cute" + this.name);
    }
  };