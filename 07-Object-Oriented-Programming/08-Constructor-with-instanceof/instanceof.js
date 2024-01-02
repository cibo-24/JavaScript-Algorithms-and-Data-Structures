// instanceof ile yeni yaratılan bir veriyi ana object'de olup olmadığnı sorgulayabiliriz.

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  let myHouse = new House(3);
  
  let isInstanceOfHouse = myHouse instanceof House;
  
  
  