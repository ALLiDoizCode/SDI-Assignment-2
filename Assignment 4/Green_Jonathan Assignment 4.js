//alert("JavaScript works!");

//Jonathan Green
//SDI 1402
//Project 4
//problem solving fuctions


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

//string to number FUNCTIONS
var numcheck = function(string){
	var Floor = Math.floor;
	int = Floor(string)
	
	return int;
}

//ARRAY FUNCTIONS
//next largest number in an array 
var arrayCheck = function(ARRAY, Num) {
   var returnNumber = -1;

   for(var i=0; i < ARRAY.length; i++) {
       if (ARRAY[i] > Num) {
           returnNumber = ARRAY[i];
           break;
       }
   }

   return returnNumber;
}



// number of decimal places
var Decimals = function(num, Dec) {

   numValue = num.toFixed(Dec);

   return numValue;
};





//main code

//phone num
stringReturn = checkString("843-881-7406");
console.log("This number is " + stringReturn);

//email
stringReturn2 = checkString2("di3twater@gmail.com");
console.log("This email is " + stringReturn2);

//http
stringurl = checkUrl("http://");
console.log("This address is " + stringurl);

//string to int
console.log(numcheck("5001.22"));

//next high Array
highNum = arrayCheck([1,8,11,13,15,21],14);
console.log(highNum);

//decimal
numDec = Decimals(52.14236,3);
console.log(numDec);