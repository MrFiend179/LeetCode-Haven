var customSortString = function (order, s) {
    const counts = {}; // Object to store the count of characters in s
    const result = []; // Array to store the final result

    // Count occurrences of characters in s
    for (const char of s) {
        counts[char] = (counts[char] || 0) + 1; // Increment count of character
    }

    // Append characters from s according to order
    for (const char of order) {
        if (counts[char]) { // If the character exists in s
            result.push(char.repeat(counts[char])); // Append character according to its count
            counts[char] = 0; // Set count to 0 to mark it as appended
        }
    }

    // Append remaining characters from s
    for (const char in counts) {
        if (counts[char]) { // If the character count is not zero (i.e., not appended)
            result.push(char.repeat(counts[char])); // Append the character according to its count
        }
    }

    return result.join(''); // Join all characters in the result array and return
};

