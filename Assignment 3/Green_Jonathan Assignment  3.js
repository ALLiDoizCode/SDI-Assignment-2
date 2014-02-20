//alert("JavaScript works!");

//Jonathan Green
//SDI 1402
//Project 3
//Assignment 3

var geforceCards = ["GTX 750", "GTX 760", "GTX 770", "GTX 780"],
	pricePerCard = [120.00, 250.00, 370.00, 570.00],
	typeOfConsumer = ["Casual User", "Moderate Gamer", "Gamer", "Enthusiast"];

var GpuGuide = function(BestCard) {
	
	console.log("Nvidia 7Series includes the " + geforceCards + " but which one should you pick.");
	console.log("That depends on if your a " + typeOfConsumer[0] + ", " + typeOfConsumer[1] + ", " + typeOfConsumer[2] + " or " + typeOfConsumer[3] + ".");
	
	
	console.log("If you are a " + typeOfConsumer[3] + " then a " + geforceCards[3] + " at a price point of $" + pricePerCard[3] + " should do.")
	console.log("If you are a " + typeOfConsumer[2] + " then a " + geforceCards[2] + " at a price point of $" + pricePerCard[2] + " should do.")
	console.log("If you are a " + typeOfConsumer[1] + " then a " + geforceCards[1] + " at a price point of $" + pricePerCard[1] + " should do.")
	console.log("If you are a " + typeOfConsumer[0] + " then a " + geforceCards[0] + " at a price point of $" + pricePerCard[0] + " should do.")
	
	}



var noob = confirm("is this your first time installing a videocard ok for yes cancle for no")	
	
	if (noob == true) {
		console.log("awsome then this will be easy")
};
	if (noob == false) {
		console.log( "Don't worry you will be fine")
};


var GraphicsProcessingUnit = function(Gpu) {
	
	var videoCards = false
	
	while (Gpu > 1) {
		console.log("make sure you have a PSU over 750watts");
	
		videoCards = confirm("do you have more then two videocards")
		
		if(videoCards == false) {
			Gpu = Gpu - 1
		} else {
			return Gpu;
		}

	};
};



var Chomp = function(t) { 
	var text = t
	//console.log("Now install the " + text); 
	Print = console.log("lets install " + text);
	
	//console.log(Print);
	return Print;

};

var PCIExpress = function(p) {
	for (var PCI = 4; PCI > 1; PCI --) {
		console.log ("If you have " + PCI + " PCI-E slots install into slot closes to power supply")
	};
	console.log("If 1 install into any slot");
	return PCI
};
		


var Print = Chomp
var videoCard = GraphicsProcessingUnit(2);
var PCIE = PCIExpress


GpuGuide(geforceCards[3])

console.log("It looks like you have " + videoCard + " videocards");

PCIE ()

Print("our parts");