
// CONDITIONALS

let mood = "angry";

// if you only have 1 linne of code you do NOT need {}
// in the world of JS indentation does not matter
if (mood.toLowerCase() === "sad") console.log("I am very sad today");


if (mood.toLowerCase() === "sad"){
    console.log("I am very sad")
} else if (mood.toLowerCase() === "angry"){
    console.log("I'm mad")
} else {
    console.log("I am happy today!")
};

mood = mood.toLowerCase();

if (mood === "sad" || mood === "angry") {
    console.log("Sounds like you need some nature time.")
};

//we can use conditionals to check if values are truthy
//values that are falsy are (false, 0, null, "", NaN, undefined)

if (mood) {
    console.log("You have a mood today.")
} else {
    console.log('No mood detected')
};


// LOOPS IN JS

// iterator loop akinn to the range() function in Pythonn
// just like range() takes a start, stop, step we can do the same in JS

// for i in range(0,5,1) or range(5)
    //start    //stop  //step
for (let i = 0; i < 5; i++) {
    console.log(i)       
    console.log("Iteration", i++) //the ++ is PRE increment, utilizing the value BEFORE we increment it.
}

// when thinkinng about the position of ++ || --
// when ++ is in FRONT of your value it increments FIRST before doing anything with that value (post increment).
// when the ++ is BEHIND your value it first utilizes the value THEN increments it (pre increment).


//while loops are pretty much the exact same

let count = 0;
while (count < 5) console.log("Count:", count++);

// JS has Do-While loops
// the differennce is the conditional is checked AFTER the first iteration
// vs a regular while loop checks the conditional BEFORE the first iteration

// Do-While loops ALWAYS run at least 1 time. Helpful for if you want to do something on 
// your site at least 1 time and only if it adheres to condition
let num = 1;

do {
    console.log("Number", num++)
} while (num < 1);

// FOR IN && FOR OF LOOPS

// For In loops grabs the index. similar to "for i in range(len(arr)):"

const fruits = ['strawberries', 'raspberries', 'orange', 'mango'];

// in is like WHERE is it located IN this container
for (const i in fruits) {
    console.log(`My fruit: ${fruits[i]}, index: ${i}`)
}

//longhanded way from above
//helpful if you wannt CONTROL over your step iterator like below
for (let i = 0; i < fruits.length; i+=2) console.log(`My fruit: ${fruits[i]}, index: ${i}`)

// For of loops grabs the value! similar to "for fruit inn fruits:"

// of is like WHAT is it inside this containner
for (const fruit of fruits){
    console.log(fruit)
}

//NESTED FOR LOOPS
//TWO-SUM 

const myList = [0, 1, 5, 7, 3]
const target = 6

for (let i = 0; i < myList.length; i++){
    for (let j = i + 1 ; j < myList.length; j++) {
        if (myList[i] + myList[j] === target){
            console.log(`Target found at indexes ${i} and ${j}`)
        }
    }
}


// FUNCTIONS IN JAVASCRIPT
// we declare functions in JS by using the keyword 'function' akinn to 'def' in Python

//regular named function
function greet(name) {
    
    return `Hello there ${name}`
};


// const message = greet('Caleb');

// console.log(message);

//everything within this function has access to the functions scope
//so inner functions have access to variables if they are inside the same functionn
function outer(){
    // create a variable within the outer funnction
    // these are local variables INSIDE the outer function
    let message = "Hello";
    console.log("Outer function");
    
    function inner(){
        console.log(message); //has access to message variable because its within the outer functionns scope
        
        
    }
    
    return inner;
}
//I'm only calling the outside function
// outer(); //because inside the outer function the inner function is returned we have access to it but we STILL haven't called it.

outer()();



// console.log(message); //message is not defined because it was CREATED innside outer() function scope


//Decorator conversationn
//the purpose behind outer functinsn & inner functions as decorators denoted byu the @ symbol
//the outer function of a decorator absorbs the original function, the inner function absorbs the arguments (however many their many be)
//purpose is to EXTEND the functionnality of a function without changingn the original function

