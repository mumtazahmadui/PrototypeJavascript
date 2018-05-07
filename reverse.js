// CHALLENGE 1: REVERSE A STRING

function reverseString(str) {

	let string = '';
	for(let i = str.length-1; i >= 0; i--) {
		string = string + str[i];
	}
	return string;

	//...............2 ------------
	// let string = '';
	// for (let itm of str) {
	// 	string = itm + string;
	// }
	// return string;
	
	//...............3------------
	// let string = '';
	// str.split('').forEach(function (char) {
	// 	string = char + string;
	// })
	// return string;
}

console.log(reverseString('welcome'));

// CHALLENGE 2: SUM ARGUMENTS
function sum () {
  let sum = 0;
  for (txt of arguments) {
    sum = txt + sum;
  }
  return sum;

  // let str = Array.prototype.slice.call(arguments);
  // let string = 0;
  // // for (let i = 0; i<arr.length; i++) {
  // //   sum += arr[i];
  // // }
  // str.forEach(char => string = char + string);
  // return string;

  // var sum = 0;
  // for(var i=0; i<arguments.length; i++) {
  //   sum += arguments[i];
  // }
  // return sum;
}
console.log(sum(1,7,4,(7)));