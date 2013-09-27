/* 
//Programmer: 	Nanette K. Hartley
//Language: 		JavaScript
//Filename:  		customerStats.js
//Date: 			09272013
//Description: 	Program calculates the average per hour and the total of customers during a business day.
*/

//declaring variables and constants
var num1, num2, num3, num4 = 0;		//the number of customers per hour.  There should be as many as the value of HOURS.
var total, average = 0.0;			//the total and average per hour of the customers.
var HOURS = 4.0;					//the number of hours the business is open that day.
var BR = "<br />";					//HTML line break
var ES = " ";						//extra space
var LE = "."						//period; line end

//welcome the user
document.write("Welcome to Sunshine Books Customer Statistics Program!" + BR + BR);

//request input from user
num1 = prompt("Enter the number of customers in the first hour:", ES);
num1 = parseInt(num1);

num2 = prompt("Enter the number of customers in the second hour:", ES);
num2 = parseInt(num2);

num3 = prompt("Enter the number of customers in the third hour:", ES);
num3 = parseInt(num3);

num4 = prompt("Enter the number of customers in the fourth hour:", ES);
num4 = parseInt(num4);

//process of total and average
total = num1 + num2 + num3 + num4;
average = total / HOURS;

//output of processed values
document.write("The total number of customers today was" + ES + total + LE + BR);
document.write("The average number of customers per hour was" + ES + average + LE + BR + BR);

//thank the user and end the Program
document.write("Thank you for calculating your daily statistics with us!" + BR);