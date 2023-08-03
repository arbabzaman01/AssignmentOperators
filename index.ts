//Assignment Operators plus ,minus ,multiply,divide ,modulus
//addition assignment operator
//basic assignment operator
var a=5;
console.log("value of variable :");
console.log(a);
var a1:number=2;
a1 +=4;
console.log("add assignment operator is:");
console.log(a1);
//substraction assignment operator
var a2:number=9;
a2-=3;
console.log("subtarct assignment operator is :");
console.log(a2);
//multiplication assignment operator
var a3:number=5;
a3 *= 4;
console.log("multiplication assignment oprerator is:");
console.log(a3);
//divison assignment operator
var a5:number=9;
a5 /=7;
console.log("divison assignment opeartot is :");
// modulus assignment operator
var a6:number=7;
a6 %= 6;
console.log("modulus assignment operator is:");
console.log(a6);
/*You are developing a simple online store application
 in TypeScript. You have a variable totalPrice initialized
  with 100. Implement the following scenarios using assignment operators:
Apply a discount of 20 to the totalPrice using the appropriate assignment operator.
Increase the totalPrice by 50 units using the appropriate assignment operator.
Calculate the final price after applying a tax rate of 8% to the updated totalPrice.
Write TypeScript code that demonstrates each of these scenarios using 
assignment operators and prints the final result.*/
//total price initialez with 100
console.log("initial total price is:");
var totalPrice:number=100;
console.log(totalPrice);
console.log("discout 20 then total price is:");
totalPrice -=20;
console.log(totalPrice);
console.log("increase total price  by 50 unit is:");
totalPrice +=50;
console.log(totalPrice);
console.log("final price after tax  8% is:");
const taxRate:number=0.08;
 const finalPrice:number=totalPrice*totalPrice*taxRate;
console.log("final price :")
console.log(finalPrice);
/*Create a variable count and set its initial value to 5. Use the appropriate 
assignment operator to increment count by 3, then print its final value.*/
var count:number=5;
count +=3;
console.log("result is:");
console.log(count);
/*You have a variable total initialized with 50. Use the 
appropriate assignment operator 
to decrease total by 15 and print the updated value*/
var total:number=50;
total -=15;
console.log("result is:");
console.log(total);
/*Given two variables x and y with initial values 1 and 2, 
respectively, swap 
their values using assignment operators without using a
 temporary variable.*/
 var x:number=1;
 var y:number=2;
 //always valid for without using template swaping 
 /*
 x=x+y;
 y=x-y;
 x=x-y;
 */
 x=x+y;
 y=x-y;
 x=x-y;
 console.log("x after swap:",x);
 console.log("y after swap:",y);
 /*Implement a discount calculation for an online store application. 
 Create a variable price with an initial value of 100. Use the appropriate 
 assignment operator to apply a 
 discount of 20% and calculate the final discounted price.*/
 var price:number=100;
 const discountPercentage:number=20;
const discountAmount:number=(price*20)/100;
const finalDiscount:number=price-discountAmount;
console.log("final discounted amount:");
console.log(discountAmount);
/*Implement a simple counter program. Create a variable counter 
with an initial value of 0. Use assignment operators to increment
 the counter by 1, then decrement it by 2, then increment 
it by 5, and finally print the final value of the counter*/
var counter=0;
counter +=1;
console.log("increment 1:");
console.log(counter);
counter -=2;
console.log("decrement 2:");
console.log(counter);
counter +=5;
console.log("increment 5:");
console.log(counter);
var finalValue:number=counter;
console.log("final value:");
console.log(finalValue);
/*Calculate the area of a rectangle. Create variables
 length and width with initial values 10 and 5, respectively.
  Calculate the area using the formula area = length * width, then use
   the appropriate assignment operator
 to update the length to 15, and recalculate the area with the updated values.*/
var  length:number=10;
var width:number=5;
var area:number=length*width;
area +=15;
console.log("result is:");
console.log(area);
/*
*Compound Assignment Operators:
Create a variable value and set its initial value to 8. 
Use the compound assignment operators (+=, -=)
 to add 3, then subtract 2, and then multiply by 5. Print the final value of value.*/

var value:number=8;
 value +=3;
 console.log("add assignment operator:");
 console.log(value);
 value -=2;
 console.log("substarct assignment operator:");
 console.log(value);
 value *= 5;
 console.log("mulytiply assignment opeartr:");
console.log(value);
console.log("final value:");
console.log(value);
/*Create a variable radius and set its initial value to 5.
 Use the appropriate assignment operators to calculate the area
  of a circle using the formula area = π * (radius * radius) 
(where π is approximately 3.14159). Print the final area value.*/
var radius:number=5;
var pi:number=3.14159;
var areaOfCircle:number=pi* (radius * radius) ;
console.log("area of circle is:");
console.log(areaOfCircle);
 /*Create a variable counter and set its initial value to
  5. Use the appropriate assignment operators to increment counter by 1, 
 then decrement it by 2, and finally print the final value of counter.
 */
var counter :number=5;
counter +=1;
console.log("value after increment 1:");
console.log(counter);
counter -=2;
console.log("decrement after 2:");
console.log(counter);
var finalValue:number=counter;
console.log("final value of counter:");
console.log(counter);





