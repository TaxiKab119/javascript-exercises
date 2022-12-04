const removeFromArray = function(inputArray,...removePlease) {
    
    for(let i = 0;i < removePlease.length; i++){
        let arrayIndex = 0;
        do{
            if (inputArray[arrayIndex] === removePlease[i]){
                inputArray.splice(arrayIndex,1);
            } else {
                arrayIndex +=1;
            }
        } while(arrayIndex < inputArray.length)
    }
    return inputArray
};

// Do not edit below this line
module.exports = removeFromArray;
