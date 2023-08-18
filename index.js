"use strict";
//Q1.Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
console.log("Q1.");
console.log("Celsius to Fahrenheit and Vice verse");
var Celsius = 20;
var Fahrenheit = (Celsius * 1.8) + 32;
console.log(Fahrenheit);
var F = 60;
var ConvertedinCelcius = (F - 32) * 5 / 9;
console.log(ConvertedinCelcius);
console.log("Voila");
//same solution by function
function CelsiusToFahrenheit(degree) {
    console.log("The temperature in Farenheit is=" + degree * 1.8 + 32);
}
CelsiusToFahrenheit(37);
//Q2. Write a program that calculates the percentage.
console.log("Q2.");
console.log("Percentage Calculation");
var obtainedMarks = 654;
var totalMarks = 1100;
var percentage = (obtainedMarks / 1100) * 100;
console.log(percentage);
//Q3.Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
console.log("Q3.");
console.log("days of week");
var daysInWeek = 7;
var inputDays = 75;
var daysIntoWeeks = inputDays / 7;
console.log(daysIntoWeeks);
//Q4. Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
console.log("Q4.");
console.log("Discount project");
var givenPriceItem = 100;
var discount10 = 10 / givenPriceItem * 100;
var discount5 = 5 / givenPriceItem * 100;
if (givenPriceItem >= 200) {
    console.log("10% discount", givenPriceItem - discount10);
}
else {
    console.log("5% discount", givenPriceItem - discount5);
}
//Q.5 Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
console.log("Q.5");
console.log("Catagory of User");
var age = 51;
if (age >= 0 && age <= 12) {
    console.log("you are a Child");
}
else if (age >= 13 && age <= 19) {
    console.log("You are a Teenager");
}
else {
    console.log("you are Adult");
}
//Q6. Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
console.log("Q6.");
console.log("weather");
var temperature = 15;
if (temperature < 18) {
    console.log("Please wear the warm clothes");
}
else {
    console.log("Please wear the cold clothes");
}
//Q7. Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
console.log("Q7.");
console.log("division check");
var n = 331;
if (n % 5 == 0) {
    console.log("This number is divisible by 5");
}
else if (n % 3 == 0) {
    console.log("This number is divisible by 3");
}
else {
    console.log("This number is neither divisible by 5 nor by 3 ");
}
//Q8. Write a program that checks if the given year is leap year or not.
console.log("Q8.");
console.log("Leap year checking");
var theYear = 2026;
if (theYear % 4 == 0) {
    console.log("This is a Leap Year");
}
else {
    console.log("This is not the Leap year");
}
