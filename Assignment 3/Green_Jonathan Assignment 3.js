//alert("JavaScript works!");

//Jonathan Green
//SDI 1402
//Project 3
//Assignment 3

var geforceCards = ["GTX 750", "GTX 760", "GTX 770", "GTX 780"],
	pricePerCard = [, , , ],
	typeOfConsumer = ["Casual User", "Moderate Gamer", "Gamer", "Enthusiast"];


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

console.log("It looks like you have " + videoCard + " videocards");

PCIE ()

Print("our parts");