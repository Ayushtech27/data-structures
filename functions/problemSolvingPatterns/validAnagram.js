/** Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. */
export function validAnagram(first, second) {
  // If the lengths are different, they can't be anagrams
  if (first.length !== second.length) {
    return false;
  }

  // Create a frequency map (counter) for the characters in the first string
  const lookup = {};

  // Count frequency of each character in the first string
  for (let i = 0; i < first.length; i++) {
    const letter = first[i];
    lookup[letter] = (lookup[letter] || 0) + 1;
  }

  // Check the second string against the frequency map
  for (let i = 0; i < second.length; i++) {
    const letter = second[i];

    // If the letter is not in the lookup or its count is 0, return false
    if (!lookup[letter]) {
      return false;
    }

    // Decrease the count for the letter
    lookup[letter] -= 1;
  }

  // If we reach here, the strings are anagrams
  return true;
}
