"use strict";
(function () {


while (true) {
    var userNumber = +prompt("I need an odd number between 1 and 50");
    if (userNumber % 2 !== 0 && userNumber > 0 && userNumber < 51){
        break;
    }
}

console.log('Number to skip: ' + userNumber);

function oddNumbersSkippingUserNumber (num) {
    for (var i = 1; i <= 50; i++) {
        if(i === num){
            console.log('yikes! skipping number: ' + num);
            continue;
        }
        console.log("here's an odd number: " + i);
    }
    return num;
}
oddNumbersSkippingUserNumber(userNumber);


})();
