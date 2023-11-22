// petSting içerisinde bulunan öğelerinvarlığını test ettik. | operatörü içerisinde bir tane true'da olsa true döner
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

console.log(result); 