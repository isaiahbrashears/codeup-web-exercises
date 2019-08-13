"use strict";
(function () {




var numToMultiplyBy = Math.floor(Math.random() * 9) + 1;
function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + ' x ' + i + ' = ' + ( num * i));
    }
}
showMultiplicationTable(numToMultiplyBy);




for (var i = 1; i <= 10; i++){
    var numToCheck = Math.floor(Math.random() * 181) + 20;
    if(numToCheck % 2 === 0){
        console.log(numToCheck + ' is even');
    }else {
        console.log(numToCheck + ' is odd.');
    }
}




var x = 1;
for (var i = 1; i <= 9; i++ ){
    console.log( i * x);
    x = x + '1';
}




for (var i = 100; i > 0; i -= 5){
    console.log(i);
}

})();