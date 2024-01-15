function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str
      .split('')
      .map(char => {
        if (char.match(/[A-Z]/)) {
          const index = (alphabet.indexOf(char) + 13) % 26;
          return alphabet[index];
        }
        return char;
      })
      .join('');
  }
  

  console.log(rot13("SERR PBQR PNZC")); // Output: FREE CODE CAMP
  