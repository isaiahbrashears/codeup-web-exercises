"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userFavoriteColor = prompt("Whats your favorite color?");

alert( userFavoriteColor + " is my favorite color too!");

/* Question 1 */
var littleMermaidDaysRented = prompt('How Many days have you rented "The Little Mermaid" for?');

var brotherBearDaysRented = prompt('How Many days have you rented "Brother Bear" for?');

var herculesDaysRented = prompt('How Many days have you rented "Hercules" for?');

var pricePerDayDollars = prompt('What is the price per day in dollars for a rental?');

alert('You owe $' + (Number(littleMermaidDaysRented) + Number(brotherBearDaysRented) + Number(herculesDaysRented)) * Number(pricePerDayDollars));


/* Question 2 */
var googleHourlyPayRateDollars = prompt('What do you get paid hourly in dollars working at Google?');

var amazonHourlyPayRateDollars = prompt('What do you get paid hourly in dollars working at Amazon?');

var facebookHourlyPayRateDollars = prompt('What do you get paid hourly in dollars working at Facebook?');

var googleHoursWorked = prompt('How many hours did you work at Google this week?');

var amazonHoursWorked = prompt('How many hours did you work at Amazon this week?');

var facebookHoursWorked = prompt('How many hours did you work at Facebook this week?');

alert('You have earned $' + ((googleHourlyPayRateDollars * googleHoursWorked) + (amazonHourlyPayRateDollars * amazonHoursWorked) + (facebookHourlyPayRateDollars * facebookHoursWorked)) + ' this week!');


/* Question 3*/
var classFullStatus = confirm('Does the class have any spots open?');

var noClassSchedulingConflict = confirm('Do you have this class period free?');

var canStudentEnroll = (classFullStatus && noClassSchedulingConflict);

alert('It is ' + canStudentEnroll + ' that you will be able to enroll at this time');


/* Question 4*/
var itemsNeededToBePurchasedForPomotion = prompt('In the promotion, how many items need to be purchased for the offer to be valid?');

var itemAmountThatWasPurchased = prompt('How many items did you purchase');

var premiumMemberStatus = confirm('Are you a Premium Member?');

var offerIsValid = confirm('Is the Offer Still Valid?');

var offerAppliedStatus = (((itemAmountThatWasPurchased >= itemsNeededToBePurchasedForPomotion) || premiumMemberStatus) && offerIsValid);

alert('It is ' + offerAppliedStatus + ' that the offer is valid.');