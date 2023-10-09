const s = [5, 7, 2];

function editInPlace() {
  
  [s[0], s[2]] = [s[2], s[0]];
  
  [s[1], s[2]] = [s[2], s[1]];
}

editInPlace();

console.log(s);