var myFunction = function () {
    this.name = 'Mumtaz';
    this.profession = 'Developer';
}

//Prototype
myFunction.prototype.getAge = function (age) {
    console.log('Correct Age :' + age);
}

var childObject = new myFunction();
childObject.getAge(27);

//Sbu Class
var subClass=function(name, profession)
{
    myFunction.call(this);
    debugger;
    this.name=name;
    this.profession=profession;
}

subClass.prototype=Object.create(myFunction.prototype);

subClass.prototype.getAge=function(...n)
{
    console.log("I wont print age");
}
// subClass.prototype.constructor=subClass;
console.dir(subClass);



var software= new subClass('m','a');
software.getAge()
