"use strict";

(function () {

var x = 2;
while (x <= 65536) {
    console.log(x);
    x *= 2;
}

var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5

do {
    var clientCones = Math.floor(Math.random() * 5) + 1;
    if ((allCones - clientCones) < 0){
        console.log('Sorry I cannot sell you ' + clientCones + ' I only have ' + allCones + ' left.')
        continue;
    }
    console.log('I have ' + allCones + ' left.');
    console.log(clientCones + ' cones sold.');
    allCones -= clientCones;
}while (allCones > 0);

console.log('No more cones to sell!');

})();
