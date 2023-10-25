class Thermostat {
    constructor(fahrenheit) {
      this._temperature = fahrenheit;
    }
  

    get temperature() {
      return (5 / 9) * (this._temperature - 32);
    }
  
  
    set temperature(celsius) {
      this._temperature = (celsius * 9) / 5 + 32;
    }
  }
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius