"use strict"

//tack_2

alert("My surname is Yatsko");

//tack_3

let greetings = "hello everyone who is learning javascript";

let message = "studies";


//Копируем значение

message = greetings;

//Проверяем

alert(greetings);
alert(message);

//tack_4


const user = {
    yourName: "Alexander",
   // console.log(typeof yourName); string
   
   
   yourAge: "33",
   //console.log(typeof yourAge);number
   
   isAdult: true,
   //console.log(typeof isAdult);boolean
   
   
   yourEnthusiasm: undefined,
   //console.log(typeof yourEnthusiasm);undefined
   
   
   yourHeight: null
   //console.log(typeof yourHeight);null
   };

   //task_5

let isAdult = confirm("Are you an adult?");

alert( isAdult );

//tack_6

const myName = "Alexander";
const mySurname = "Yatsko";
const studyGroup = "Javascript";
const yearOfBirth = 1988;
let married = true;

/*
console.log(typeof yearOfBirth);
console.log(typeof married);
console.log(typeof myName);
*/
let myWeight = null;
let myHairStyle;
console.log(typeof myWeight);
console.log(typeof myHairSyle);

//task_7

let userLogin = prompt("What is your login?");

alert("Dear User,your login is " + userLogin);


let userEmail = prompt("What is your email?");

alert("Dear User,your email is  " + userEmail);


let userPassword = prompt("What is your password?");

alert("Dear User, your password is  " + userPassword);

//task_8

let secondsInMinute = 60;

let minutesInHour = 60;

let secondsInHour = secondsInMinute*minutesInHour;

console.log (secondsInHour);


hoursInDay = 24;

let secondsInDay = secondsInHour*hoursInDay;

console.log(secondsInDay);
 
daysInMonth = 30;

let secondsInMounth = secondsInDay*daysInMonth;

console.log(secondsInMounth);

//finish