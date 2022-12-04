const reverseString = function(input) {
    let reversedString = '';
    let index = input.length - 1;
    for(let i = 1;i <= input.length;i++){
        reversedString += input[index];
        index -= 1;
    }
    return reversedString

};

// Do not edit below this line
module.exports = reverseString;
