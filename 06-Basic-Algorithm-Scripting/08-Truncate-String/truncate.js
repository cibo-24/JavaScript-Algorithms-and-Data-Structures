function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
  
    return str.slice(0, num) + "...";
  }
  
  let truncatedString = truncateString("A-tisket a-tasket A green and yellow basket", 8);
  console.log(truncatedString); // Çıktı: "A-tisket..."
  