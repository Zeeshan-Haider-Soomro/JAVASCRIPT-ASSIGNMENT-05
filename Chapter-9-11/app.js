// QUESTION 01) Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

var cityName = prompt("Enter any city name :","karachi");
if (cityName == "karachi") {
    alert("Welcome to the city of lights");
}
else {
    alert("Welcome Sir!")
}

// QUESTION 02) Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("What's your gender is: ")
if (gender == "male") {
    alert("Good Morning Sir");
}
else if (gender == "female") {
    alert("Good Morning Ma’am");
}
else {
    alert("Have a Nice Day!");
}

// QUESTION 03) Write a program to take input color of road traffic signal from the user & show the message according to this table:
// Red      Must Stop
// Yellow       Ready to move
// Green      Move now

var trafficLight = prompt("Enter traffic light you are seeing on the road :");
if (trafficLight == "red") {
    alert("Must Stop");
}
else if (trafficLight == "yellow") {
    alert("Ready to move");
}
else if (trafficLight == "green") {
    alert("Move now");
}
else {
    alert("You are colour blind.Must visit Doctor")
}

// QUESTION 04) Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

var fuel = prompt("Enter remaining fuel of your car (must be in litres):");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}
else {
    alert("You are ready to go");
}

// QUESTION 05) Run this script, & check whether alert message would be displayed or not. Record the outputs.

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}

else if (c === 13){
alert("condition 2 is true");
}

else if (++c < 14){
alert("condition 3 is true");
}

else if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
else if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

// QUESTION 06) // Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

document.write("<h1>Marks Sheet<br><br></h1>");

var totalMarks = 300;
document.write("Total marks : " + totalMarks + "<br>");

var obtainedMarks = +prompt("Enter the marks that you obtained in 3 subjects");
document.write("Marks obtained : " + obtainedMarks + "<br>");

var per = (obtainedMarks/totalMarks) * 100;

if (per >= 80) {
    document.write(`Percentage : ${per}%<br>Grade : A-one<br>Remarks : Excellent`);
}
else if (per >= 70) {
    document.write(`Percentage : ${per}%<br>Grade : A<br>Remarks : Good`);
}
else if (per < 60) {
    document.write(`Percentage : ${per}%<br>Grade : Fail<br>Remarks : Sorry`);
}
else {
    alert("Gali sunega munh se percentage likh!")
}

// QUESTION 07) Guess game:

let a = 7;
let b = +prompt("guess the secret number\n(Hint: secret number is ranging from 1 to 10)");

if (b == a) {
    alert("Bingo! Correct answer");
}
else if (b == ++a) {
    alert("Close enough to the correct answer");
}
else {
    alert("You guess it wrong 😭")
}

// QUESTION 08) Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

let number = +prompt("Enter any number :");
if (number/3) {
    alert("The number you entered is divisible by 3")
}
else {
    alert("The number you entered is not divisible by 3")
}

// QUESTION 09 Write a program that checks whether the given input is an even number or an odd number.

let evenOdd = +prompt("Enter any Number :");

if (evenOdd%2 == 0) {
    alert("Even");
}
else if (evenOdd%2 == 1) {
    alert("Odd");
}
else {
    alert("Please enter a number!");
}

// QUESTION 10) Write a program that takes temperature as input and shows a message based on following criteria

let temp = prompt("Enter your room temperature :");
if (temp > 40) {
    alert("It is too hot outside");
}
else if (temp > 30) {
    alert("The Weather today is Normal");
}
else if (temp > 20) {
    alert("Today’s Weather is cool");
}
else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool");
}
else {
    alert("Please write temperatue in number");
}

// QUESTION 11) Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:

let firstNumber = +prompt("Enter first Number :");
let operation = prompt("Enter Operator :")
let secondNumber = +prompt("Enter Second Number :");

if (operation == "+") {
    alert(firstNumber + secondNumber);
}
else if (operation == "-") {
    alert(firstNumber - secondNumber);
}
else if (operation == "*") {
    alert(firstNumber * secondNumber);
}
else if (operation == "/") {
    alert(firstNumber / secondNumber);
}
else if (operation == "%") {
    alert(firstNumber % secondNumber);
}
else {
    alert("Oops you entered invalid character")
}

// *********************************************The End***********************************************