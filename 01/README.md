# Prototype in Javascript
<header>Statement : Prototype Inheritance in Javascript
Its working and Explanation


<b>Points to Notice :</b>
1. How prototype methods are created?
2. How one prototype function is inherited by other function?
3. Syntax for calling base function in sub function?
4. Syntax for copying parents prototype to childs prototype
</header>

<p>Create first constructor function which return firstValue with value 1</p>
<br />
<code>
var firstObject = function () {
    this.firstValue = '1';
}
</code>

<p>Create a prototype function for the first constructor function named FirstMultiply</p>
<br />
<code>
firstObject.prototype.FirstMultiply = function () {
    return this.firstValue * this.firstValue;
}
</code>

<p>Create second constructor function 'secondObject' which return secondValue with value 2 and calls base function firstObject using 'firstObject.call(this)'</p>
<br />
<code>
var secondObject = function () {
    firstObject.call(this);
    this.secondValue = '2';
}
</code>

<p>Copy prototype method of first function into sencod function using Object.create</p>
<br />
<code>
secondObject.prototype = Object.create(firstObject.prototype);
</code>

<p>Second function's prototype function called SecondMultiply</p>
<br />
<code>
secondObject.prototype.SecondMultiply = function () {
    return this.secondValue * this.firstValue;
}
</code>

<p>Create third constructor function 'thirdObject' which return thirdValue with value 3 and calls base function secondObject using 'secondObject.call(this)'</p>
<br />
<code>
var thirdObject = function () {
    secondObject.call(this);
    this.thirdValue = '3';
}
</code>

<p>Copy prototype method of secondObject function into third function using Object.create</p>
<br />
<code>
thirdObject.prototype = Object.create(secondObject.prototype);
</code>

<p>Third function's prototype function called ThirdMultiply</p>
<br />
<code>
thirdObject.prototype.ThirdMultiply = function () {
    return this.thirdValue * this.secondValue * this.firstValue;
}
</code>

<p>Create a new object of constructor function thirdObject</p>
var accessAllVariableObject = new thirdObject();

console.log(accessAllVariableObject.SecondMultiply());

<h3>Rseult : accessAllVariableObject will have access to all the prototype function </h3>
