Tips of Sass:

url: sass-lang.com install npm
cmd : gem install sass
watch end: sass --watch scss/style.scss:folder/style.css
segmentation :- Segmentation is going to allow to breakup a code into seprate file for easy to maintable file.
making a code cleaner with nesting.
partial stylesheet _(underscore)

Flex:
display: flex;
flex-wrap: wrap/no-wrap/wrap-reverse;
justify-contnet: center / space-around;
flex-direction: row/column/row-reverse;
transition: all 1s;
transform: scale(1.1);

Animation:
animation-name: rain;
animation-duration: 2s
animation-timing-function: linear;
animation-delay: 0s;
animation-iteration-count: infinite;

@keyframe rain {
	0% {
	color: red;
	font-size: 20px
	}
	25% {
	color: orange;
	}
}

-------------------------------------
NODEJS

Nodejs ia platform build on chrome's javascript runtime. It used to build fast, scalable, network application.
short ans: javascript on the server

Asynchronous i/o
-> does not need to wait for one process to finish before starting the other (non blocking)
-> this makes nodejs app extermly fast & efficient.

PROMISE:
Promise are a tool for managing asynchronous operations. It regular track asynchorousluy operation unit its compile including errors.

var isMomo = false;
var willGet = new Promise(function (resolve, reject){
	if(isMomo) {
	var sData = {
		fName : 'abc',
		lName : 'xyz'
      },
      resolve(sData)
  } else {
  	var reson = new Error('Data not found');
  	reject (reson);
  }
})

//call the promise:
var call = function () {
	willGet
	   .then(function (response) {
	      console.log(response);
	   })
	   .error (function (error) {
	     console.log(error)
	   })
}

call();

// some point of js
call and apply call the function immediately but bind return a function that when later executed.
-> call - pass argument one by one
-> apply - pass argument as an array
-> bind - allow pass array or any no. of arguments.
