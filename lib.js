module.exports = function toSpongeBobCase(str = "") {
  // Lowercase the string and convert into an array of characters.
  const chars = str.toString().toLowerCase().split("");
  // Uppercase every second character.
  for (let idx = 0; idx < chars.length; idx += 2) {
    chars[idx] = chars[idx].toUpperCase();
  }
  // Convert the array of characters back into a string.
  return chars.join("");
};
