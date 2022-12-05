const leapYears = function(year) {
    // leap years are divisible by four
    // *however* years divisible by 100 are not leap years UNLESS they are divisible by 400

    if ((year % 4 == 0) && (year % 100 != 0)){
        return true
    } else if  (year % 400 == 0){
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
