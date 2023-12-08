function checkXOEquality(str = "") {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    if (str == "") {
        throw new Error('there should be a string to check');
    }

    // Convert the string to uppercase to make the comparison case-insensitive
    const lowerCaseStr = str.toLowerCase();

    // Count the occurrences of 'X' and 'O'
    const countX = (lowerCaseStr.match(/x/g) || []).length;
    const countO = (lowerCaseStr.match(/o/g) || []).length;

    // Check if the counts are the same
    return countX === countO;
}

// Example usage:
try {
    //clear for console
    console.clear();

    const string1 = "XOXOXXOO";
    const string2 = "XxOoxo";
    const string3 = "XOOXex";
    const numberInput = 123; // Example of invalid input
    const ramdomInput = "%24jGt"; // Example of invalid input

    console.log(string1, checkXOEquality(string1)); // Output: true
    console.log(string2, checkXOEquality(string2)); // Output: true
    console.log(string3, checkXOEquality(string3)); // Output: false

    // Uncomment the lines below to test invalid input
    // console.log(numberInput, checkXOEquality(numberInput)); // This should throw an error
    // console.log(ramdomInput, checkXOEquality(ramdomInput)); // This should throw an error
    // console.log(undefined, checkXOEquality(undefined)); // This should throw an error
    // console.log('', checkXOEquality()); // This should throw an error
} catch (error) {
    console.error(error.message);
}
