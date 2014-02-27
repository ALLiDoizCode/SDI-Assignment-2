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

//CHECK EMAIL FUNCTION
var checkString2 = function(email){
	start = email.indexOf("@")
	end = email.indexOf(".")
	if(start === -1 || start === 0 || end === -1) {	
		return false;
	}
	
	if(start < end & start !== -1 & end !== -1 & start < end-1){
	
	return true;
	}
};


//CHECK url FUNCTION
var checkUrl = function(url){
	start = url.indexOf("h")
	end = url.lastIndexOf("/")
	middle = url.indexOf("s")
	
	if((start === 0 & end === 6) || (start === 0 & middle === 4 & end === 7 )){
		return true;
	}else{
		return false;
	}

	
	
}

//main code
stringReturn = checkString("843-881-7406");

console.log("This number is " + stringReturn);

stringReturn2 = checkString2("di3twater@gmail.com");

console.log("This email is " + stringReturn2);

stringurl = checkUrl("http://");

console.log("This address is " + stringurl);

