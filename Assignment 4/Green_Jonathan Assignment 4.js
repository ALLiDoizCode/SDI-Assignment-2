//alert("JavaScript works!");

//Jonathan Green
//SDI 1402
//Project 4
//problem solving fuctions

//global variables
var stringReturn;
var stringReturn2;
var stringReturn3;
var nameReturn;
var num = "843-881-7406"
//fuctions

//CHECK STRING FUNCTION
var checkString = function(phoneNum){
	numLength = phoneNum.length
	index1 = phoneNum.indexOf("-")
	index2 = phoneNum.lastIndexOf("-")
	
	if(index1 == 3 & index2 == 7 & numLength == 12) {
		return true;
	} else {
		return false;
	}
};


var checkString2 = function(email){
	




	


};


//CHECK NAME FUNCTION
var checkname = function(){
	
	
	
	
	
}

//main code
//stringReturn = checkString("843-881-7406");

//console.log(stringReturn);

//stringReturn2 = checkString2("di3twater@gmail.com");
var email = "di3twater@gmail.com"
console.log(email.indexOf("com"));
