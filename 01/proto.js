/*Statement : Prototype Inheritance in Javascript
Its working and Explanation
*/

/*Points to Notice :
1. How prototype methods are created?
2. How one prototype function is inherited by other function?
3. Syntax for calling base function in sub function?
4. Syntax for copying parents prototype to childs prototype
*/

//Create first constructor function which return firstValue with value 1
var firstObject = function () {
    this.firstValue = '1';
}

//Create a prototype function for the first constructor function named FirstMultiply
firstObject.prototype.FirstMultiply = function () {
    return this.firstValue * this.firstValue;
}

//Create second constructor function 'secondObject' which return secondValue with value 2 and calls base function firstObject using 'firstObject.call(this)'
var secondObject = function () {
    firstObject.call(this);
    this.secondValue = '2';
}

//Copy prototype method of first function into sencod function using Object.create
secondObject.prototype = Object.create(firstObject.prototype);

//Second function's prototype function called SecondMultiply
secondObject.prototype.SecondMultiply = function () {
    return this.secondValue * this.firstValue;
}

//Create third constructor function 'thirdObject' which return thirdValue with value 3 and calls base function secondObject using 'secondObject.call(this)'
var thirdObject = function () {
    secondObject.call(this);
    this.thirdValue = '3';
}

//Copy prototype method of secondObject function into third function using Object.create
thirdObject.prototype = Object.create(secondObject.prototype);

//Third function's prototype function called ThirdMultiply
thirdObject.prototype.ThirdMultiply = function () {
    return this.thirdValue * this.secondValue * this.firstValue;
}

//Create a new object of constructor function thirdObject
var accessAllVariableObject = new thirdObject();

console.log(accessAllVariableObject.SecondMultiply());

//Rseult : accessAllVariableObject will have access to all the prototype function 