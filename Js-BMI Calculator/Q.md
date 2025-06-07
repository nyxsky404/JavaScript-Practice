Js-BMI Calculator
Time Limit: 2, Memory Limit: 128000
Create a program to calculate a person’s Body Mass Index (BMI) and determine their health category.
You are given a person’s weight in kilograms and height in meters stored in the variables weight and height respectively.
Calculate the BMI using the formula:

BMI = weight / (height * height);
Determine the health category based on the BMI:
BMI < 18.5 → "Underweight"
18.5 <= BMI < 24.9 → "Normal weight"
25 <= BMI < 29.9 → "Overweight"
BMI >= 30 → "Obesity"
Print the BMI and health category.
BMI value must be printed up to 2 decimal places (You can use .toFixed() Method to achieve it).
Input
height: an integer representing height in kg
weight: an integer representing weight meter
Output
Print the BMI and health category in the format:
BMI: Value of BMI
Health Category: Category based on BMI
Example
input  :
70  
1.75

Output  :
Your BMI is 22.86  
Health Category: Normal weight