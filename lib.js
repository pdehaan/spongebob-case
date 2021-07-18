module.exports = function toSpongeBobCase(str = "", alwaysLowerCase = ["i", "o"], alwaysUpperCase= ["l"]) {
  if (!Array.isArray(alwaysLowerCase)) {
    alwaysLowerCase = Array.from(alwaysLowerCase.toString());
  }
  if (!Array.isArray(alwaysUpperCase)) {
    alwaysUpperCase = Array.from(alwaysUpperCase.toString());
  }
  // Lowercase the string and convert into an array of characters.
  const chars = Array.from(str.toLowerCase())
    // Loop through each character and uppercase the odd letters.
    .map((char, idx) => {
      if (alwaysLowerCase.includes(char)) {
        return char;
      }
      if (alwaysUpperCase.includes(char) || idx % 2) {
        return char = char.toUpperCase();
      }
      return char;
    });
  // Convert the array of characters back into a string.
  return chars.join("");
};
