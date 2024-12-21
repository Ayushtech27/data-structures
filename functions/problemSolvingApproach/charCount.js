/* Write a function which takes in a string and return counts of each character in the string. */

export function charCount(str) {
  /* make an object to return at the end.
   */
  let result = {};
  /* loop over string, for each character... */
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // if the char is a number/letter and is a key in object, add one to count
    if (/[a-z0-9]/.test(char)) {
      // if character is something else (space, period, etc.) don't do anything.
      if (result[char] > 0) {
        result[char]++;
        // if the char is a number/letter and not in the object, add it to object and set value to 1.
      } else {
        result[char] = 1;
      }
    }
  }
  // if character is something else (space, period, etc.) don't do anything.
  /* return object at the end. */
  return result;
}

export function optimizedCharCount(str) {
  var obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      // if (result[char] > 0) {
      //   result[char]++;
      // } else {
      //   result[char] = 1;
      // }
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