//an example of wrapping differennt KINDS of funnctions with a decorator
//demonstratingn why we NEED the outer & inner functions, so that the outer one can absorb the fucntion itself
//and the inner can absorb the arguments from the original function

//@checkProperString
function shout(name){
    console.log(name.toUpperCase());
}

//@checkProperString
function whisper(name, amount){
    for(i in amount){
        console.log(name.toLowerCase())
    }
}


//ARROW FUNCTIONS



//Arrow functions are anonymous functions aka do NOT need to be stored in memory
//Arrow function syntax 
// () => {}

//the below does NOT get stored in memory!
//this is self calling!
console.log((() => {
    return 'I am an arrow function'
})()); 

/* arrow functions do NOT need the following 
    - {} do denotate the body of the function
    - a return
*/

const add = (a,b) => a + b;
console.log(add(5,2));
//same as above WITHOUT being stored in memory
console.log(((a,b) => a + b)(5,2));



//self in Python OOP refers to that SPECIFIC object. you use self when you are INSIDE an object
//akin to this in JS
//arrow functionns ABSORB the this binding from its parent scope

function myFunc(name){
    // binding this value to the function 
    this.value = 0; 
    console.log(arguments) //console.log the arguments of the function
    
    //regular name functions want to act on their own aka want to have THEIR own binding and arguments
    function myInnerFunc(){
        // doesnn't get bound correctly and does not know what this.value
        console.log(++this.value);
        console.log(arguments); //regular named functions do NOT absorb arguments from parent scope
        console.log(name); //still have access to scope aand specific variaables
    };
    
    return myInnerFunc;
};

//instantiating a new object
const instance = new myFunc('Chris');
instance();


//arrow function example
function myArrowFunc(name){
    // binding this value to the function 
    this.value = 0; 
    console.log(arguments) //we have access to the arguments iterator object
    
    //arrow functions are team players, they ABSORB from their parent
    const myInnerFunc = () => {
        // arrow functions absorb the this binding from its parent scope
        console.log(++this.value)
        console.log(arguments) //arrow functions ABSORB the aarguments of their parent scope
    };
    
    return myInnerFunc;
};

//instantiating a new object
const instance2 = new myArrowFunc('Kayla');
instance2();


//IN GENERAL! Arrow functions are more versaatile and helpful when it comes to
//OOP & creating simple functions within our event handlers without the need to store the functionality anywhere



// **Objective:**
// The objective of this exercise is to create a program that generates the Fibonacci sequence up to a specified number of terms using a for loop with incremental values.

// ---

// **Problem Statement:**
// You are tasked with developing a program that calculates and displays the Fibonacci sequence up to a user-defined number of terms. The Fibonacci sequence starts with 0 and 1, and each subsequent term is the sum of the two preceding terms (e.g., 0, 1, 1, 2, 3, 5, 8, ...).

// **Instructions:**

// 1. Prompt the user to enter the number of terms they want in the Fibonacci sequence.
// 2. Initialize variables to store the first two terms of the sequence (`firstTerm` and `secondTerm`) and display them.
// 3. Use a for loop to calculate and display the remaining terms of the sequence.
// 4. Inside the loop, calculate the next term (`nextTerm`) by adding the current term to the previous term.
// 5. Update the values of the variables (`firstTerm`, `secondTerm`) to progress through the sequence.
// 6. Repeat the loop until the desired number of terms is generated.

// **Hints:**

// - Initialize `firstTerm` as 0 and `secondTerm` as 1 to start the sequence.
// - Use a counter variable to control the number of terms generated.
// - Ensure the loop continues until the desired number of terms is reached.


function fibo(numOfTerms){
    let firstTerm = 0;
    let secondTerm = 1;
    
    // need a for loop here 
    // with 0 and go up to the numOfTerms
    // inside the loop we need to update firstTerm and secondTerm
    
    // 0, 1, 1, 2, 3, 5, 8, 13...
    for (let i in numOfTerms){
        //all the goodies here
    }
}