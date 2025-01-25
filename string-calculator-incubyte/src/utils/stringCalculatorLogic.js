export function add(numbers) {
   //Handle Empty string
   numbers= numbers.replace(/\\n/g, '\n') // When you input \n, it’s treated as a string literal \\n, not an actual new line character
    if (!numbers) return 0;
    let delimiters = [",", "\n"];
    //Checking for custom delimiters
    if (numbers.startsWith("//")) {
        const justDelimiter = numbers.substring(2, numbers.indexOf("\n"));
        numbers = numbers.substring(numbers.indexOf("\n") + 1); // Remove delimiter line

        if (justDelimiter.startsWith("[") && justDelimiter.endsWith("]")) {
            // Handle multiple delimiters like //[***][%%]
            delimiters = justDelimiter
                .slice(1, -1) // Remove the outer square brackets
                .split("]["); // Split by "][" to get individual delimiters
        } else {
            // Single delimiter
            delimiters = [justDelimiter];
        }
    }
    // Split numbers using the specified delimiters
    let numbersArray = [numbers];

    for (const delimiter of delimiters) {
        let tempArray = [];
        for (const str of numbersArray) {
            // Split the current string using the current delimiter and add results to tempArray
            tempArray = tempArray.concat(str.split(delimiter)); 
        }
        // Update numbersArray to contain the newly split strings for the next iteration
        numbersArray = tempArray;
    }
    const checkNegative = numbersArray.filter((num) => num < 0);
    if (checkNegative.length) {
        throw new Error(`Please Enter only positive numbers ${checkNegative.join(", ")}`);
    }
    numbersArray = numbersArray.map((str) => str.trim()); // Remove whitespace
    if (numbersArray.some((str) => str === "" || isNaN(Number(str)))) {
        throw new Error("Invalid input. Please follow the below rules for a valid input");
    }
   return numbersArray.reduce((sum, num) => (num <= 1000 ? +sum + +num : sum), 0); 
   
}