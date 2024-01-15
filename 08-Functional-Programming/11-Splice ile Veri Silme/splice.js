function nonMutatingSplice(cities) {
    // Use slice to create a new array with the first three items
    return cities.slice(0, 3);
  }
  
 
  const originalCities = ["City1", "City2", "City3", "City4", "City5"];
  const result = nonMutatingSplice(originalCities);
  
  console.log(result); // Output: ["City1", "City2", "City3"]
  console.log(originalCities); // Original array is not mutated
  