function letterCombinations(digits) {
    // Mapping of digits to letters
    const digitToLetters = {
        0: '0',
        1: '1',
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    
    const results = [];
    
    // Function to perform DFS
    function dfs(current, index) {
        // If the current combination is complete, add it to results
        if (index === digits.length) {
            if(current.length > 0) {
                results.push(current);
            }
            return;
        }
        
        // Get the letters that the current digit maps to,
        // and loop through them
        const letters = digitToLetters[digits[index]];
        for (let i = 0; i < letters.length; i++) {
            // Append the current letter to the current combination
            // and move on to the next digit
            dfs(current + letters[i], index + 1);
        }
    }
    
    // Start the DFS
    dfs('', 0);
    
    return results;
}

module.exports = letterCombinations;
