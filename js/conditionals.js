"use strict";
(function () {


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/*
var doesUserWantToEnterNumber = confirm('would you like to enter a number?');

function usersNumberInformation(num) {
    if(doesUserWantToEnterNumber === true){
        num = +prompt('Then go ahead and enter a number');
        return isThisANumber(num);
    }
}


function isThisANumber(num) {
    if (isNaN(num)) {
        return  alert('thats not a number.');
    } else {
        return userNumberFacts(num);
    }
}


function userNumberFacts(num) {
    if (num % 2 === 0) {
        alert(num + ' is even!');
    } else {
        alert(num + ' is odd!');
    }
    alert(num + ' plus 100 is: ' + (num + 100));
    if (num > 0) {
        return  alert(num + ' is a positive number');
    } else if(num === 0){
        return alert(num + ' is neither positive nor negative.')
    }else{
        return alert(num + ' is a negative number');
    }
}



    usersNumberInformation();

/!* ########################################################################## *!/

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
/!**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 *!/
var userColor = prompt("what's your favorite color?");

function whatIsthisColor(color) {
   console.log(color);
    switch (color) {
        case('red'):
            color ='Red is the color of apples. Except for the ones that are green';
            break;
        case('orange'):
            color = 'Oranges are orange.';
            break;
        case('yellow'):
            color = 'Yellow is a banana color.';
            break;
        case('green'):
            color = 'You know what\'s green? Money baby! I\'m talking cash! Benjamins! Stacks! Scrilla! at least in the US, I don\'t know what color cash is in other countries. Maybe it\'s green, maybe it\'s purple. I just dont\'t know.';
            break;
        case('blue'):
            color = 'Blue is sky color';
            break;
        case('indigo'):
            color = 'indigo is purple with worse PR';
            break;
        case('violet'):
            color = 'violet is purple with flair';
            break;
        default:
            color = 'I don\'t even know what that color is';
    }
    alert(color);
    console.log(color)
    return color;
}
whatIsthisColor(userColor);
alert("Here's a random color: " + randomColor);
whatIsthisColor(randomColor);

*/

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */
function caculateTotal(luckyNumber, total) {
    if(luckyNumber === 0){
        return 'Sorry you still owe: $'+ total;
    }else if(luckyNumber === 1){
        return 'You Only owe: $' + total - (.10 * +total);
    }else if(luckyNumber === 2){
        return 'You Only owe: $' + total - (.25 * +total);
    }else if(luckyNumber === 3){
        return 'You Only owe: $' + total - (.35 * +total);
    }else if(luckyNumber === 4){
        return 'You Only owe: $' + total - (.50 * total);
    }else{
        return 'Congratulations it is Free!';
    }
}
    var luckyNumber = Math.floor(Math.random() * 6);
    var userPrice = prompt('What was your total price?')
    alert('Your lucky number is: ' + luckyNumber);
    alert( caculateTotal(4, userPrice));
/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */


})();