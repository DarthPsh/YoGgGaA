
require('es6-promise').polyfill();

window.addEventListener('DOMContentLoaded', function() {

	"use strict"


	let myCalc = require("./parts/myCalc.js"),
		myForm = require("./parts/myForm.js"),
		mySlider = require("./parts/mySlider.js"),
		myTabs = require("./parts/myTabs.js"),
		myTimer = require("./parts/myTimer.js"),
		myModal = require("./parts/myModal.js");


	myCalc();
	myForm();
	mySlider();
	myTabs();
	myTimer();
	myModal();

});